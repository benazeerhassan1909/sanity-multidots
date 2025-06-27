import React from 'react';
import Link from 'next/link';
import '@/app/css/Button.css';

type ButtonProps = {
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
    return (
        <Link href={href}>
            {children}
        </Link>
    );
}