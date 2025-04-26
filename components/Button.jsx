import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from 'tailwind-merge';
const buttonClasses = cva(
    "inline-flex items-center justify-center border h-12 rounded-full px-6 font-medium",
    {
        variants: {
            variant: {
                primary: "bg-blue-300 text-neutral-950 border-blue-300/60",
                secondary: "border-blue-300 text-white bg-transparent",
            },
        },
        defaultVariants: {
            variant: "primary", //fallback variant
        },
    }
);

// Button component
const Button = ({ children, className, variant }) => {
    return (
        <button className={twMerge(buttonClasses({ variant }), "cursor-pointer", className)}>
            {children}
        </button>
    );
};

export default Button;