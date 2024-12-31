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
    const [searchOpen, setSearchOpen] = useState(false); // 검색 상태 추가
    const isBackgroundDark = useBackgroundBrightness();

    const handleSearchOpen = () => {
        setSearchOpen(true);
        window.history.pushState({ searchOpen: true }, 'search');
    };

    const handleSearchClose = () => {
        setSearchOpen(false);
        window.history.back(); // 뒤로가기로 상태 복원
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

    const textColor = isBackgroundDark ? 'text-white' : 'text-black';

    return (
        <header className="fixed top-0 left-0 w-full h-full z-50">
            {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
            {searchOpen && <SearchHeader onClose={handleSearchClose} />} {/* SearchHeader 추가 */}
            <div className="w-full h-full flex flex-col justify-between">
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

                {/* Bottom Navigation Bar */}
                <div className="w-full mt-auto">
                    <div className="flex items-center justify-between px-12 py-6 bg-black">
                        <button
                            className="flex items-center justify-center w-6"
                            onClick={() => (window.location.href = '/')}
                        >
                            <Home className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                        </button>
                        <button
                            className="flex items-center justify-center w-6"
                            onClick={handleSearchOpen} // 검색 버튼 클릭 이벤트 추가
                        >
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
        </header>
    );
};

export default Header;
