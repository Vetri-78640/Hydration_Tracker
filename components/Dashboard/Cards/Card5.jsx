"use client";
import React from "react";
import { useUserSettings } from "@/app/context/UserSettings";

const Card5 = ({ className }) => {
    const { dailyGoal } = useUserSettings();

    const intervalCount = 8; // to get an interval of 3 hours as 24/8 = 3
    const perInterval = Math.ceil(dailyGoal / intervalCount);
    const hours = 24 / intervalCount;

    return (
        <main className={className}>
            <h2 className="text-lg font-semibold" style={{ color: 'var(--text-accent)' }}>Suggestion</h2>
            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                To meet your goal of <span className="font-semibold">{dailyGoal}ml</span>, try drinking about{" "}
                <span className="font-semibold">{perInterval}ml</span> every{" "}
                <span className="font-semibold">{hours.toFixed(1)} hours</span>.
            </p>
        </main>
    );
};

export default Card5;