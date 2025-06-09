import React from 'react'
import AccountToggle from "@/components/Sidebar/AccountToggle";
import RouteSelect from "@/components/Sidebar/RouteSelect";

export const Sidebar = () => {
    return (
        <div>
            <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px)] scrollbar-hidden">
                <AccountToggle />
                <RouteSelect />
            </div>
        </div>
    )
}
