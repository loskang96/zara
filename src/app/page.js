'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/Footer';

const ImageSlider = dynamic(() => import('@/components/ImageSlider'), {
    ssr: false,
});

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <ImageSlider />
            </main>
            <Footer />
        </div>
    );
}
