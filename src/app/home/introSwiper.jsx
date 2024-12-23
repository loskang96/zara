// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel } from 'swiper/modules';
// import 'swiper/css';

// const MobileIntroSwiper = () => {
//     const images = [
//         '/images/pattern/main/1.jpg',
//         '/images/pattern/main/2.jpg',
//         '/images/pattern/main/3.jpg',
//         '/images/pattern/main/4.jpg',
//         '/images/pattern/main/5.jpg',
//     ];

//     return (
//         <div className="relative w-full h-screen overflow-hidden">
//             {/* Swiper 설정 */}
//             <Swiper
//                 direction="vertical" // 세로 방향 슬라이드
//                 slidesPerView={1}
//                 modules={[Mousewheel]}
//                 mousewheel={true}
//                 style={{ width: '100%', height: '100%' }}
//             >
//                 {/* 슬라이드 */}
//                 {images.map((src, index) => (
//                     <SwiperSlide key={index}>
//                         {/* 슬라이드 배경 */}
//                         <div
//                             className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
//                             style={{ backgroundImage: `url(${src})` }}
//                         >
//                             {/* 텍스트 오버레이 */}
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default MobileIntroSwiper;
