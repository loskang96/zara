'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Img } from '@chakra-ui/react';
import { MapPin, Barcode, Bookmark } from 'lucide-react';
import gsap from 'gsap';

const SearchHeader = ({ onClose }) => {
    const [bookmarkedItems, setBookmarkedItems] = useState(new Set());
    const categories = [
        '버킷',
        '패딩',
        '데님',
        '바라클라바',
        '하이웨이스트',
        '린넨',
        '베스트',
        '무스탕',
        '스키',
        '롱코트',
        '스커트팬츠',
        '퍼',
        '탑',
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

    const toggleBookmark = (productName, e) => {
        e.stopPropagation();
        setBookmarkedItems((prev) => {
            const newBookmarks = new Set(prev);
            if (newBookmarks.has(productName)) {
                newBookmarks.delete(productName);
            } else {
                newBookmarks.add(productName);
            }
            return newBookmarks;
        });
    };

    useEffect(() => {
        const container = categoriesRef.current;
        if (container) {
            const items = container.querySelectorAll('button');
            const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth + 16, 0);

            const duplicatedContent = container.innerHTML;
            container.innerHTML += duplicatedContent;

            gsap.to(container, {
                x: `-${totalWidth}px`,
                duration: 80,
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
                className="fixed top-4 right-0 w-full z-50 flex justify-end py-2 pr-4"
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            >
                <div className="flex items-center gap-4">
                    <button className="text-xl text-black flex items-center justify-center" aria-label="Map">
                        <MapPin size={20} />
                    </button>
                    <button className="text-xl text-black flex items-center justify-center" aria-label="Barcode">
                        <Barcode size={20} />
                    </button>
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
                                onClick={(e) => e.preventDefault()}
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
                        placeholder="검색"
                        className="text-center text-gray-700 text-base border-none outline-none placeholder-gray-400"
                        style={{
                            width: '250px',
                            background: 'transparent',
                            caretColor: 'black',
                        }}
                    />
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
                            className="border p-0 m-0 w-full text-left relative"
                            style={{
                                border: '1px solid black',
                                minHeight: '200px',
                            }}
                            onClick={() => {
                                console.log(`${product.name} clicked`);
                            }}
                        >
                            <div className="aspect-square relative">
                                <Img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="px-2 py-1 flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-sm text-left">{product.name}</h3>
                                    <p className="text-sm text-left">₩{product.price.toLocaleString()}</p>
                                </div>
                                <button
                                    onClick={(e) => toggleBookmark(product.name, e)}
                                    className="ml-2 p-1"
                                    aria-label="북마크"
                                >
                                    <Bookmark
                                        size={20}
                                        strokeWidth={1}
                                        className="text-black transition-colors"
                                        fill={bookmarkedItems.has(product.name) ? 'black' : 'transparent'}
                                    />
                                </button>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchHeader;
