"use client"
import React from 'react'
import { useUser } from "@/app/context/UserContext"
export const TopBar = () => {
    const {name,email} = useUser();
    return (
        <div className="border-b mb-4 mt-2 pb-4 px-4 border-blue-300/50">
            <div className="flex items-center justify-between p-0.5">
                <div>
                    <span className="text-sm font-bold block">
                        Good day {name} !
                    </span>
                    <span className="text-xs block text-white/75">
                        Monday, Aug 8th 2025
                    </span>
                </div>
            </div>
        </div>
    )
}
