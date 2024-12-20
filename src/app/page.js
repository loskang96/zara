// app/page.js
'use client';

import Header from '@/components/layout/header/Header';
import ImageSlider from '@/components/ImageSlider';
import Footer from '@/components/layout/Footer';

export default function Page() {
    return (
        <div className="relative w-full">
            <Header />
            <main>
                <ImageSlider />
            </main>
            <Footer />
        </div>
    );
}
