// src\components\heroslide\slide.tsx
'use client';

import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


export default function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image src="/promotional.png" alt="slid1" height={700} width={1300}></Image></SwiperSlide>
        <SwiperSlide><Image src="/unique.png" alt="slid2" height={700} width={1300}></Image></SwiperSlide>
        <SwiperSlide><Image src="/d1.png" alt="slid3" height={700} width={1300}></Image></SwiperSlide>       
      </Swiper>
    </>
  );
}
