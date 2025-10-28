"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useUser } from "@/app/context/UserContext";
import { useTheme } from "@/app/context/ThemeContext";
import { signOut } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/app/firebase/config.js";

const Navbar = ({ className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { email } = useUser();
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();

    const isLandingPage = pathname === '/';
    const navLinks = [
        {
            label: 'Home',
            href: isLandingPage ? '#' : '/'
        },
        {
            label: 'Features',
            href: isLandingPage ? '#features' : '/#features'
        },
        {
            label: 'Get Started',
            href: isLandingPage ? '#getstarted' : '/#getstarted'
        },
    ];

    const handleLogout = async () => {
        await signOut(auth);
        if (pathname === "/dashboard") {
            router.push("/");
        }
    };

    return (
        <>
            <section className={twMerge("py-4 lg:py-8 px-3 fixed w-full top-0 z-20 transition-opacity duration-500", className)}>
                <div className="container max-w-5xl mx-auto">
                    <div className="backdrop-blur rounded-[27px] md:rounded-full" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: '#8EC5FF', border: '1px solid #8EC5FF' }}>
                        <div className="grid grid-cols-2 lg:grid-cols-3 px-4 p-2 md:pr-2 items-center">
                            <div>
                                <Link href="/">
                                    <Image
                                        src={theme === 'light' ? "/assets/images/icon Dark Theme.svg" : "/assets/images/icon.svg"}
                                        alt="logo"
                                        width={16}
                                        height={16}
                                        className="h-9 w-auto md:h-auto md:max-h-11 cursor-pointer"
                                    />
                                </Link>
                            </div>

                            <div className="hidden lg:flex justify-center items-center">
                                <nav className="flex gap-6 font-medium text-xl">
                                    {navLinks.map((link) => (
                                        <Link
                                            href={link.href}
                                            key={link.label}
                                            className="transition-colors duration-300"
                                            style={{ color: 'var(--text-primary)' }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent)'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div className="flex justify-end gap-2 items-center">
                                {/* Theme toggle button */}
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full hover:bg-blue-300/20 transition-colors duration-300"
                                    aria-label="Toggle theme"
                                >
                                    {theme === 'dark' ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="5"></circle>
                                            <line x1="12" y1="1" x2="12" y2="3"></line>
                                            <line x1="12" y1="21" x2="12" y2="23"></line>
                                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                            <line x1="1" y1="12" x2="3" y2="12"></line>
                                            <line x1="21" y1="12" x2="23" y2="12"></line>
                                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                        </svg>
                                    )}
                                </button>

                                {/* Mobile menu icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="md:hidden"
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge("origin-left transition", isOpen && "rotate-45 -translate-y-1")}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge("transition", isOpen && "opacity-0")}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge("origin-left transition", isOpen && "-rotate-45 translate-y-1")}
                                    ></line>
                                </svg>

                                {email ? (
                                    <>
                                        <Button variant="secondary" className="hidden md:inline-flex" href="/dashboard">
                                            Dashboard
                                        </Button>
                                        <Button variant="primary" className="hidden md:inline-flex" onClick={handleLogout}>
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button variant="secondary" className="hidden md:inline-flex" href="/login">
                                            Log In
                                        </Button>
                                        <Button variant="primary" className="hidden md:inline-flex" href="/sign-up">
                                            Sign Up
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <Link
                                                href={link.href}
                                                key={link.label}
                                                className="transition-colors duration-300 hover:text-blue-300"
                                                style={{ color: 'var(--text-primary)' }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent)'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                        {email ? (
                                            <>
                                                <Button variant="secondary" href="/dashboard">
                                                    Dashboard
                                                </Button>
                                                <Button variant="primary" onClick={handleLogout}>
                                                    Logout
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button variant="secondary" href="/login">
                                                    Log In
                                                </Button>
                                                <Button variant="primary" href="/sign-up">
                                                    Sign Up
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Prevent layout shift when navbar hides */}
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
};

export default Navbar;