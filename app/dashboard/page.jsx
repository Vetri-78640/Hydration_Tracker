"use client";
import React from "react";
import StatCards from "@/components/Dashboard/StatCards";

export default function DashboardHome() {
    return (
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 px-4">
            <StatCards />
        </div>
    );
}