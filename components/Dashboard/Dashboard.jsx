import React from "react";
import { TopBar } from "@/components/Dashboard/TopBar";

const Dashboard = ({ children }) => {
    return (
        <div className="rounded-xl shadow p-4 min-h-screen" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <TopBar />
            {children}
        </div>
    );
};

export default Dashboard;