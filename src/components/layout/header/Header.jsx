'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { MenuIcon, Search, User, ShoppingBag, Home } from 'lucide-react';
import Image from 'next/image';
import Menu from '@/app/about/components/menu';

const useBackgroundBrightness = () => {
    const [isBackgroundDark, setIsBackgroundDark] = useState(false);

    const checkBackgroundBrightness = useCallback(() => {
        const headerElement = document.querySelector('header');
        if (!headerElement) return;

        const computedStyle = window.getComputedStyle(headerElement);
        const parentElement = headerElement.parentElement;
        if (!parentElement) return;

        const parentStyle = window.getComputedStyle(parentElement);

        const headerBg = computedStyle.backgroundColor;
        const parentBg = parentStyle.backgroundColor;

        const getRGBValues = (color) => {
            const matches = color.match(/\d+/g);
            return matches ? matches.map(Number) : [255, 255, 255];
        };

        const calculateBrightness = (r, g, b) => {
            return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        };

        const [hr, hg, hb] = getRGBValues(headerBg);
        const [pr, pg, pb] = getRGBValues(parentBg);

        const headerBrightness = calculateBrightness(hr, hg, hb);
        const parentBrightness = calculateBrightness(pr, pg, pb);

        const brightness = Math.min(headerBrightness, parentBrightness);
        setIsBackgroundDark(brightness < 0.5);
    }, []);

    useEffect(() => {
        checkBackgroundBrightness();

        const observer = new MutationObserver(checkBackgroundBrightness);
        const headerElement = document.querySelector('header');

        if (headerElement && headerElement.parentElement) {
            observer.observe(headerElement.parentElement, {
                attributes: true,
                attributeFilter: ['style', 'class'],
                subtree: true,
            });
        }

        window.addEventListener('scroll', checkBackgroundBrightness);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', checkBackgroundBrightness);
        };
    }, [checkBackgroundBrightness]);

    return isBackgroundDark;
};

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const isBackgroundDark = useBackgroundBrightness();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const textColor = isBackgroundDark ? 'text-white' : 'text-black';
    const iconColor = isBackgroundDark ? 'text-white' : 'text-black';
    const borderColor = isBackgroundDark ? 'border-white' : 'border-black';
    const placeholderColor = isBackgroundDark ? 'placeholder-white/70' : 'placeholder-black/70';

    return (
        <header className="fixed top-0 left-0 w-full h-full z-50">
            {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
            {isMobile ? (
                // Mobile & Tablet Header
                <div className="w-full h-full flex flex-col justify-between">
                    {/* Top Logo Section */}
                    <div className="w-full pt-8 px-4">
                        <Image
                            src="/images/pattern/main/zaralogowhite.svg"
                            alt="ZARA"
                            width={400}
                            height={100}
                            className={`w-full ${isBackgroundDark ? 'invert' : ''}`}
                        />
                    </div>

                    {/* Bottom Navigation Bar */}
                    <div className="w-full mt-auto">
                        <div className="flex items-center justify-between px-12 py-6 bg-black">
                            <button className="flex items-center justify-center w-6">
                                <Home className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                            </button>
                            <button className="flex items-center justify-center w-6">
                                <Search className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                            </button>
                            <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center justify-center">
                                <span className="text-white text-sm font-light tracking-wide">메뉴</span>
                            </button>
                            <button className="flex items-center justify-center w-6">
                                <ShoppingBag className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                            </button>
                            <button className="flex items-center justify-center w-6">
                                <User className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                // Desktop Header
                <div className="w-full">
                    <div className="relative">
                        <div className="relative z-10">
                            {/* Top Bar */}
                            <div className={`flex justify-end p-4 ${textColor} space-x-4`}>
                                <button className="text-sm hover:opacity-70">로그인</button>
                                <button className="text-sm hover:opacity-70">도움말</button>
                                <button className="text-sm hover:opacity-70">바스켓백 (0)</button>
                            </div>

                            {/* Search Bar */}
                            <div className="flex justify-end px-4">
                                <div className="w-[300px]">
                                    <input
                                        type="text"
                                        placeholder="검색"
                                        className={`w-full bg-transparent border-b ${borderColor} px-4 py-2 focus:outline-none ${textColor} ${placeholderColor}`}
                                    />
                                </div>
                            </div>

                            {/* Logo and Menu Button */}
                            <div className="px-8 py-4">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setMenuOpen(!menuOpen)}
                                        className={`${iconColor} hover:opacity-70 mr-6`}
                                    >
                                        <MenuIcon className="w-6 h-6" />
                                    </button>
                                    <Image
                                        src="/images/pattern/main/zaralogowhite.svg"
                                        alt="ZARA"
                                        width={400}
                                        height={100}
                                        className={`${isBackgroundDark ? 'invert' : ''}`}
                                    />
                                </div>
                            </div>

                            {/* Bottom Navigation */}
                            <nav className={`flex gap-8 px-8 py-4 ${textColor}`}>
                                <a href="#" className="hover:opacity-70">
                                    여성
                                </a>
                                <a href="#" className="hover:opacity-70">
                                    남성
                                </a>
                                <a href="#" className="hover:opacity-70">
                                    아동
                                </a>
                                <a href="#" className="hover:opacity-70">
                                    HOME
                                </a>
                                <a href="#" className="hover:opacity-70">
                                    BEAUTY
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
