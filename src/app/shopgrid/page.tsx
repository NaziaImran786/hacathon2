// src/app/shopgrid/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid2X2, Heart, List, Search, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Productgrid() {
  return (
    <section className="min-h-screen">
      <div className="bg-[#F6F5FF] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#101750] mb-4">Shop Grid Default</h2>
          <div className="flex items-center space-x-2 text-sm lg:text-base">
            <Link href="/"><span>Home</span></Link>
            <span>.</span>
            <span>Pages</span>
            <span>.</span>
            <span className="text-[#FB2E86]">Shop Grid Default</span>
          </div>
        </div>
      </div>

      <div className="container w-[95%] 2xl:w-[1920px] mx-auto mt-[124px] mb-[144]">
        <div className="w-full max-w-[1171px] mx-auto py-4 flex items-center justify-between ">
          <div className="space-y-2">
            <h1 className="text-[22px] leading-[26px] text-[#151875] font-['Josefin_Sans']">
              Ecommerce Acceories & Fashion item
            </h1>
            <p className="text-xs text-[#8A8FB9]">
              About 9,620 results (0.62 seconds)
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-end gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-[#3F509E]">Per Page:</span>
              <Select defaultValue="10">
                <SelectTrigger className="w-[100px] border-[#E7E6EF]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#3F509E]">Sort By:</span>
              <Select defaultValue="best-match">
                <SelectTrigger className="w-[120px] border-[#E7E6EF]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best-match">Best Match</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#3F509E]">View:</span>
              <ToggleGroup type="single" defaultValue="grid">
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <Grid2X2 className="h-4 w-4 text-[#151875]" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <List className="h-4 w-4 text-[#151875]" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-[125px]  ">
        <div className="mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((comment, index) => (
          <Link href={`/shopgrid/${comment}`} key={index}>
          <Card className="group relative w-[250px]">
            {/* Product Image Container */}
            <div className="relative aspect-[270/280] bg-[#F6F7FB] mb-5">
              <Image
                src={`/g${comment + 0}.png`}
                alt="Modern chair"
                fill
                className="object-contain p-8"
              />
              {/* Hover Actions */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                </button>
                <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-[#151875] mb-2">
                Vel elit euismod
              </h3>

              {/* Color Options */}
              <div className="flex justify-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
                <div className="w-3 h-3 rounded-full bg-[#EC42A2]" />
                <div className="w-3 h-3 rounded-full bg-[#8568FF]" />
              </div>

              {/* Prices */}
              <div className="flex justify-center gap-3 text-sm">
                <span className="text-[#151875]">$26.00</span>
                <span className="text-[#FB2E86] line-through">$42.00</span>
              </div>
            </div>
          </Card>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}
