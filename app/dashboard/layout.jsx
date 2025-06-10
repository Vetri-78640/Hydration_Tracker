"use client";
import React, { useEffect } from "react";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";
import { SidebarProvider, useSidebar } from "@/app/context/SidebarContext";
import { UserSettingsProvider } from "@/app/context/UserSettings";

const Content = ({ children }) => {
    const { sidebarOpen } = useSidebar();

    return (
        <main>
            {/* Mobile sidebar */}
            <div
                className={`block lg:hidden fixed top-0 left-0 h-full w-[220px] z-30 p-4 bg-[#050521] pt-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
                style={{ transitionProperty: "transform, opacity" }}
            >
                <Sidebar />
            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:block fixed top-0 left-0 h-full w-[220px] z-20 p-4">
                <Sidebar />
            </div>

            {/* Main content area */}
            <div className="lg:pl-[220px] p-3">
                <Dashboard>{children}</Dashboard>
            </div>
        </main>
    );
};

const Layout = ({ children }) => {
    const { email } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (email === null) router.replace("/login");
    }, [email, router]);

    if (email === null) return null;

    return (
        <SidebarProvider>
            <UserSettingsProvider>
                <Content>{children}</Content>
            </UserSettingsProvider>
        </SidebarProvider>
    );
};

export default Layout;