// src\components\Trending.tsx
import React from "react";
import Image from "next/image";
import TrendingCard from "./TrendingCard";
import { TrendingCards } from "@/constant/trendingcard";

export default function Trending() {
  return (
    <section className="w-full 2xl:w-[1920px] mx-auto mt-[129px] mb-[130px]">
      {/* Heading */}
      <div className="container mx-auto px-4 text-center mb-[60px]">
        <h1 className="text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans">
          Trending Products
        </h1>
      </div>

      {/* Card Grid */}
      <div className="container w-full mx-auto mb-[53px]">
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          <TrendingCard loop={TrendingCards} />
        </div>
      </div>

      {/* Trending Bottom Cards */}
      <div className="container mx-auto px-4 mt-[39px] flex lg:flex-row flex-col gap-6">
        <div className="relative h-[270px] w-full lg:w-[420px] hover:scale-110">
          <Image
            src="/tb1.png"
            alt="Trending 1"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative h-[270px] w-full lg:w-[420px] hover:scale-110">
          <Image
            src="/tb2.png"
            alt="Trending 2"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="h-auto w-full lg:w-[267px] flex flex-col gap-4 items-center hover:scale-110">
          <div className="relative h-[74px] w-full">
            <Image
              src="/tp1.png"
              alt="Trending Small 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[74px] w-full hover:scale-110">
            <Image
              src="/tp2.png"
              alt="Trending Small 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[74px] w-full hover:scale-110">
            <Image
              src="/tp3.png"
              alt="Trending Small 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
