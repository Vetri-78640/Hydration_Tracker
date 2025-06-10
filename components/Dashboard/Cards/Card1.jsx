import React, { useState, useEffect, useRef } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { useUserSettings } from '@/app/context/UserSettings';
import { useUser } from '@/app/context/UserContext';
import { db } from '@/app/firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const Card1 = ({ className = "" }) => {
    const { dailyGoal, buttonAmounts } = useUserSettings();
    const { uid } = useUser();
    const [consumed, setConsumed] = useState(0);
    const [customAmount, setCustomAmount] = useState('');
    const initialLoad = useRef(true);

    // Load consumed from Firestore on mount/uid change
    useEffect(() => {
        const fetchConsumed = async () => {
            if (!uid) return;
            try {
                const docRef = doc(db, 'userSettings', uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (typeof data.consumed === 'number') setConsumed(data.consumed);
                }
            } catch (error) {
                console.error('Error loading consumed from Firestore:', error);
            } finally {
                initialLoad.current = false;
            }
        };
        fetchConsumed();
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

    const handleDrink = (amount) => {
        let newConsumed = consumed + amount;
        if (newConsumed > dailyGoal) newConsumed = dailyGoal;
        setConsumed(newConsumed);
    };
    const handleCustomDrink = () => {
        const amt = parseInt(customAmount, 10);
        if (!isNaN(amt) && amt > 0) {
            handleDrink(amt);
            setCustomAmount('');
        }
    };
    const handleReset = () => {
        setConsumed(0);
    };
    const progress = Math.min(100, (consumed / dailyGoal) * 100);

    return (
        <div className={className}>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {buttonAmounts.map((amt) => (
                    <button
                        key={amt}
                        onClick={() => handleDrink(amt)}
                        className="px-5 py-3 border rounded-xl border-blue-600/50 bg-blue-300 text-neutral-950 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    >
                        {amt}ml
                    </button>
                ))}
                <div className="flex gap-2 items-center">
                    <input
                        type="number"
                        min="1"
                        max={dailyGoal}
                        value={customAmount}
                        onChange={e => setCustomAmount(e.target.value)}
                        placeholder="Amount (ml)"
                        className="w-32 px-3 py-3 rounded-xl border border-blue-600/50 bg-blue-300 text-neutral-950 focus:outline-none focus:ring-1 focus:ring-blue-600 text-center"
                    />
                    <button
                        onClick={handleCustomDrink}
                        disabled={!customAmount}
                        className="px-4 py-3 border-2 rounded-xl border-blue-600/50 bg-blue-300 text-neutral-950 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Add
                    </button>
                    <button
                        onClick={handleReset}
                        className="flex items-center justify-center px-3 py-3 border border-red-400 rounded-xl bg-white/85 text-red-400 hover:bg-red-100 hover:scale-105 active:scale-95 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all duration-200 shadow-md hover:shadow-lg"
                        aria-label="Reset"
                    >
                        <FiRefreshCw className="size-6" />
                    </button>
                </div>
            </div>
            {/* Progress Bar */}
            <div className="max-w-xs w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner mb-2">
                <div
                    className="h-full transition-all duration-700 ease-out shadow-sm"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: `hsl(${progress * 1.2}, 90%, 50%)` // 0% = 0° (red), 50% = 60° (yellow), 100% = 120° (green)
                    }}
                ></div>
            </div>
            <div className="text-lg text-white/75">
                {consumed}ml / {dailyGoal}ml ({Math.round(progress)}%)
            </div>
        </div>
    );
};

export default Card1;
