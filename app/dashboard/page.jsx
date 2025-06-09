import React from 'react'
import {Sidebar} from "@/components/Sidebar/Sidebar";
import Dashboard from "@/components/Dashboard/Dashboard";

const Page = () => {
    return (
        <main className="grid gap-4 p-4 grid-cols-[220px_1fr]">
            <Sidebar />
            <Dashboard />
        </main>

    )
}
export default Page
