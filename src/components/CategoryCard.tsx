// src\components\CategoryCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { CategoryCards } from "@/constant/categorycard";

const CategoryCard = ({ loop }: { loop: CategoryCards[] }) => {
  return (
    <>
      {loop.map((item, index) => {
        return (
          <Link href={'/product'} key={index}>
          <Card className="relative w-[230px] h-[350px] border-0 shadow-0 outline-none bg-transparent" key={index} >
            
            {/* Product Image */}
            <div className="absolute w-full h-[236px] bg-[#F6F7FB] top-0 left-0 flex items-center rounded-[50%] border-b-4 hover:border-blue-600  justify-center">
              <Image
                src={item.src}
                alt="Cantilever chair"
                width={150}
                height={150}
                className="w-[150px] h-[150px] object-contain"
              />
            </div>

            {/* Product Name */}
            <div className="absolute top-[69.53%] left-[21.3%] right-[23.04%] text-[#FB2E86] font-lato font-bold text-[18px] text-center">
              {item.description}
            </div>

            {/* Product Code */}
            <div className="absolute top-[83.38%] left-[25.07%] right-[25.26%] text-[#151875] font-josefin text-sm text-center">
              {item.code}
            </div>

            {/* Product Price */}
            <div className="absolute top-[83.38%] left-[60.59%] right-[41.11%] text-[#E5E5EF] font-lato text-sm text-center">
              {item.price}
            </div>
          </Card>
          </Link>
        );
      })}
    </>
  );
};

export default CategoryCard;
