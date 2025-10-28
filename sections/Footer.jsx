"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";

const footerLinks = [
    {href: '/about#about', label: 'About'},
    {href: '/about#contact', label: 'Contact'},
    {href: '/about#terms', label: 'Terms and Conditions'},
];

const Footer = () => {
    const { theme } = useTheme();
    
    return (
        <section className="pt-16 pb-4 px-12">
            <div className="w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <Image
                            src={theme === 'light' ? "/assets/images/icon Dark Theme.svg" : "/assets/images/icon.svg"}
                            alt="logo"
                            width={16}
                            height={16}
                            className="h-9 w-auto md:h-auto md:max-h-11"
                        />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map(link => (
                                <Link href={link.href}
                                      key={link.href}
                                      className="group relative font-semi text-white/90 text-lg tracking-wide transition-colors duration-300"
                                      style={{ color: 'var(--text-secondary)' }}
                                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent)'}
                                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                >
                                    {link.label}
                                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[var(--text-accent)] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;