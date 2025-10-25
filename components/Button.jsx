"use client"
import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

const buttonClasses = cva(
    "inline-flex items-center justify-center border h-12 rounded-full px-6 font-medium cursor-pointer",
    // Tis is a library that lets you define reusable, customizable component classes with variants
    {
        variants: {
            variant: {
                primary: "transition-all duration-100 ease-in-out hover:delay-50",

                secondary: "bg-transparent transition-all duration-100 ease-in-out hover:delay-50 hover:bg-blue-100/15",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

const getPrimaryButtonStyle = () => ({
    backgroundColor: '#8EC5FF',
    color: '#000000',
    borderColor: '#8EC5FF',
});

const getSecondaryButtonStyle = () => ({
    color: '#8EC5FF',
    borderColor: '#8EC5FF',
    border: '1px solid',
});

const Button = ({ children, className, variant, href, onClick }) => {
    const mergedClasses = twMerge(buttonClasses({ variant }), "cursor-pointer", className);
    // Tis a utility from the tailwind-merge library that safely merges multiple tailwind class strings

    const style = variant === 'secondary' ? getSecondaryButtonStyle() : getPrimaryButtonStyle();

    if (href) {
        return (
            <Link href={href} className={mergedClasses} style={style}>
                {children}
            </Link>
        );
    }

    return (
        <button className={mergedClasses} onClick={onClick} style={style}>
            {children}
        </button>

    );
};

export default Button;