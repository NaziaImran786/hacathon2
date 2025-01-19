// src\components\TrendingCard.tsx
import Image from "next/image";
import React from "react";
import { Card } from "./ui/card";
import { TrendingCards } from "@/constant/trendingcard";
import  Link  from "next/link";

const TrendingCard = ({ loop }: { loop: TrendingCards[] }) => {
  return (
    <>
      {loop.map((item, index) => {
        return (
          <Link href={'/product'} key={index}>
    <Card className="relative w-[230px] h-[350px] bg-white shadow-lg hover:bg-[#2F1AC4]" key={index}>
      
      
      {/* Product Image */}
      <div className="absolute w-full h-[236px] bg-[#F6F7FB] top-0 left-0 flex items-center justify-center">
        <Image
          src={item.src}
          alt="Cantilever chair"
          width={247}
          height={244}
          className="w-[247px] h-[244px] object-contain"
        />
      </div>

      {/* Product Name */}
      <div className="absolute top-[69.53%] left-[17.3%] right-[24.04%] text-[#FB2E86] font-lato font-bold text-[18px] text-center">
        {item.description}
      </div>     

      
        {/* Product Code */}
      <div className="absolute top-[83.38%] left-[18.07%] right-[32.26%] text-[#151875] font-josefin text-sm text-center">
        {item.code}
      </div>

      {/* Product Price */}
      <div className="absolute top-[83.38%] left-[52.59%] right-[45.11%] text-[#E5E5EF] font-lato text-sm text-center">
        {item.price}
      </div>      
           
          </Card>
          </Link>
        );
      })}
    </>
  );
};

export default TrendingCard;
