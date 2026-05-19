import React from 'react'

function Button({ children, variant = "primary", size = "md", className = "", ...props }) {

    const base = "rounded-md border-0 cursor-pointer tracking-widest uppercase transition-all duration-500 ease-in-out shadow-sm";

    const variants = {

        primary: "bg-[hsl(160,80%,48%)] hover:bg-[hsl(160,80%,38%)] hover:text-[hsl(0,0%,100%)] hover:shadow-[0_7px_19px_0_rgb(9,172,115)]",
        secondary: "bg-[#e74c3c] hover:text-[hsl(0,0%,100%)] hhover:shadow-[0_7px_19px_0_rgb(167,54,13)]",
        danger: "bg-red-500 text-white hover:bg-red-700",
    };

    const sizes = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-12 ml-5 text-base",
        lg: "py-4 px-16 text-lg",
    }

    return (
        <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
