// src\components\CategoryCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { client } from "@/sanity/lib/client";
// import { CategoryCards } from "@/constant/categorycard";

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

async function CategoryCard (){
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
    const resData = res.filter((item) => [15, 16, 17, 18].includes(item.id));
  return (
    <>
      {resData.map((item, index) => {
        return (
          <Link href={`/product/${item.id}?id=${item.id}&imageUrl=${item.imageUrl}&name=${item.name}&description=${item.description}&price=${item.price}&discountPercentage=${item.discountPercentage}&priceWithoutDiscount=${item.priceWithoutDiscount}&ratingCount=${item.ratingCount}`} key={index}>
          <Card 
          className="relative w-[230px] h-[350px] border-0 shadow-0 outline-none bg-transparent" key={index} >
            
            {/* Product Image */}
            <div className="absolute w-full h-[236px] bg-[#F6F7FB] top-0 left-0 flex items-center rounded-[50%] border-b-4 hover:border-blue-600  justify-center">
              <Image
                src={item.imageUrl}
                alt="Cantilever chair"
                width={150}
                height={150}
                className="w-[150px] h-[150px] object-contain"
              />
            </div>

            {/* Product Name */}
            <div className="absolute top-[69.53%] left-[21.3%] right-[23.04%] text-[#FB2E86] font-lato font-bold text-[18px] text-center">
              {item.name}
            </div>            
          </Card>
          </Link>
        );
      })}
    </>
  );
};

export default CategoryCard;
