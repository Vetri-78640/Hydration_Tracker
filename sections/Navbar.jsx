"use client"
import React, {useState} from 'react'
import Image from "next/image";
import Button from "@/components/Button";
import {twMerge} from "tailwind-merge";
import {AnimatePresence,motion} from "framer-motion"
import Link from "next/link";
const navLinks = [
    {label: 'Home', href: '#'},
    {label: 'Features', href: '#features'},
    {label: 'Get Started', href: '#getstarted'},
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <section className="py-4 lg:py-8 px-3 fixed w-full top-0 z-20 ">
            <div className="container max-w-5xl mx-auto">
                <div className="border border-blue-300/60 bg-[#050521]/70 backdrop-blur rounded-[27px] md:rounded-full">
                    <div className="grid grid-cols-2 lg:grid-cols-3   px-4 p-2 md:pr-2 items-center ">
                        <div>
                            <Image src="/assets/images/icon.svg" alt="logo" width={16} height={16} className="h-9 w-auto md:h-auto md:max-h-11" />
                        </div>
                        <div className="hidden lg:flex justify-center items-center">
                            <nav className="flex gap-6 font-medium text-xl">
                                {navLinks.map(link => (
                                    <Link href={link.href}
                                       key={link.label}
                                       className="text-white hover:text-blue-300 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="flex justify-end gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                onClick={() => setIsOpen(!isOpen)}
                                className="feather feather-menu md:hidden">

                                <line x1="3" y1="6" x2="21" y2="6"
                                      className={twMerge(("origin-left transition"),isOpen && "rotate-45 -translate-y-1")}
                                ></line>
                                <line x1="3" y1="12" x2="21" y2="12"
                                      className={twMerge(("transition"),isOpen && "opacity-0")}
                                ></line>
                                <line x1="3" y1="18" x2="21" y2="18"
                                      className={twMerge(("origin-left transition"),isOpen && "-rotate-45 translate-y-1")}
                                ></line>
                            </svg>
                            <Button variant="secondary" className="hidden md:inline-flex" href="/login">
                                Log In
                            </Button>
                            <Button variant="primary" className="hidden md:inline-flex" href="/sign-up">
                                Sign Up
                            </Button>
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
                                    {navLinks.map(link => (
                                        <Link
                                            href={link.href}s
                                            key={link.label}
                                            className="text-white hover:text-blue-300 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <Button variant="secondary" href="/login">Log In</Button>
                                    <Button variant="primary" href="/sign-up">Sign Up</Button>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    )
}
export default Navbar
