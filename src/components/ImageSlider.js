'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/globals.scss';

const desktopImages = [
    { src: '/images/pattern/main/1.jpg', url: '/page1' },
    { src: '/images/pattern/main/2.jpg', url: '/page2' },
    { src: '/images/pattern/main/3.jpg', url: '/page3' },
    { src: '/images/pattern/main/4.jpg', url: '/page4' },
    { src: '/images/pattern/main/5.jpg', url: '/page5' },
];

const mobileImages = [
    { src: '/images/pattern/main/7.jpg', url: '/page7' },
    { src: '/images/pattern/main/8.jpg', url: '/page8' },
    { src: '/images/pattern/main/9.jpg', url: '/page9' },
    { src: '/images/pattern/main/10.jpg', url: '/page10' },
    { src: '/images/pattern/main/11.jpg', url: '/page11' },
];

const ImageSlider = () => {
    const sliderRef = useRef(null);
    const [currentImages, setCurrentImages] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const timelineRefs = useRef([]);
    const resizeTimeoutRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const handleResize = () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }

            resizeTimeoutRef.current = setTimeout(() => {
                setCurrentImages(window.innerWidth >= 1024 ? desktopImages : mobileImages);
                setIsMobile(window.innerWidth < 768);
            }, 150);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!sliderRef.current || currentImages.length === 0) return;

        const ctx = gsap.context(() => {
            const slides = sliderRef.current.querySelectorAll('.slide');

            ScrollTrigger.getAll().forEach((st) => st.kill());
            timelineRefs.current.forEach((tl) => tl && tl.kill());
            timelineRefs.current = [];

            slides.forEach((slide, index) => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: slide,
                        start: 'bottom 80%',
                        end: 'top 20%',
                        scrub: 1,
                        markers: false,
                        fastScrollEnd: true,
                        preventOverlaps: true,
                        overwrite: 'auto',
                    },
                });

                timeline
                    .fromTo(
                        slide,
                        {
                            scale: 1,
                            opacity: 1,
                            willChange: 'transform',
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 2,
                            ease: 'none',
                        }
                    )
                    .to(slide, {
                        scale: 0.6,
                        opacity: 1,
                        duration: 1,
                        ease: 'power1.inOut',
                    });

                timelineRefs.current[index] = timeline;
            });
        });

        return () => {
            ctx.revert();
            timelineRefs.current.forEach((tl) => tl && tl.kill());
        };
    }, [currentImages]);

    if (currentImages.length === 0) return null;

    return (
        <section ref={sliderRef} className="w-full">
            {currentImages.map((image, index) => (
                <a key={index} href={image.url} className="block w-full" style={{ transform: 'translateZ(0)' }}>
                    <div
                        className="slide relative w-full cursor-pointer"
                        style={{
                            height: '100vh',
                            willChange: 'transform',
                            backfaceVisibility: 'hidden',
                        }}
                    >
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundImage: `url(${image.src})`,
                                backgroundSize: 'cover',
                                backgroundPosition: !isMobile ? 'center center' : '100% 0%',
                                backgroundRepeat: 'no-repeat',
                                transform: 'scale(1.1) translateZ(0)',
                                willChange: 'transform',
                                backfaceVisibility: 'hidden',
                            }}
                        />
                    </div>
                </a>
            ))}
        </section>
    );
};

export default ImageSlider;
