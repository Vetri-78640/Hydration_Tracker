import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { db } from "@/app/firebase/config";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useUser } from "@/app/context/UserContext";

const UserSettingsContext = createContext();

export const UserSettingsProvider = ({ children }) => {
    const { uid } = useUser();
    const [dailyGoal, setDailyGoal] = useState(2000);
    const [buttonAmounts, setButtonAmounts] = useState([100, 200, 500]);
    const [consumed, setConsumed] = useState(0);
    const initialLoad = useRef(true);

    // Load settings and consumed from Firestore when uid changes
    useEffect(() => {
        const fetchSettings = async () => {
            if (!uid) return;
            try {
                const docRef = doc(db, "userSettings", uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (typeof data.dailyGoal === 'number') setDailyGoal(data.dailyGoal);
                    if (Array.isArray(data.buttonAmounts)) setButtonAmounts(data.buttonAmounts);
                    if (typeof data.consumed === 'number') setConsumed(data.consumed);
                }
            } catch (error) {
                console.error("Error loading user settings from Firestore:", error);
            } finally {
                initialLoad.current = false;
            }
        };
        fetchSettings();
    }, [uid]);

    // Save consumed to Firestore whenever it changes, but not on initial load
    useEffect(() => {
        if (initialLoad.current) return;
        const saveConsumed = async () => {
            if (!uid) return;
            try {
                await setDoc(doc(db, 'userSettings', uid), { consumed }, { merge: true });
            } catch (error) {
                console.error('Error saving consumed to Firestore:', error);
            }
        };
        saveConsumed();
    }, [consumed, uid]);

    const updateSettings = async (newDailyGoal, newButtonAmounts) => {
        setDailyGoal(newDailyGoal);
        setButtonAmounts(newButtonAmounts);
        if (uid) {
            try {
                await setDoc(doc(db, "userSettings", uid), {
                    dailyGoal: newDailyGoal,
                    buttonAmounts: newButtonAmounts,
                }, { merge: true });
            } catch (error) {
                console.error("Error saving user settings to Firestore:", error);
            }
        }
    };

    return (
        <UserSettingsContext.Provider value={{ dailyGoal, buttonAmounts, consumed, setConsumed, updateSettings }}>
            {children}
        </UserSettingsContext.Provider>
    );
};

export const useUserSettings = () => useContext(UserSettingsContext);
