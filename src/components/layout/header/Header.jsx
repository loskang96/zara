'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Search, User, ShoppingBag, Home } from 'lucide-react';
import Image from 'next/image';
import Menu from '@/app/about/components/menu';
import SearchHeader from '@/app/about/components/search';

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
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const isBackgroundDark = useBackgroundBrightness();

    const handleSearchOpen = () => {
        if (!searchOpen) {
            setSearchOpen(true);
            window.history.pushState({ searchOpen: true }, 'search');
        }
    };

    const handleSearchClose = () => {
        if (searchOpen) {
            setSearchOpen(false);
            window.history.back();
        }
    };

    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state?.searchOpen) {
                setSearchOpen(true);
            } else {
                setSearchOpen(false);
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    return (
        <div className="relative">
            <header className="fixed top-0 left-0 w-full h-full z-50">
                {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
                {searchOpen && <SearchHeader onClose={handleSearchClose} />}
                {/* Top Logo Section */}
                <div className="absolute top-0 left-0 w-[60%] md:w-[50%] lg:w-[40%] h-auto">
                    <Image
                        src="/images/pattern/main/zaralogowhite.svg"
                        alt="ZARA"
                        layout="responsive"
                        width={800}
                        height={400}
                        objectFit="contain"
                        className={`${isBackgroundDark ? 'invert' : ''}`}
                    />
                </div>
            </header>

            {/* Fixed Bottom Navigation */}
            <div
                className="fixed bottom-0 left-0 w-full bg-black z-50"
                style={{
                    height: '64px', // 네비게이션 높이를 고정
                    display: 'flex',
                    alignItems: 'center', // 중앙 정렬
                    boxSizing: 'border-box', // 패딩 충돌 방지
                }}
            >
                <div className="flex items-center justify-between w-full px-12">
                    <button
                        className="flex items-center justify-center w-6"
                        onClick={() => (window.location.href = '/')}
                    >
                        <Home className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                    </button>
                    <button className="flex items-center justify-center w-6" onClick={handleSearchOpen}>
                        <Search className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                    </button>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center justify-center">
                        <span className="text-white text-sm font-light tracking-wide">메뉴</span>
                    </button>
                    <button className="flex items-center justify-center w-6">
                        <ShoppingBag className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                    </button>
                    <button
                        onClick={() => (window.location.href = '/login')}
                        className="flex items-center justify-center w-6"
                    >
                        <User className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
