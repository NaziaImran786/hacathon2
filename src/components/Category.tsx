//src\components\Category.tsx
import React from "react";
import { CategoryCards } from "@/constant/categorycard";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <>
      <section className="w-full 2xl:w-[1920px] mx-auto mt-[79px] ">
        {/* Heading */}
        <div className="container mx-auto px-4 text-center mb-[56px]">
          <h1 className="text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans">
            Top Categories
          </h1>
        </div>

        {/* Card Grid */}
        <div className="container mx-auto px-4">
          <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            <CategoryCard loop={CategoryCards} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;


