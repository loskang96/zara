'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import '../styles/_swiper.scss'; // 슬라이더 스타일

gsap.registerPlugin(ScrollTrigger);

const images = [
    '/images/pattern/main/1.jpg',
    '/images/pattern/main/2.jpg',
    '/images/pattern/main/3.jpg',
    '/images/pattern/main/4.jpg',
    '/images/pattern/main/5.jpg',
];

const ImageSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slides = sliderRef.current.children;

        gsap.utils.toArray(slides).forEach((slide, index) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: slide,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                    markers: false, // 디버깅을 위해 true로 설정 가능
                },
            })
                .fromTo(slide, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1.5 })
                .to(slide, { opacity: 0, scale: 0.8, duration: 1.5 });
        });
    }, []);

    return (
        <Box ref={sliderRef} className="slider-container">
            {images.map((src, index) => (
                <Box key={index} className="slide">
                    <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
                </Box>
            ))}
        </Box>
    );
};

export default ImageSlider;
