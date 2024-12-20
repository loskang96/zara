'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            footerRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top bottom',
                    end: 'center center',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <footer
            ref={footerRef}
            className="h-screen w-full bg-gray-100 flex flex-col items-center justify-center text-center"
        >
            <h2 className="text-4xl font-bold mb-8">뉴스레터에 가입하세요</h2>
            <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="text-xl text-gray-600 hover:text-black">
                    TIKTOK
                </a>
                <a href="#" className="text-xl text-gray-600 hover:text-black">
                    INSTAGRAM
                </a>
                <a href="#" className="text-xl text-gray-600 hover:text-black">
                    FACEBOOK
                </a>
                <a href="#" className="text-xl text-gray-600 hover:text-black">
                    YOUTUBE
                </a>
            </div>
            <p className="text-lg text-gray-500">© 2024 KANGHANSOL. All rights reserved.</p>
        </footer>
    );
}
