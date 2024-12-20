import '@/styles/globals.scss';
import { Providers } from '@/components/providers';
import SkipNav from '@/components/layout/header/SkipNav';

export const metadata = {
    title: 'ZARA Kang HanSol/portpolio',
    description: '페이지 설명',
    openGraph: {
        title: '페이지 제목',
        description: '페이지 설명',
        type: 'website',
        url: 'http://www.mysite.com/article/article1.html',
        images: [
            {
                url: 'http://www.mysite.com/article/article1_featured_image.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: '페이지 제목',
        description: '페이지 설명',
        images: ['http://www.mysite.com/article/article1.html'],
        creator: '사이트 명',
    },
};

// app/layout.js
import '../styles/globals.scss'; // 전역 스타일은 여기서 import

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
