'use client';

import React from 'react';
import { Search, User, ShoppingBag, Home } from 'lucide-react';

export default function Footer({ onSearchOpen }) {
    return (
        <footer className="relative w-full bg-gray-100">
            {/* 뉴스레터 섹션 */}
            <div className="h-screen flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">뉴스레터에 가입하세요</h2>
                <div className="flex justify-center space-x-4 md:space-x-5 lg:space-x-6 mb-8">
                    <a href="#" className="text-sm md:text-lg lg:text-xl text-gray-600 hover:text-black">
                        TIKTOK
                    </a>
                    <a href="#" className="text-sm md:text-lg lg:text-xl text-gray-600 hover:text-black">
                        INSTAGRAM
                    </a>
                    <a href="#" className="text-sm md:text-lg lg:text-xl text-gray-600 hover:text-black">
                        FACEBOOK
                    </a>
                    <a href="#" className="text-sm md:text-lg lg:text-xl text-gray-600 hover:text-black">
                        YOUTUBE
                    </a>
                </div>
                <p className="text-xs md:text-sm lg:text-lg text-gray-500">© 2024 KANGHANSOL. All rights reserved.</p>
            </div>

            {/* 고정 네비게이션 */}
            <div
                className="fixed bottom-0 left-0 w-full bg-black z-50"
                style={{
                    height: '64px',
                }}
            >
                <div className="flex items-center justify-between w-full h-full px-12">
                    <button
                        className="flex items-center justify-center w-6"
                        onClick={() => (window.location.href = '/')}
                    >
                        <Home className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                    </button>
                    <button className="flex items-center justify-center w-6" onClick={onSearchOpen}>
                        <Search className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                    </button>
                    <button className="flex items-center justify-center w-6" onClick={() => alert('메뉴 열기')}>
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
        </footer>
    );
}
