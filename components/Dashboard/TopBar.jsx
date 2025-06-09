import React from "react";
import { useUser } from "@/app/context/UserContext";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "@/app/context/SidebarContext";

export const TopBar = () => {
    const { name } = useUser();
    const { openSidebar } = useSidebar();

    const formatDate = () => {
        const now = new Date();
        const weekday = now.toLocaleString("en-US", { weekday: "long" });
        const day = now.getDate();
        const month = now.toLocaleString("en-US", { month: "long" });
        const year = now.getFullYear();
        return `${weekday}, ${day} ${month} ${year}`;
    };

    return (
        <div className="border-b mb-4 pb-4 px-4 border-blue-300/50">
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                    <button
                        onClick={openSidebar}
                        className="lg:hidden p-2"
                        aria-label="Open sidebar"
                    >
                        <FiMenu className="text-white size-7" />
                    </button>

                    <div>
            <span className="text-sm font-bold block">
              Good day {name || "loading..."}!
            </span>
                        <span className="text-xs block text-white/75">{formatDate()}</span>
                    </div>
                </div>

                <div>{/* Optional right side content here */}</div>
            </div>
        </div>
    );
};