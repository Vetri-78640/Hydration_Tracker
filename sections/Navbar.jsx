import React from 'react'
import Image from "next/image";
import Button from "@/components/Button";
const navLinks = [
    {label: 'Home', href: '#'},
    {label: 'Features', href: '#features'},
    {label: 'Get Started', href: '#getstarted'},
]

const Navbar = () => {
    return (
        <section className="py-4 lg:py-8">
            <div className="container max-w-5xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white rounded-full px-4 p-2 md:pr-2 items-center">
                    <div>
                        <Image src="/assets/images/water-bottle.svg" alt="logo" width={16} height={16} className="h-9 w-auto md:h-auto md:max-h-11" />
                    </div>
                    <div className="hidden lg:flex justify-center items-center">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map(link => (
                                <a href={link.href} key={link.label}>{link.label}</a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"

                             className="feather feather-menu md:hidden">

                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <Button variant="secondary" className="hidden md:inline-flex">
                            Log In
                        </Button>
                        <Button variant="primary" className="hidden md:inline-flex">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Navbar
