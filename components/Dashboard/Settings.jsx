import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { useUserSettings } from "@/app/context/UserSettings";

const Settings = () => {
    const { dailyGoal, buttonAmounts, updateSettings } = useUserSettings();
    const [localDailyGoal, setLocalDailyGoal] = useState(dailyGoal);
    const [localButtonAmounts, setLocalButtonAmounts] = useState([...buttonAmounts]);

    useEffect(() => {
        setLocalDailyGoal(dailyGoal);
        setLocalButtonAmounts([...buttonAmounts]);
    }, [dailyGoal, buttonAmounts]);

    const handleButtonAmountChange = (index, value) => {
        const newAmounts = [...localButtonAmounts];
        newAmounts[index] = Number(value);
        setLocalButtonAmounts(newAmounts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSettings(localDailyGoal, localButtonAmounts);
    };

    return (
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3">
            <div className="col-span-4">
                <h1 className="text-2xl font-bold text-white mb-4">Settings</h1>
                <p className="font-semibold text-white/75 mb-6">Update your preferences.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-white font-semibold mb-2" htmlFor="daily-goal">
                            Daily Water Goal (ml)
                        </label>
                        <input
                            id="daily-goal"
                            type="number"
                            min="0"
                            className="w-full p-2 rounded bg-blue-300 text-neutral-950 border border-blue-600/50 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={localDailyGoal}
                            onChange={e => setLocalDailyGoal(Number(e.target.value))}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white font-semibold mb-2">
                            Quick Add Button Amounts (ml)
                        </label>
                        <div className="flex gap-2">
                            {localButtonAmounts.map((amount, idx) => (
                                <input
                                    key={idx}
                                    type="number"
                                    min="0"
                                    className="w-full p-2 rounded bg-blue-300 text-neutral-950 border border-blue-600/50 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={amount}
                                    onChange={e => handleButtonAmountChange(idx, e.target.value)}
                                />
                            ))}
                        </div>
                    </div>
                    <Button type="submit">Save</Button>
                </form>
            </div>
        </div>
    );
};

export default Settings;