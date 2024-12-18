'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import Home from './home/home';

export default function Page() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            {/* Header 섹션 */}
            <Header />

            {/* Main 섹션 */}
            <Main>
                <Home />
            </Main>

            {/* Footer 섹션 */}
            <section className="w-full">
                <Footer />
            </section>
        </div>
    );
}
