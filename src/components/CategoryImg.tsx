// src\components\CategoryImg.tsx
import React from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import { CalendarDays, User } from "lucide-react";

function CategoryImg() {
  return (
    <section className="w-full 2xl:w-[1920px] mx-auto mt-[129px] mb-[130px]">
      <div className="w-full mb-[125px]">
        {/* Image */}
        <div className="relative lg:w-full w-[462px] mx-auto">
          <Image src="/c5.png" alt="category" layout="fill" objectFit="" />
        </div>

        {/* Heading */}
        <div className="container mx-auto px-4 text-center mt-[96px] mb-[26px]">
          <h1 className="text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans">
            Leatest Blog
          </h1>
        </div>

        {/* Cards */}
        <div className="container mx-auto px-4 mb-[53px] mt-[80px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {/* Card 1 */}
            <Card className="w-[320px] bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-[238px] bg-[#E7E4F8]">
                <Image
                  src="/a1.png"
                  alt="Modern interior design with sofa and furniture"
                  width={370}
                  height={238}
                  className="object-cover rounded-t-md"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-6 text-sm text-primary">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#FB2E86]" />
                    <span className="font-josefin text-[#1A0B5B]">
                      SaberAli
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#FFA454]" />
                    <span className="font-josefin text-[#1A0B5B]">
                      21 August, 2020
                    </span>
                  </div>
                </div>
                <h3 className="font-josefin text-lg text-[#1A0B5B] leading-tight">
                  Top essential Trends in 2021
                </h3>
                <p className="text-[#72718F] text-base leading-[30px]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <a
                  href="#"
                  className="inline-block text-[#1A0B5B] underline hover:text-red-500 transition-colors"
                >
                  Read More
                </a>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="w-[320px] bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-[238px] bg-[#E7E4F8]">
                <Image
                  src="/a2.png"
                  alt="Modern interior design with sofa and furniture"
                  width={370}
                  height={238}
                  className="object-cover rounded-t-md"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-6 text-sm text-primary">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#FB2E86]" />
                    <span className="font-josefin text-[#1A0B5B]">
                      SaberAli
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#FFA454]" />
                    <span className="font-josefin text-[#1A0B5B]">
                      21 August, 2020
                    </span>
                  </div>
                </div>
                <h3 className="font-josefin text-lg text-[#FB2E86] leading-tight">
                  Top essential Trends in 2021
                </h3>
                <p className="text-[#72718F] text-base leading-[30px]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <a
                  href="#"
                  className="inline-block text-[#FB2E86] underline hover:text-red-500 transition-colors"
                >
                  Read More
                </a>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="w-[320px] bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-[238px] bg-[#E7E4F8]">
                <Image
                  src="/a3.png"
                  alt="Modern interior design with sofa and furniture"
                  width={370}
                  height={238}
                  className="object-cover rounded-t-md"
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-6 text-sm text-primary">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#FB2E86]" />
                    <span className="font-josefin text-[#1A0B5B]">
                      SaberAli
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#FFA454]" />
                    <span className="font-josefin text-[#1A0B5B]">
                      21 August, 2020
                    </span>
                  </div>
                </div>
                <h3 className="font-josefin text-lg text-[#1A0B5B] leading-tight">
                  Top essential Trends in 2021
                </h3>
                <p className="text-[#72718F] text-base leading-[30px]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
                <a
                  href="#"
                  className="inline-block text-[#1A0B5B] underline hover:text-red-500 transition-colors"
                >
                  Read More
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryImg;

