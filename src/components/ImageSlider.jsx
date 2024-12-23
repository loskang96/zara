'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const images = [
    '/images/pattern/main/1.jpg',
    '/images/pattern/main/6.jpg',
    '/images/pattern/main/7.jpg',
    '/images/pattern/main/8.jpg',
    '/images/pattern/main/9.jpg',
];

export default function ImageSlider() {
    const sliderRef = useRef(null);

    useEffect(() => {
        let ctx; // GSAP context for cleanup

        if (typeof window !== 'undefined') {
            ctx = gsap.context(() => {
                const slides = sliderRef.current.querySelectorAll('.slide');

                slides.forEach((slide) => {
                    const timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: slide,
                            start: 'top bottom', // 이미지가 화면 아래에 들어올 때
                            end: 'bottom top', // 이미지가 화면 위로 나갈 때
                            scrub: true,
                            markers: false, // 디버깅용 마커 비활성화
                        },
                    });

                    // 등장 애니메이션
                    timeline.fromTo(
                        slide,
                        { scale: 0.8, opacity: 0 }, // 시작 상태
                        { scale: 1, opacity: 1, duration: 1.5, ease: 'power1.out' } // 화면에 꽉 차게
                    );

                    // 사라짐 애니메이션
                    timeline.to(slide, {
                        scale: 0.8, // 다시 축소
                        opacity: 0, // 투명해짐
                        duration: 1.5,
                        ease: 'power1.out',
                    });
                });
            });
        }

        return () => ctx && ctx.revert(); // GSAP 애니메이션 정리
    }, []);

    return (
        <section ref={sliderRef} className="w-full">
            {images.map((src, index) => (
                <div
                    key={index}
                    className="slide h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${src})`, // 배경 이미지 설정
                    }}
                />
            ))}
        </section>
    );
}
