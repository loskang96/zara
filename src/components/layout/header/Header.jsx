'use client';

import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Home } from 'lucide-react';
import Image from 'next/image';
import Menu from '@/app/about/components/menu';
import SearchHeader from '@/app/about/components/search';
import ShoppingCart from '@/app/about/components/shoppingbag';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleSearchOpen = () => {
        if (!searchOpen) {
            setSearchOpen(true);
            window.history.pushState({ searchOpen: true }, 'search');
        }
    };

    const handlePopState = (event) => {
        if (event.state?.searchOpen) {
            setSearchOpen(true);
        } else if (event.state?.cartOpen) {
            setIsCartOpen(true);
        } else {
            setSearchOpen(false);
            setIsCartOpen(false);
        }
    };

    useEffect(() => {
        if (!window.history.state) {
            window.history.replaceState({ main: true }, '');
        }

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    return (
        <div className="relative">
            {/* Header Section */}
            <header className="fixed top-0 left-0 w-full h-full z-50">
                {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
                {searchOpen && <SearchHeader onClose={() => setSearchOpen(false)} />}
                <div className="absolute top-0 left-0 w-[60%] md:w-[50%] lg:w-[40%] h-auto">
                    <Image
                        src="/images/pattern/main/zaralogowhite.svg"
                        alt="ZARA"
                        layout="responsive"
                        width={800}
                        height={400}
                        objectFit="contain"
                    />
                </div>
            </header>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full bg-black z-50 h-16 flex items-center justify-between px-12">
                <button onClick={() => (window.location.href = '/')} className="w-6">
                    <Home className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                </button>
                <button onClick={handleSearchOpen} className="w-6">
                    <Search className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                </button>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-sm">
                    메뉴
                </button>
                <button
                    onClick={() => {
                        setIsCartOpen(true);
                        window.history.pushState({ cartOpen: true }, 'cart');
                    }}
                    className="w-6"
                >
                    <ShoppingBag className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                </button>
                <button onClick={() => (window.location.href = '/login')} className="w-6">
                    <User className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                </button>
            </div>

            {/* Shopping Cart */}
            {isCartOpen && (
                <ShoppingCart
                    onClose={() => {
                        setIsCartOpen(false);
                        window.history.back();
                    }}
                />
            )}
        </div>
    );
};

export default Header;
