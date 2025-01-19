// src\components\FeatureSection.tsx
import React from 'react';
import Image from 'next/image';
import ProductCard from './Feature';
// import { featureCards } from '@/constant/featurecard';

function FeatureSection() {
  return (
    <>
      <section className="w-full 2xl:w-[1920px] mx-auto mt-[29px]">
        {/* Heading */}
        <div className="container mx-auto px-4 text-center mb-[48px]">
          <h1 className="text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans">
            Featured Products
          </h1>
        </div>

        {/* Cards Section */}
        <div className="container mx-auto px-4 mb-[53px]">
          <div className="x-auto gap-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            <ProductCard  />          
          </div>

          {/* Slider Image */}
          <div className="flex justify-center mt-[53px]">
            <Image src="/f-slide.png" alt="arrow" width={91} height={4} />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureSection;
