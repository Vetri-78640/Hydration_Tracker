import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/app/firebase/config";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useUser } from "@/app/context/UserContext";

const UserSettingsContext = createContext();

export const UserSettingsProvider = ({ children }) => {
    const { uid } = useUser();
    const [dailyGoal, setDailyGoal] = useState(2000);
    const [buttonAmounts, setButtonAmounts] = useState([100, 200, 500]);

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
                }
            } catch (error) {
                console.error("Error loading user settings from Firestore:", error);
            }
        };
        fetchSettings();
    }, [uid]);

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
        <UserSettingsContext.Provider value={{ dailyGoal, buttonAmounts, updateSettings }}>
            {children}
        </UserSettingsContext.Provider>
    );
};

export const useUserSettings = () => useContext(UserSettingsContext);
