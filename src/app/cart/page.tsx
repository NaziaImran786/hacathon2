"use client";
import Image from "next/image";
import { Heart, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface Iproduct {
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
}

export default function ShoppingCart() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const [cartItem, setCartItem] = useState<Iproduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];

    const name = searchParam.get("name");
    const price = searchParam.get("price");
    const description = searchParam.get("description");
    const image = searchParam.get("image");

    if (name && price && description && image) {
      const isDuplicate: boolean = updatedCart.some(
        (item: Iproduct) => item.name === name
      );

      if (!isDuplicate) {
        updatedCart.push({ name, price, description, image, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItem(updatedCart);
      router.replace("/cart");
    }
  }, [searchParam, router]);

  function handleRemoveItem(index: number) {

    const removeCard = [...cartItem];
    removeCard.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(removeCard));
    setCartItem(removeCard);
  }

  function handleQuantity(index: number, e_target_value: number) {
    const copyWalaArray = [...cartItem];
    copyWalaArray[index].quantity = e_target_value;

    localStorage.setItem("cart", JSON.stringify(copyWalaArray));
    setCartItem(copyWalaArray);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="w-full mx-auto px-4 ">
      {/* Page Header */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#101750] mb-4">FAQ</h1>
          <div className="flex gap-2 text-sm">
            <Link href="/" className="text-black">
              Home
            </Link>
            <span>.</span>            
              Pages            
            <span>.</span>
            <span className="text-[#FB2E86]">CART</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mt-[99px]">
        {/* Free Delivery Banner */}
        <div className="mb-8 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Free Delivery</p>
            <p className="text-sm text-gray-600">
              Applies to orders of $ 7,000.00 or more.
            </p>
            <Link href={"/billing"}>
              <Button variant="link" className="text-sm">
                View details
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6 text-[#151875]">Cart</h1>

            {/* Cart Items */}
            <div className="space-y-6">
              {cartItem.map((item: Iproduct, index: number) => {
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-24 h-24 bg-gray-100 rounded-md">
                          <Image
                            src={item.image}
                            alt="image"
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-600">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                              <div className="mt-2 space-y-1">
                                <p className="text-sm">Size: </p>
                                <div className="flex gap-4">
                                  <p className="text-sm">Quantity:</p>
                                  <input
                                    className="bg-slate-200 rounded pl-2 text-black w-12"
                                    type="number"
                                    min={1}
                                    value={item.quantity}
                                    onChange={(e) => {
                                      handleQuantity(index, +e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <p className="text-sm">
                              $: {+item.price * item.quantity}
                            </p>
                          </div>
                          <div className="flex gap-4 mt-4">
                            <Button variant="ghost" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                handleRemoveItem(index);
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Favorites */}
            <div className="mt-12">
              <h2 className="text-xl font-medium mb-4">Favourites</h2>
              <p className="text-sm text-gray-600">
                There are no items saved to your favourites.
              </p>
            </div>

            {/* You Might Also Like */}
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">You Might Also Like</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>              
            </div>
          </div>

          {/* Summary */}
          <div>
            <Card className="mb-10">
              <CardContent className="p-6 text-[#151875]">
                <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">
                      ${" "}
                      {cartItem.reduce((total, object) => {
                        return total + +object.price * object.quantity;
                      }, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Estimated Delivery & Handling
                    </span>
                    <span className="text-sm">Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>
                      ${" "}
                      {cartItem
                        .reduce(
                          (total, item) =>
                            total + Number(item.price) * item.quantity,
                          0
                        )
                        .toFixed(2)
                        .toLocaleString()}
                    </span>
                  </div>
                  <Link href={"/billing"}>
                    <Button className="w-full bg-[#FB2E86] hover:bg-[#fb2e87db]">
                      Process Checkout
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
}

