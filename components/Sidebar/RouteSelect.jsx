"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";
import {
    FiHome,
    FiSettings,
} from "react-icons/fi";

const routes = [
    { title: "Dashboard", href: "/dashboard", icon: FiHome },
    { title: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

const RouteSelect = () => {
    const pathname = usePathname();
    const { theme } = useTheme();
    // just gets the current path

    return (
        <div>
            {routes.map(({ title, href, icon: Icon }) => {
                const isSelected = pathname === href;
                // this checks if the current path matches selected path - for UI
                const selectedBg = theme === 'dark' ? "bg-blue-200 text-black" : "bg-blue-100 text-black";
                const unselectedBg = theme === 'dark' ? "hover:bg-blue-200/50 bg-transparent text-white/75" : "hover:bg-blue-50 bg-transparent text-gray-600";
                
                return (
                    <Link key={title} href={href}>
                        <button
                            className={`flex items-center justify-start gap-2 w-full rounded-xl px-2 py-1.5 text-sm transition-all ${
                                isSelected
                                    ? `${selectedBg} shadow`
                                    : `${unselectedBg} shadow-none`
                            }`}
                        >
                            <Icon className={isSelected ? (theme === 'dark' ? "text-blue-600" : "text-blue-700") : ""} />
                            <span>{title}</span>
                        </button>
                    </Link>
                );
            })}
        </div>
    );
};

export default RouteSelect;