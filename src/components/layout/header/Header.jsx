'use client';

import React, { useState, useEffect } from 'react';
import { Img } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Menu = dynamic(() => import('@/app/about/components/menu'), {
    ssr: false,
});

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    const handleLogoClick = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/';
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Tablet/Mobile Header */}
            {isTablet ? (
                <div className="w-full px-4 py-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <button className="text-xl" onClick={toggleMenu}>
                                =
                            </button>
                            <div onClick={handleLogoClick} className="cursor-pointer">
                                <Img src="/images/pattern/main/zaralogoblack.svg" alt="ZARA" className="h-12 md:h-14" />
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="hover:opacity-70">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                            <button className="hover:opacity-70">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            </button>
                            <button className="hover:opacity-70">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                /* Desktop Header */
                <div className="max-w-[1920px] mx-auto px-8 py-4">
                    <div className="grid grid-cols-3 items-center">
                        {/* Left section */}
                        <div className="flex items-center gap-6">
                            <button className="text-xl" onClick={toggleMenu}>
                                =
                            </button>
                            <button onClick={handleLogoClick} className="cursor-pointer">
                                <Img src="/images/pattern/main/zaralogoblack.svg" alt="ZARA" className="h-16" />
                            </button>
                        </div>

                        {/* Center section */}
                        <nav className="flex justify-center space-x-8">
                            <a href="#" className="text-sm hover:opacity-70">
                                여성
                            </a>
                            <a href="#" className="text-sm hover:opacity-70">
                                남성
                            </a>
                            <a href="#" className="text-sm hover:opacity-70">
                                아동
                            </a>
                            <a href="#" className="text-sm hover:opacity-70">
                                HOME
                            </a>
                            <a href="#" className="text-sm hover:opacity-70">
                                BEAUTY
                            </a>
                        </nav>

                        {/* Right section */}
                        <div className="flex justify-end items-center space-x-6">
                            <button className="hover:opacity-70">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                            <button className="hover:opacity-70">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            </button>
                            <button className="hover:opacity-70">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Menu Component */}
            {menuOpen && <Menu onClose={toggleMenu} />}
        </header>
    );
}
