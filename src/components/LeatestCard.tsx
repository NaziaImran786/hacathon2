// src\components\LeatestCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
// import { LeatestCards } from "@/constant/leatestcard";
import { client } from "@/sanity/lib/client";

interface Product {
  imageUrl: string ;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  ratingCount: number;
}  


async function LeatestCard () {

  const res: Product[] = await client.fetch(`*[_type == "card"] {
    title,
    description,
    price,
    discountPercentage,
    priceWithoutDiscount, 
    "ratingCount": ratingCount,  
    "imageUrl": image.asset->url
  
    }`)

  return (
    <>
      {res.slice(4, 11).map((item: Product, index: number) => {
        return (
          <Link href={`/product/${item.title}?imageUrl=${item.imageUrl}&title=${item.title}&description=${item.description}&price=${item.price}&discountPercentage=${item.discountPercentage}&priceWithoutDiscount=${item.priceWithoutDiscount}&ratingCount=${item.ratingCount}`} key={index}>
          <Card className="relative w-[300px] h-[325px] bg-[#F7F7F7] hover:bg-[#ffffff] shadow-lg" key={index}>
            
            <div className="bg-[#F7F7F7] hover:bg-[#ffffff] w-[360] h-[200px] absolute left-[19.19%] right-[19.19%] top-[14.44%] bottom-[3.25%] ">
              {/* Image goes here */}
              <Image
                src={item.imageUrl}
                alt="Cantilever chair"
                width={223}
                height={209}
                objectFit="cover"
                className="w-[267px] h-[277px] object-contain"
              ></Image>
            </div>

            {/* Title */}
            <div className="w-full bg-[#ffffff]">
            <div className="absolute left-[2%] right-[33.67%] bg-white top-[93.32%] bottom-[1.45%] text-[#151875] font-[Josefin Sans] text-[16px] leading-[19px]">
              {item.title}
            </div>

            {/* Price */}
            <div className="absolute left-[67.08%] right-[16.97%] top-[93.64%] bottom-[1.79%] bg-white text-[#151875] font-[Josefin Sans] text-[14px] leading-[16px]">
              {item.price}
            </div>

            {/* Old Price */}
            <div className="absolute left-[82.41%] right-[4.32%] top-[94.27%] bottom-[1.81%] bg-white text-[#FB2448] font-[Josefin Sans] text-[12px] leading-[14px] line-through">
              {item.priceWithoutDiscount}
            </div>

            {/* Bottom border line */}
            <div className="absolute left-0 right-[57.3%] top-[99.69%] bottom-[0.31%] border-2 border-[#EEEFFB]"></div>
            
            {/* Sale Badge */}            
            {/* {item.badge && (
              <div className="absolute left-[45px] top-[50.71px] bg-[#3F509E] text-[#EEEFFB] text-[14px] leading-[16px] rotate-[-18.12deg] px-2">
                {item.badge}
              </div>              
            )} */}
           </div>
          </Card>
          </Link>
        );
      })}
    </>
  );
};

export default LeatestCard;
