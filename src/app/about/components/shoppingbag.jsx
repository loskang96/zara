import React, { useCallback } from 'react';
import { Home, Search, ShoppingBag, User } from 'lucide-react';
import { Img } from '@chakra-ui/react';

const ShoppingCart = ({ onClose }) => {
    const recommendedProducts = [
        { id: 1, name: '락 플랩 숄더백', price: 59900, image: '/api/placeholder/400/400' },
        { id: 2, name: '버킷백', price: 59900, image: '/api/placeholder/400/400' },
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
                    <h1 className="text-lg font-bold">장바구니</h1>
                    <div className="w-6"></div> {/* Placeholder for alignment */}
                </div>
            </div>

            {/* Cart Content */}
            <div className="mt-16 p-4">
                {recommendedProducts.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                        {recommendedProducts.map((product) => (
                            <div key={product.id} className="text-center">
                                <Img src={product.image} alt={product.name} className="w-full h-auto" />
                                <h3 className="text-sm">{product.name}</h3>
                                <p className="text-gray-500">₩{product.price.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">장바구니가 비어 있습니다.</p>
                )}
            </div>

            {/* Fixed Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full bg-black z-50 h-16 flex items-center justify-between px-12">
                <button onClick={() => (window.location.href = '/')} className="w-6 flex items-center justify-center">
                    <Home className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                </button>
                <button className="w-6 flex items-center justify-center">
                    <Search className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                </button>
                <button className="flex items-center justify-center text-white text-sm font-light tracking-wide">
                    메뉴
                </button>
                <button className="w-6 flex items-center justify-center">
                    <ShoppingBag className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                </button>
                <button
                    onClick={() => (window.location.href = '/login')}
                    className="w-6 flex items-center justify-center"
                >
                    <User className="w-[22px] h-[22px] text-white stroke-[1.25]" />
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
