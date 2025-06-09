"use client"
import React from 'react'
import { useUser } from "@/app/context/UserContext"
const AccountToggle = () => {
    const { name,email } = useUser()
    return (
        <div className="border-b mb-4 mt-2 pb-4 border-blue-300/50">
            <button className="flex p-0.5 hover:bg-blue-200/50 rounded transition-colors relative gap-2 w-full items-center">
                <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Eden"
                    alt="avatar"
                    className="size-8 rounded shrink-0 bg-blue-950 shadow"
                    />
                <div className="text-start">
                    <span className="text-sm font-bold block">
                        {name || "loading..."}
                    </span>
                    <span className="text-xs block text-white/75">
                        {email}
                    </span>
                </div>
            </button>

        </div>
    )
}
export default AccountToggle
