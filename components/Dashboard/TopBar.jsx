import React from "react";
import { useUser } from "@/app/context/UserContext";
import { useTheme } from "@/app/context/ThemeContext";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "@/app/context/SidebarContext";
import { useUserSettings } from "@/app/context/UserSettings";

export const TopBar = () => {
    const { name } = useUser();
    const { theme, toggleTheme } = useTheme();
    const { openSidebar } = useSidebar();
    const { consumed, dailyGoal } = useUserSettings();

    const formatDate = () => {
        const now = new Date();
        const weekday = now.toLocaleString("en-US", { weekday: "long" });
        const day = now.getDate();
        const month = now.toLocaleString("en-US", { month: "short" });
        const year = now.getFullYear();
        return `${weekday}, ${day} ${month} ${year}`;
    };

    // Hydration status logic
    const progress = dailyGoal > 0 ? (consumed / dailyGoal) * 100 : 0;
    // default values for < 30
    let status = "You're Dehydrated !";
    let statusColor = "text-red-400";
    if (progress > 90) {
        status = "You're well Hydrated !";
        statusColor = "text-green-400";
    } else if (progress > 60) {
        status = "You're on Track !";
        statusColor = "text-blue-400";
    } else if (progress > 30) {
        status = "You need more Water !";
        statusColor = "text-yellow-400";
    }

    return (
            <div className="border-b pb-4" style={{ borderColor: 'var(--border-color)', marginLeft: '2px', marginTop:'4px'}}>
                <div className="flex items-center gap-3">
                    <button
                        onClick={openSidebar}
                        className="lg:hidden py-2"
                        aria-label="Open sidebar"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        <FiMenu className="size-7" />
                    </button>

                    <div className="flex flex-row items-center md:items-end gap-3 md:gap-x-4 lg:py-0.5 justify-between w-full">
                        <div className="flex flex-col md:flex-row flex-grow md:gap-4 md:items-end">
                            <span className="text-sm md:text-xl lg:text-2xl font-semibold block" style={{ color: 'var(--text-primary)' }}>
                              <span style={{ color: 'var(--text-accent)' }}>Good day</span> {name || "loading..."} !
                            </span>
                            <span className="text-xs md:text-sm lg:text-base block" style={{ color: 'var(--text-secondary)' }}>
                              {formatDate()}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className={`text-sm md:text-lg lg:text-xl font-semibold text-nowrap ${statusColor}`}>
                                {status}
                            </div>

                            {/* Theme toggle button */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-blue-300/20 transition-colors duration-300"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};