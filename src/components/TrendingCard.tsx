// src\components\TrendingCard.tsx
import Image from "next/image";
import React from "react";
import { Card } from "./ui/card";
// import { TrendingCards } from "@/constant/trendingcard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  imageUrl: string ;
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  ratingCount: number;
}
async function TrendingCard  () {
   const res: Product[] = await client.fetch(`*[_type == "product"]{
       id,
       name,
       "imageUrl": image.asset->url,
       price,
       description,
       discountPercentage,
       isFeaturedProduct,
       stockLevel,
       category,
       _createdAt,
       _updatedAt
     }`)
   
   
     // Filter objects with id 1, 2, 3, and 4
     const resData = res.filter((item) => [11, 12, 13, 14,].includes(item.id));
  return (
    <>
      {resData.map((item, index) => {
        return (
          <Link
            href={`/product/${item.id}?id=${item.id}&imageUrl=${item.imageUrl}&name=${item.name}&description=${item.description}&price=${item.price}&discountPercentage=${item.discountPercentage}&priceWithoutDiscount=${item.priceWithoutDiscount}&ratingCount=${item.ratingCount}`}
            key={index}
          >
            <Card
              className="relative w-[230px] h-[350px] bg-white shadow-lg hover:bg-[#2F1AC4]"
              key={index}
            >
              {/* Product Image */}
              <div className="absolute w-full h-[236px] bg-[#F6F7FB] top-0 left-0 flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt="Cantilever chair"
                  width={247}
                  height={244}
                  className="w-[247px] h-[244px] object-contain"
                />
              </div>

              {/* Product Name */}
              <div className="absolute top-[69.53%] left-[17.3%] right-[24.04%] text-[#FB2E86] font-lato font-bold text-[18px] text-center">
                {item.name}
              </div>

              {/* Product price */}
              <div className="absolute top-[83.38%] left-[18.07%] right-[32.26%] text-[#151875] font-bold text-sm text-center">
                ${item.price}
              </div>

              {/* Product code */}
              {/* <div className="absolute top-[83.38%] left-[52.59%] right-[45.11%] text-[#E5E5EF] font-lato text-sm text-center">
                {item.price}
              </div> */}
            </Card>
          </Link>
        );
      })}
    </>
  );
};

export default TrendingCard;
