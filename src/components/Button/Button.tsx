import React from 'react';
import Link from 'next/link';

type ButtonProps = {
    children: React.ReactNode;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
};

const baseClasses =
    'rounded-full bg-gray-c text-light-c px-4 py-2 font-semibold transition-colors hover:bg-gray-700 focus:outline-none';

export const Button: React.FC<ButtonProps> = ({
    children,
    to,
    onClick,
    type = 'button',
    className = '',
}) => {
    if (to) {
        return (
            <Link href={to} className={`${baseClasses} ${className}`}>
                {children}
            </Link>
        );
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${className}`}
        >
            {children}
        </button>
    );
};