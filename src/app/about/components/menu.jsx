import React from 'react';
import { Link } from '@chakra-ui/next-js'; // React Router Link 가져오기

export default function Menu({ onClose }) {
    return (
        <div className="fixed inset-0 bg-green-500 text-black p-6 z-50 overflow-y-auto">
            {/* 메뉴 상단 헤더 */}
            <div className="flex justify-between items-center mb-6 border-b border-black pb-2">
                <h2 className="text-lg font-bold uppercase">Sale</h2>
                <button
                    className="text-lg font-bold"
                    onClick={onClose} // 닫기 버튼
                >
                    ✕
                </button>
            </div>

            {/* 메뉴 리스트 */}
            <ul className="grid grid-cols-1 gap-4 text-sm">
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
                <li>
                    <Link href="/category/bags" className="hover:underline">
                        백
                    </Link>
                </li>
                <li>
                    <Link href="/category/accessories" className="hover:underline">
                        액세서리 | 주얼리
                    </Link>
                </li>
                <li>
                    <Link href="/category/lingerie" className="hover:underline">
                        란제리
                    </Link>
                </li>
                <li>
                    <Link href="/category/fragrances" className="hover:underline">
                        향수
                    </Link>
                </li>
                <li>
                    <Link href="/category/makeup" className="hover:underline">
                        메이크업
                    </Link>
                </li>
            </ul>
        </div>
    );
}
