import React, { useCallback, useState } from 'react';
import { Img } from '@chakra-ui/react';

const ShoppingCart = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('cart'); // Active tab state
    const recommendedProducts = [
        { id: 1, name: '락 플랩 숄더백', price: 59900, image: '/api/placeholder/400/400' },
        { id: 2, name: '버킷백', price: 59900, image: '/api/placeholder/400/400' },
        { id: 3, name: 'ZW COLLECTION 양면 점퍼', price: 169900, image: '/api/placeholder/400/400' },
        { id: 4, name: '풀톡 텍스트 조거 팬츠', price: 27900, image: '/api/placeholder/400/400' },
        { id: 5, name: '패딩 크롭 아노락', price: 89900, image: '/api/placeholder/400/400' },
        { id: 6, name: '다이아몬드 니트 스웨터', price: 47700, image: '/api/placeholder/400/400' },
    ];

    const handleBackNavigation = useCallback(
        (event) => {
            if (!event.state?.cartOpen) {
                onClose();
            }
        },
        [onClose]
    );

    React.useEffect(() => {
        if (!window.history.state?.cartOpen) {
            window.history.replaceState({ cartOpen: true }, 'cart');
        }

        const popstateListener = (event) => {
            if (!event.state?.cartOpen) {
                onClose();
            }
        };

        window.addEventListener('popstate', popstateListener);

        return () => {
            window.removeEventListener('popstate', popstateListener);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-white z-50">
            {/* Header Section */}
            <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md border-b">
                <div className="flex items-center justify-between px-4 py-2">
                    <button
                        onClick={() => {
                            window.history.back();
                            onClose();
                        }}
                        className="p-2"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* Tabs */}
                <div className="flex items-center justify-around border-b">
                    <button
                        className={`w-1/2 py-2 text-center ${
                            activeTab === 'cart' ? 'border-b-2 border-black font-bold' : 'text-gray-400'
                        }`}
                        onClick={() => setActiveTab('cart')}
                    >
                        장바구니
                    </button>
                    <button
                        className={`w-1/2 py-2 text-center ${
                            activeTab === 'wishlist' ? 'border-b-2 border-black font-bold' : 'text-gray-400'
                        }`}
                        onClick={() => setActiveTab('wishlist')}
                    >
                        마음에 드는 제품
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="mt-16 p-4">
                {activeTab === 'cart' ? (
                    <>
                        <div className="text-center py-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-12 h-12 mx-auto text-gray-400"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9l-3-3m0 0L10.5 9m3-3V21" />
                            </svg>
                            <p className="mt-4 text-gray-500">장바구니가 비어 있습니다.</p>
                            <p className="text-gray-400">추가한 상품이 여기에 표시됩니다.</p>
                        </div>
                        {/* Recommended Products */}
                        <div className="mt-8">
                            <h2 className="text-lg font-bold mb-4">추천 제품</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {recommendedProducts.map((product) => (
                                    <div key={product.id} className="border p-4">
                                        <Img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-40 object-cover"
                                        />
                                        <h3 className="text-sm mt-2">{product.name}</h3>
                                        <p className="text-gray-500">₩{product.price.toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-500">마음에 드는 제품이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
