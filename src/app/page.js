'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import ImageSlider from '@/components/ImageSlider';
import '../styles/globals.scss';
import '../styles/_swiper.scss';

export default function Page() {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="main-container">
                <ImageSlider />
            </main>
            <Footer />
        </div>
    );
}
