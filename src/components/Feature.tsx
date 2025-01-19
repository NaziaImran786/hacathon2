// src\components\Feature.tsx
import Link from "next/link";
import Image from "next/image";
// import { FeatureCard } from "@/constant/featurecard";
import React from "react";
import { Card } from "./ui/card";
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


async function ProductCard () {

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
      {res.slice(0, 4).map((item: Product, index: number) => {
        return (
          <Link href={`/product/${item.title}?imageUrl=${item.imageUrl}&title=${item.title}&description=${item.description}&price=${item.price}&discountPercentage=${item.discountPercentage}&priceWithoutDiscount=${item.priceWithoutDiscount}&ratingCount=${item.ratingCount}`} key={index}>
          <Card
            className="relative w-[250px] h-[361px] bg-white shadow-lg hover:bg-[#2F1AC4]"
            key={index}
          >
            {/* Product Image */}
            <div className="absolute w-full h-[236px] bg-[#F6F7FB] top-0 left-0 flex items-center justify-center">
              <Image
                src={item.imageUrl}
                alt="Cantilever chair"
                width={178}
                height={178}
                className="w-[178px] h-[178px] object-contain"
              />
            </div>

            {/* Product Name */}
            <div className="absolute top-[69.53%] left-[20.3%] right-[22.04%] text-[#FB2E86] font-lato font-bold text-[18px] text-center">
              {item.title}
            </div>

            {/* Color Options */}
            {/* {item.discountPercentage || (
              <div className="absolute top-[78.95%] left-[40.74%] flex space-x-2">
                <div className="w-[14px] h-2  bg-[#05E6B7]"></div>
                <div className="w-[14px] h-2  bg-[#F701A8]"></div>
                <div className="w-[14px] h-2  bg-[#00009D]"></div>
              </div>
            )} */}

            {/* Product Code */}
            {/* <div className="absolute top-[83.38%] left-[22.07%] right-[22.26%] text-[#151875] font-josefin text-sm text-center">
              
            </div> */}

            {/* Product Price */}
            <div className="absolute top-[90.58%] left-[38.59%] right-[41.11%] text-[#151875] font-bold text-sm text-center">
              RS.{item.price}
            </div>
          </Card>
          </Link>
        );
      })}
    </>
  );
};

export default ProductCard;
