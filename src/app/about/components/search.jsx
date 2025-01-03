'use client';
import React, { useEffect, useRef } from 'react';
import { Img } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaBarcode, FaRegImage } from 'react-icons/fa'; // Font Awesome icons
import gsap from 'gsap';

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

    const productData = [
        {
            image: '/images/pattern/main/sqrbrclt.jpg',
            name: 'SQR BRCLT 14',
            price: 49000,
        },
        {
            image: '/images/pattern/main/bspipingnitsweter.jpg',
            name: '콘트라스트 파이핑 니트 스웨터',
            price: 59900,
        },
        {
            image: '/images/pattern/main/diapanster.jpg',
            name: 'Diapanster',
            price: 85000,
        },
        {
            image: '/images/pattern/main/fakefurvest.jpg',
            name: 'Jeans TRF',
            price: 79000,
        },
        {
            image: '/images/pattern/main/metalscrch.jpg',
            name: 'JSP Leather Bag',
            price: 125000,
        },
        {
            image: '/images/pattern/main/ladderbbjket.jpg',
            name: 'Ladder BB Jacket',
            price: 98000,
        },
        {
            image: '/images/pattern/main/squareearring.jpg',
            name: 'Oval Bag',
            price: 53000,
        },
        {
            image: '/images/pattern/main/prnitkadigan.jpg',
            name: 'Knit Cardigan',
            price: 72000,
        },
        {
            image: '/images/pattern/main/softplanit.jpg',
            name: 'Soft Plaid Knit',
            price: 82000,
        },
        {
            image: '/images/pattern/main/crostop.jpg',
            name: 'SRS Designer Bag',
            price: 110000,
        },
        {
            image: '/images/pattern/main/distrodenimshort.jpg',
            name: 'Wool Long Coat',
            price: 158000,
        },
        {
            image: '/images/pattern/main/ballonskrt.jpg',
            name: 'Balloon Skirt',
            price: 45000,
        },
    ];

    const categoriesRef = useRef(null);

    useEffect(() => {
        const container = categoriesRef.current;
        if (container) {
            const items = container.querySelectorAll('button');
            const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth + 16, 0);

            gsap.to(container, {
                x: `-${totalWidth}px`,
                duration: 50, // 슬라이드 속도를 더 느리게
                ease: 'linear',
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
                },
            });
        }
    }, []);

    return (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            {/* Top Bar */}
            <div
                className="fixed top-4 right-0 w-full z-50 flex justify-end py-2 pr-4" // Top Bar 살짝 내리기
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            >
                <div className="flex items-center gap-4">
                    {/* Map Icon */}
                    <button
                        onClick={() => console.log('Map clicked!')}
                        className="text-xl text-black flex items-center justify-center"
                        aria-label="Map"
                    >
                        <FaMapMarkerAlt />
                    </button>
                    {/* Barcode Icon */}
                    <button
                        onClick={() => console.log('Barcode clicked!')}
                        className="text-xl text-black flex items-center justify-center"
                        aria-label="Barcode"
                    >
                        <FaBarcode />
                    </button>
                    {/* Image Icon */}
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-16 pb-16">
                {/* Search Question */}
                <div className="py-6 text-center">
                    <h1 className="text-xl font-normal">무엇을 찾고 계신가요?</h1>
                </div>

                {/* Categories */}
                <div className="overflow-hidden mx-auto" style={{ maxWidth: '500px', height: '70px' }}>
                    <div
                        ref={categoriesRef}
                        className="flex gap-5 whitespace-nowrap"
                        style={{
                            display: 'inline-flex',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 text-base font-medium hover:border-gray-600 transition-colors"
                                style={{
                                    whiteSpace: 'nowrap',
                                    border: '1px solid #ccc',
                                    borderRadius: '0px',
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="flex flex-col items-center py-10">
                    <input
                        type="text"
                        placeholder="검색..."
                        className="text-center text-gray-700 text-base border-none outline-none"
                        style={{
                            width: '250px',
                            background: 'transparent',
                        }}
                    />
                    <div
                        className="border-t border-gray-300 mt-3"
                        style={{
                            width: '250px',
                        }}
                    ></div>
                </div>

                {/* Recommended Items */}
                <div className="px-6 py-4">
                    <h2 className="text-sm text-gray-600">추천 아이템</h2>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-0">
                    {productData.map((product, index) => (
                        <button
                            key={index}
                            className="border p-0 m-0 w-full text-left"
                            style={{
                                border: '1px solid black', // 검은색 테두리 추가
                                minHeight: '200px', // 최소 높이를 지정하여 일관성 유지
                            }}
                            onClick={() => {
                                console.log(`${product.name} clicked`);
                            }}
                        >
                            <div className="aspect-square relative">
                                <Img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-sm text-center">{product.name}</h3>
                            <p className="text-sm text-center">₩{product.price.toLocaleString()}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchHeader;
