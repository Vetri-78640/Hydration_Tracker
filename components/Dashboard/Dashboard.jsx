import React from "react";
import { TopBar } from "@/components/Dashboard/TopBar";

const Dashboard = ({ children }) => {
    return (
        <div className="rounded-xl shadow h-full flex flex-col" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="p-4">
                <TopBar />
            </div>
            <div className="px-4 pb-4 flex-1 overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default Dashboard;