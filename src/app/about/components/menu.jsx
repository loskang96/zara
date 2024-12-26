import React from 'react';
import { Link } from '@chakra-ui/next-js';

export default function Menu({ onClose }) {
    return (
        <div className="fixed inset-0 bg-green-500 text-black z-50 overflow-y-auto">
            {/* 상단 메뉴 헤더 */}
            <div className="flex justify-between items-center p-4 border-b border-black">
                <div className="flex space-x-4">
                    <button className="font-bold text-lg hover:underline">여성</button>
                    <button className="font-bold text-lg hover:underline">남성</button>
                    <button className="font-bold text-lg hover:underline">아동</button>
                    <button className="font-bold text-lg hover:underline">HOME</button>
                    <button className="font-bold text-lg hover:underline">BEAUTY</button>
                </div>
                <button className="text-lg font-bold" onClick={onClose}>
                    ✕
                </button>
            </div>

            {/* 메인 메뉴 리스트 */}
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4">SALE</h2>
                <ul className="grid grid-cols-1 gap-2 text-base">
                    <li>
                        <Link href="/category/outerwear" className="hover:underline">
                            점퍼 | 자켓
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/coats" className="hover:underline">
                            코트 | 패딩 점퍼
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/dresses" className="hover:underline">
                            원피스
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/blazers" className="hover:underline">
                            블레이저
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/cardigans" className="hover:underline">
                            가디건 | 스웨터
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/tops" className="hover:underline">
                            탑 | 바디수트
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/shirts" className="hover:underline">
                            셔츠 | 블라우스
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/tshirts" className="hover:underline">
                            티셔츠
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/jeans" className="hover:underline">
                            진 | 데님팬츠
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/pants" className="hover:underline">
                            팬츠
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/skirts" className="hover:underline">
                            스커트 | 쇼츠
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/sweaters" className="hover:underline">
                            니트
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/joggers" className="hover:underline">
                            맨투맨 | 조거 팬츠
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/shoes" className="hover:underline">
                            슈즈
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
