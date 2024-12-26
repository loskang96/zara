'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/globals.scss';
gsap.registerPlugin(ScrollTrigger);

const desktopImages = [
    {
        src: '/images/pattern/main/1.jpg',
        url: '/page1', // 원하는 경로로 변경해주세요
    },
    {
        src: '/images/pattern/main/2.jpg',
        url: '/page2',
    },
    {
        src: '/images/pattern/main/3.jpg',
        url: '/page3',
    },
    {
        src: '/images/pattern/main/4.jpg',
        url: '/page4',
    },
    {
        src: '/images/pattern/main/5.jpg',
        url: '/page5',
    },
    {
        src: '/images/pattern/main/6.jpg',
        url: '/page6',
    },
];

const mobileImages = [
    {
        src: '/images/pattern/main/7.jpg',
        url: '/page7', // 원하는 경로로 변경해주세요
    },
    {
        src: '/images/pattern/main/8.jpg',
        url: '/page8',
    },
    {
        src: '/images/pattern/main/9.jpg',
        url: '/page9',
    },
    {
        src: '/images/pattern/main/10.jpg',
        url: '/page10',
    },
    {
        src: '/images/pattern/main/11.jpg',
        url: '/page11',
    },
];

export default function ImageSlider() {
    const sliderRef = useRef(null);
    const [currentImages, setCurrentImages] = useState(desktopImages);

    useEffect(() => {
        const handleResize = () => {
            setCurrentImages(window.innerWidth >= 1024 ? desktopImages : mobileImages);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let ctx;

        if (typeof window !== 'undefined') {
            ctx = gsap.context(() => {
                const slides = sliderRef.current.querySelectorAll('.slide');

                ScrollTrigger.getAll().forEach((st) => st.kill());

                slides.forEach((slide) => {
                    const timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: slide,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                            markers: false,
                        },
                    });

                    timeline.fromTo(slide, { scale: 0.6, opacity: 1 }, { scale: 1, opacity: 1, duration: 1.5 });

                    timeline.to(slide, {
                        scale: 0.6,
                        opacity: 1,
                        duration: 1.5,
                    });
                });
            });
        }

        return () => ctx && ctx.revert();
    }, []);

    return (
        <section ref={sliderRef} className="w-full">
            {currentImages.map((image, index) => (
                <a key={index} href={image.url} className="block w-full">
                    <div
                        className="slide relative w-full cursor-pointer"
                        style={{
                            height: '100vh',
                        }}
                    >
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundImage: `url(${image.src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                transform: 'scale(1.1)',
                            }}
                        />
                    </div>
                </a>
            ))}
        </section>
    );
}
