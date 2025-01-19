// src\components\Leatest.tsx
import React from "react";
import LeatestCard from "./LeatestCard";
// import { leatestCards } from "@/constant/leatestcard";

function LeatestProduct() {
  return (
    <>
      <section className="w-full 2xl:w-[1920px] mx-auto mt-[129px]">
        {/* Heading */}
        <div className="container mx-auto px-4 text-center mb-[48px]">
          <h1 className="text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans">
            Leatest Products
          </h1>
        </div>

        {/* Links */}
        <div className="relative hidden md:flex space-x-10 w-full justify-center mb-[62px]">
          {/* New Arrival */}
          <div className="relative">
            <span className="font-lato font-normal text-[18px] text-[#FB2E86]">
              New Arrival
            </span>
            <div className="absolute w-[91px] h-[1px] bg-[#FB4997] top-[24px] left-0"></div>
          </div>

          {/* Best Seller */}
          <span className="font-lato font-normal text-[18px] text-[#151875] hover:text-[#FB2E86]">
            Best Seller
          </span>

          {/* Featured */}
          <span className="font-lato font-normal text-[18px] text-[#151875] hover:text-[#FB2E86]">
            Featured
          </span>

          {/* Special Offer */}
          <span className="font-lato font-normal text-[18px] text-[#151875] hover:text-[#FB2E86]">
            Special Offer
          </span>
        </div>

        {/* Cards */}
        <div className="container mx-auto px-4 mb-[53px]">
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <LeatestCard  />
          </div>
        </div>
      </section>
    </>
  );
}

export default LeatestProduct;

