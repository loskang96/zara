'use client';
import React from 'react';
import { MapPin, Barcode } from 'lucide-react';
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
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            {/* Top Bar */}
            <div
                className="fixed top-0 left-0 w-full z-50 flex justify-end py-2"
                style={{
                    backgroundColor: 'transparent', // 배경 투명 설정
                    border: 'none', // 경계선 제거
                }}
            >
                <div className="flex items-center gap-4 pr-4">
                    <MapPin size={20} />
                    <Barcode size={20} />
                    <Img src="/images/sample-icon.jpg" alt="Sample Icon" className="w-5 h-5" />
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-16 pb-16">
                {/* Search Question */}
                <div className="py-6">
                    <h1 className="text-xl font-normal">무엇을 찾으시나요?</h1>
                </div>

                {/* Categories */}
                <div className="overflow-x-auto">
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

                {/* Recommended Items */}
                <div className="py-3">
                    <h2 className="text-sm text-gray-600">추천 아이템</h2>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-0">
                    {[...Array(12).keys()].map((_, index) => (
                        <div key={index} className="border">
                            <div className="aspect-square relative">
                                <Img
                                    src={`/images/products/product-${index + 1}.jpg`}
                                    alt={`Product ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-sm text-center">Product {index + 1}</h3>
                            <p className="text-sm text-center">₩{(index + 1) * 10000}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchHeader;
