// components/ScrollHandler.tsx
"use client";

import { useEffect, useState } from 'react';

export default function ScrollHandler() {
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                setIsScrollingUp(false);
                return;
            }

            setIsScrollingUp(currentScroll < lastScroll);
            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('header-stickey', isScrollingUp);
    }, [isScrollingUp]);

    return null;
}