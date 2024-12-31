'use client';
import React from 'react';
import { Search, MapPin, Barcode, Image } from 'lucide-react';
import { Img } from '@chakra-ui/react';

const SearchHeader = ({ onClose }) => {
    const categories = [
        '버킷',
        '패딩',
        '데님',
        '바라클라바',
        '스키',
        '하이웨이스트',
        '린넨',
        '베스트',
        '무스탕',
        'SKI',
    ];

    return (
        <div className="fixed inset-0 bg-white z-50">
            {/* Top Bar */}
            <div className="px-4 py-2 flex items-center justify-between border-b">
                <span className="text-sm">5:12</span>
                <div className="flex items-center gap-6">
                    <MapPin size={20} />
                    <Barcode size={20} />
                    <image size={20} />
                </div>
            </div>

            {/* Search Question */}
            <div className="px-4 py-6">
                <h1 className="text-xl font-normal">무엇을 찾으시나요?</h1>
            </div>

            {/* Categories */}
            <div className="px-4 overflow-x-auto">
                <div className="flex gap-2 pb-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="px-3 py-1.5 border border-gray-200 rounded-md text-sm whitespace-nowrap hover:border-gray-400 transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Recommended Items Text */}
            <div className="px-4 py-3 border-t">
                <h2 className="text-sm text-gray-600">추천 아이템</h2>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2">
                <div className="p-4 border-r border-b relative">
                    <div className="aspect-square mb-4 relative">
                        <Img
                            src="/images/products/black-flap.jpg"
                            alt="락 플랩 숄더백"
                            className="w-full h-full object-cover"
                        />
                        <button className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center">
                            <span className="text-2xl">+</span>
                        </button>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-sm">락 플랩 숄더백</h3>
                        <p className="text-sm">₩ 59,900</p>
                    </div>
                    <button className="absolute top-4 right-4">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </button>
                </div>
                <div className="p-4 border-b relative">
                    <div className="aspect-square mb-4">
                        <Img
                            src="/images/products/bucket-bag.jpg"
                            alt="버킷백"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-sm">버킷백</h3>
                        <p className="text-sm">₩ 59,900</p>
                    </div>
                    <button className="absolute top-4 right-4">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Keyboard Button */}
            <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-8 pt-4 bg-gradient-to-t from-white to-transparent">
                <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                        <path d="M6 8h.01"></path>
                        <path d="M10 8h.01"></path>
                        <path d="M14 8h.01"></path>
                        <path d="M18 8h.01"></path>
                        <path d="M6 12h.01"></path>
                        <path d="M10 12h.01"></path>
                        <path d="M14 12h.01"></path>
                        <path d="M18 12h.01"></path>
                        <path d="M6 16h12"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchHeader;
