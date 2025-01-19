// src\components\Discount.tsx
import React from "react";
import Image from "next/image";

function Discount() {
  return (
    <>
      <section className="w-full 2xl:w-[1920px] mx-auto mt-[129px] mb-[58px]">
        {/* Heading */}
        <div className="container mx-auto px-4 text-center mb-[26px]">
          <h1 className="text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans">
            Discount Item
          </h1>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <div className="min-w-[300px] min-h-[250px] w-full max-w-[1214px] mx-auto">
            <Image
              src="/d1.png"
              alt="Discount"
              width={1214}
              height={597}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Discount;

