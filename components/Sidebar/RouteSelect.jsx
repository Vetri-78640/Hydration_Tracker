"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiHome,
    FiSettings,
} from "react-icons/fi";

// Define your routes in one place
const routes = [
    { title: "Dashboard", href: "/dashboard", icon: FiHome },
    { title: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

const RouteSelect = () => {
    const pathname = usePathname();

    return (
        <div>
            {routes.map(({ title, href, icon: Icon }) => {
                const isSelected = pathname === href;
                return (
                    <Link key={title} href={href}>
                        <button
                            className={`flex items-center justify-start gap-2 w-full rounded-xl px-2 py-1.5 text-sm transition-all ${
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