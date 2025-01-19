// src\app\product\page.tsx
import FilterSection from "@/components/FilterSection";
import { client } from "@/sanity/lib/client";
import { Heart, ShoppingCart, ZoomIn, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const products = [
  {
    // img: "/sl1.png",
    // name: "Accumsan tincidunt",
    // price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    // text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl2.png",
    name: "In nulla",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl3.png",
    name: "Vel sem",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl4.png",
    name: "Portitor cum",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl5.png",
    name: "Nunc in",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl6.png",
    name: "Vitae facilisis",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
  {
    img: "/sl7.png",
    name: "Curabitur lectus",
    price: "$26.00",
    prevPrice: "$52.00",
    star: 4,
    emptyStar: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    cart: <ShoppingCart size={20} className="text-gray-500" />,
    heart: <Heart size={20} className="text-gray-500" />,
    zoom: <ZoomIn size={20} className="text-gray-500" />,
  },
];

interface Product {
  _id: string
  name: string
  imageUrl: string
  price: number
  description: string
  discountPercentage: number
  isFeaturedProduct: boolean
  stockLevel: number
  category: string
  _createdAt: string
  _updatedAt: string
}

async function Page () {

  const res: Product[] = await client.fetch(`*[_type == "product"]{
  _id,
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

  return (
    <main className="mt-10 overflow-hidden">
      <FilterSection
        textTitle={"Shop Products"}
        textNavigation={"Home . "}
        pageName={"Shop Products"}
      />
      <div className="space-y-10 mt-20">
        {res.map((item: Product, index: number) => (
          <div
            className="flex justify-start gap-y-14 gap-x-8 items-center lg:ml-24 cursor-pointer hover:scale-110 transition-all lg:flex-row flex-col"
            key={index}
          >
            <Link href={`/product/productdetail?id=${item._id}&name=${item.name}&price=${item.price}&imageUrl=${item.imageUrl}&description=${item.description}&descount=${item.discountPercentage}&stock=${item.stockLevel}&category=${item.category}`}>
            <div>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={314}
                height={218}
                className="w-auto h-auto"
              />
            </div>
            </Link>
            <div className="lg:w-[550px] w-full flex justify-center lg:block items-center flex-col">
              <div className="flex items-center gap-x-4">
                <h1 className="text-1 font-bold text-[19px] text-indigo-900">
                  {item.name}
                </h1>
                                
              </div>
              <div className="flex items-center gap-x-4">
                <p className="text-1 text-indigo-900">RS.{item.price}</p>
                <p className="text-red-500 text-1 line-through">
                  {item.discountPercentage}
                </p>
                <div className="flex gap-x-1 items-center mb-1">
                  {products.slice(0, 5).map((_, i) => (
                    <Star
                      key={`star-${index}-${i}`}
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {products.slice(0,4 ).map((_, i) => (
                    <Star
                      key={`${index}-${i}`}
                      size={12}
                      className="text-gray-400 fill-gray-400"
                    />
                  ))}
                </div>
              </div>
              <p className="lato text-gray-400 text-center lg:text-start text-lg my-4">
                {item.description}
              </p>
              <div className="flex gap-x-16 mt-8">
                <ShoppingCart size={20} className="text-gray-500" />
                <Heart size={20} className="text-gray-500" />
                <ZoomIn size={20} className="text-gray-500" />
              </div>
            </div>
          </div>
        ))}
      </div>    
    </main>
  );
};

export default Page;
