"use client";
import React, { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config.js";
import Button from "@/components/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [
        createUserWithEmailAndPassword,
        userCredential,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = async () => {
        const result = await createUserWithEmailAndPassword(email, password);
        if (result?.user) {
            await updateProfile(result.user, { displayName: name });
            await result.user.reload();
        }
    };

    useEffect(() => {
        if (userCredential) {
            // reset form
            setName("");
            setEmail("");
            setPassword("");

            // success toast
            toast.success("Account created! You can now log in.");
        }
    }, [userCredential]);

    useEffect(() => {
        if (error) {
            if (error.code === "auth/email-already-in-use") {
                toast.error("Email already in use");
            } else {
                toast.error("Signup failed, try again");
            }
            console.error("Signup error:", error.code, error.message);
        }
    }, [error]);

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#050521] px-3">
            <div
                className="bg-blue-950/20 p-8 rounded-2xl shadow-lg w-full max-w-md"
                style={{ boxShadow: "0 0 10px #64b5f6, 0 0 20px #64b5f6, 0 0 40px #64b5f6" }}
            >
                <h2 className="text-3xl font-medium text-center text-white mb-6">Sign Up</h2>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button onClick={handleSignUp} disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>
                </form>

                <p className="text-sm text-center text-white/60 mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-300 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Signup;
