// src/app/product/[productdetail]/page.tsx



import { Star, Facebook, Twitter, Instagram, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import PostCreator from '@/components/comments'

export default async function ProductDetails({ searchParams }: {searchParams: Promise<{imageUrl: string ,  category: string , name: string, _id: number, price: number, description: string, discountPercentage: number, stokeLevel: number }>}) {

  const { imageUrl, category, _id, name,  price, description, discountPercentage, stokeLevel } = await searchParams

    return (
    <div className="h-auto mb-[-140px] bg-white">
      {/* Header Section */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#101750] mb-4">Product Details</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-black">Home</Link>
            <span>.</span>
            Pages
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
                src={imageUrl}
                alt="Product image"
                layout='fill'
                className="object-cover rounded-lg"
              />
            </div>           
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#0D134E]">{name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFC416] text-[#FFC416]" />
                ))}
              </div>
              <span className="text-[#151875]">(22)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-[#151875]">${price}</span>
              <span className="text-xl text-[#FB2E86] line-through">{discountPercentage}%</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0D134E]">Stock: {stokeLevel}</h3>
              <p className="text-[#A9ACC6]">
               {description}
              </p>
            </div>
            <div className="flex gap-4">
            <Link href={`/cart?name=${name}&price=${price}&image=${imageUrl}&description=${description}`}>
                <Button className="h-12 bg-[#FB2E86] hover:bg-[#fb2e87db] px-8" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add To Cart
                </Button>
              </Link>           
             
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#151875]">{category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#151875]">Tags:</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#151875]">Share:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start border-b">
              <TabsTrigger value="description" className="text-xl">Description</TabsTrigger>
              <TabsTrigger value="additional" className="text-xl">Additional Info</TabsTrigger>
              <TabsTrigger value="reviews" className="text-xl">Reviews</TabsTrigger>
              <TabsTrigger value="video" className="text-xl">Video</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-8">
              <h3 className="text-xl font-semibold text-[#151875] mb-4">Varius tempor.</h3>
              <p className="text-[#A9ACC6] leading-relaxed">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
              </p>
            </TabsContent>
            <TabsContent value="additional" className="mt-8">
              Additional information content
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              {/* comments */}
            <div className='container mx-auto px-2 lg:px-12 py-12'>
               <PostCreator blog_id={_id}/>
            </div>

            </TabsContent>
            <TabsContent value="video" className="mt-8">
              Video content
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

