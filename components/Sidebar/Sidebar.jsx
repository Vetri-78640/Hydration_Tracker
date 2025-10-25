import React from 'react'
import { useTheme } from "@/app/context/ThemeContext";
import AccountToggle from "@/components/Sidebar/AccountToggle";
import RouteSelect from "@/components/Sidebar/RouteSelect";
import Logout from "@/components/Sidebar/Logout";

export const Sidebar = () => {
    const { theme } = useTheme();
    
    return (
        <div className={`${theme === 'dark' ? 'bg-blue-200/10' : ''} rounded-xl p-2`}>
            <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-14px)] scrollbar-hidden">
                <AccountToggle />
                <RouteSelect />
                <Logout />
            </div>
        </div>
    )
}
