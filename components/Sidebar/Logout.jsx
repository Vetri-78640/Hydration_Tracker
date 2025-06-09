"use client"
import React from "react";
import Button from "@/components/Button";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config.js";

const Logout = () => {
    const router = useRouter();
    const handleLogout = async () => {
        await signOut(auth);
        router.push("/");
    };
    return (
        <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col border-t px-2 border-blue-300/50 justify-end text-xs">
            <div className="flex items-center justify-center mt-4">
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default Logout;