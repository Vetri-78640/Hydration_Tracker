"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiHome,
    FiBarChart2,
    FiUsers,
    FiBookOpen,
    FiSettings,
} from "react-icons/fi";

// Define your routes in one place
const routes = [
    { title: "Dashboard", href: "/dashboard", icon: FiHome },
    { title: "Track", href: "/dashboard/track", icon: FiUsers },
    { title: "Progress", href: "/dashboard/progress", icon: FiBarChart2 },
    { title: "Facts", href: "/dashboard/facts", icon: FiBookOpen },
    { title: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

const RouteSelect = () => {
    const pathname = usePathname();

    return (
        <div className="space-y-1">
            {routes.map(({ title, href, icon: Icon }) => {
                const isSelected = pathname === href;
                return (
                    <Link key={title} href={href}>
                        <button
                            className={`flex items-center justify-start gap-2 w-full rounded-xl px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
                                isSelected
                                    ? "bg-blue-200 text-black shadow"
                                    : "hover:bg-blue-200/50 bg-transparent text-white/75 shadow-none"
                            }`}
                        >
                            <Icon className={isSelected ? "text-blue-600" : ""} />
                            <span>{title}</span>
                        </button>
                    </Link>
                );
            })}
        </div>
    );
};

export default RouteSelect;