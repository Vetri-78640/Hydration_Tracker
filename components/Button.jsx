"use client"
import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const buttonClasses = cva(
    "inline-flex items-center justify-center border h-12 rounded-full px-6 font-medium cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-blue-300 text-neutral-950 border-blue-300/60",
                secondary: "border-blue-300 text-white bg-transparent",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

const Button = ({ children, className, variant, href, onClick }) => {
    const mergedClasses = twMerge(buttonClasses({ variant }), "cursor-pointer", className);

    if (href) {
        return (
            <Link href={href} className={mergedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button className={mergedClasses} onClick={onClick}>
            {children}
        </button>

    );
};

export default Button;