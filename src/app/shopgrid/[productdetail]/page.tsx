'use client';

import { useEffect, useState } from 'react';
import { Star, } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetails({ params }: { params: Promise<{ productdetail: number }> }) {
  const [paramImage, setParamImage] = useState(0);

  useEffect(() => {
    const unwrapParams = async () => {
      const { productdetail } = await params; // Await the Promise
      setParamImage(productdetail);
    };
    unwrapParams();
  }, [params]);

  const product = {
    id: paramImage,
    name: 'Playwood arm chair',
    price: 32,
    image: `/g${paramImage}.png`,
    quantity: 1,
  };

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Item added to cart!');
  };

  return (
    <div className="h-auto mb-[-140px] bg-white">
      {/* Header */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#101750] mb-4">Product Details</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-black">
              Home
            </Link>
            <span>.</span>
            {/* <Link href="/pages" className="text-black"> */}
              Pages
            {/* </Link> */}
            <span>.</span>
            <span className="text-[#FB2E86]">Product Details</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] relative">
              <Image
                src={product.image}
                alt="Product image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#0D134E]">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFC416] text-[#FFC416]" />
                ))}
              </div>
              <span className="text-[#151875]">(22)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-[#151875]">$32.00</span>
              <span className="text-xl text-[#FB2E86] line-through">$32.00</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0D134E]">Color</h3>
              <p className="text-[#A9ACC6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor
                purus, et volutpat sit.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/cart">
              <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90" onClick={addToCart}>
                Add To Cart
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


