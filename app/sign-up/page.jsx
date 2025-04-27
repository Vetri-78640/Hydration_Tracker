"use client";

import Button from "@/components/Button";
import Link from "next/link";

const Signup = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#050521] px-3">
            <div
                className="bg-blue-950/20 p-8 rounded-2xl shadow-lg w-full max-w-md"
                style={{ boxShadow: "0 0 10px #64b5f6, 0 0 20px #64b5f6, 0 0 40px #64b5f6" }}
            >
                <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>

                <form className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button>Sign Up</Button>
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