import React from 'react';
import { Plus, X } from 'lucide-react';

const ShoppingBagGrid = () => {
    const baseProducts = [
        {
            id: 1,
            name: '락 플랩 숄더백',
            price: 59900,
            image: '/api/placeholder/400/500',
        },
        {
            id: 2,
            name: '버킷백',
            price: 59900,
            image: '/api/placeholder/400/500',
        },
        {
            id: 3,
            name: '다이아몬드 니트 스웨터',
            price: 32900,
            originalPrice: 47000,
            discount: 31,
            image: '/api/placeholder/400/500',
        },
        {
            id: 4,
            name: 'ZW COLLECTION 양면 점퍼',
            price: 89900,
            image: '/api/placeholder/400/500',
        },
        {
            id: 5,
            name: '패딩 크롭 아노락 WATER AND WIND',
            price: 129000,
            image: '/api/placeholder/400/500',
        },
        {
            id: 6,
            name: '다이아몬드 패턴 니트 스웨터',
            price: 45900,
            image: '/api/placeholder/400/500',
        },
    ];

    const products = [...Array(3)].flatMap((_, index) =>
        baseProducts.map((product) => ({
            ...product,
            id: product.id + index * 6,
            name: index === 0 ? product.name : `${product.name} ${index + 1}`,
            price: index === 2 ? product.price * 1.1 : product.price,
        }))
    );

    return (
        <div className="fixed inset-0 bg-white z-50">
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="border-b border-gray-200 flex items-center justify-between px-4 py-3">
                    <div className="flex-1 flex justify-start">
                        <button className="p-1">
                            <X size={20} strokeWidth={1} />
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <span className="font-normal text-sm">장바구니</span>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <span className="text-sm">마음에 드는 제품</span>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-4">
                        {/* Empty Cart Message */}
                        <div className="flex items-center mb-8">
                            <div className="p-2 border border-gray-300 rounded mr-3">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-gray-500"
                                >
                                    <path d="M20.94 22H3.06a1 1 0 01-1-1.06L3 6h18l.94 14.94a1 1 0 01-1 1.06z" />
                                    <path d="M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2" />
                                </svg>
                            </div>
                            <div className="text-sm">
                                <p>장바구니가 비어 있습니다</p>
                                <p className="text-gray-500">추가한 상품이 여기에 표시됩니다.</p>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div>
                            <h2 className="text-lg mb-4">추천 제품</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((product) => (
                                    <div key={product.id} className="relative group">
                                        <div className="aspect-[3/4] bg-gray-100 relative">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <button className="absolute right-4 bottom-4 p-2 bg-white rounded-full shadow-sm">
                                                <Plus size={16} strokeWidth={1} />
                                            </button>
                                        </div>
                                        <div className="mt-2">
                                            <h3 className="text-sm">{product.name}</h3>
                                            <div className="flex items-center">
                                                {product.originalPrice ? (
                                                    <>
                                                        <span className="text-sm line-through text-gray-500">
                                                            ₩ {product.originalPrice.toLocaleString()}
                                                        </span>
                                                        <span className="text-sm text-green-500 ml-2">
                                                            -{product.discount}% /{' '}
                                                        </span>
                                                    </>
                                                ) : null}
                                                <span className="text-sm">
                                                    {product.price > 0
                                                        ? `₩ ${Math.round(product.price).toLocaleString()}`
                                                        : ''}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingBagGrid;
