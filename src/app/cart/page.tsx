// src\app\cart\page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ShoppingCarts() {
  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      src: "/cart/cart1.png",
      name: "Ut diam consequat",
      color: "silver",
      size: "S",
      price: 32,
      quantity: 1,
      total: 32,
    },
    {
      id: 2,
      src: "/cart/cart2.png",
      name: "Vel faucibus posuere",
      color: "Black",
      size: "M",
      price: 45,
      quantity: 1,
      total: 45,
    },
    {
      id: 3,
      src: "/cart/cart3.png",
      name: "Ac vitae vestibulum",
      color: "Red",
      size: "L",
      price: 60,
      quantity: 1,
      total: 60,
    },
    {
      id: 4,
      src: "/cart/cart4.png",
      name: "Elit massa diam",
      color: "gray",
      size: "XL",
      price: 35,
      quantity: 1,
      total: 35,
    },
    {
      id: 5,
      src: "/cart/cart5.png",
      name: "Proin pharetra elementum",
      color: "Blue",
      size: "XXL",
      price: 55,
      quantity: 1,
      total: 55,
    },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);

  // Handle quantity increase
  const increaseQuantity = (id: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            total: (item.quantity + 1) * item.price,
          }
        : item
    );
    setCartItems(updatedItems);
  };

  // Handle quantity decrease
  const decreaseQuantity = (id: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            total: (item.quantity - 1) * item.price,
          }
        : item
    );
    setCartItems(updatedItems);
  };

  // Clear cart functionality
  const clearCart = () => {
    setCartItems([]);
  };

  // Update cart functionality (for demonstration, simply recalculates totals)
  const updateCart = () => {
    const updatedItems = cartItems.map((item) => ({
      ...item,
      total: item.quantity * item.price,
    }));
    setCartItems(updatedItems);
    alert("Cart updated successfully!");
  };

  return (
    <div className="min-h-screen bg-white text-[#151875]">    

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-5 gap-4 mb-4 text-[#1D3178] font-semibold">
              <div className="col-span-2">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 gap-4 py-6 border-b"
              >
                <div className="col-span-2 flex gap-4">
                  <Image
                    src={item.src}
                    alt="Product image"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-medium mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  ${item.price.toFixed(2)}
                </div>
                <div className="flex items-center">
                  <div className="flex items-center bg-[#F0EFF2] rounded">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center font-bold">
                  ${item.total.toFixed(2)}
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-8">
              <Button
                variant="default"
                className="bg-[#FB2E86] hover:bg-[#FB2E86]/90"
                onClick={updateCart}
              >
                Update Cart
              </Button>
              <Button
                variant="default"
                className="bg-[#FB2E86] hover:bg-[#FB2E86]/90"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 text-[#151875]">
                <h2 className="text-xl font-semibold text-[#1D3178] mb-6">
                  Cart Totals
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b">
                    <span>Subtotals:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pb-4  border-b">
                    <span>Shipping:</span>
                    <span>${25.0}</span>
                  </div>
                  <div className="flex justify-between pb-4 font-bold border-b">
                    <span>Total:</span>
                    <span>
                      <span>${(subtotal + 25.0).toFixed(2)}</span>
                    </span>
                  </div>
                  <Button className="w-full bg-[#19D16F] hover:bg-[#19D16F]/90">
                    <Link
                      href="/completed"
                      className="w-full h-full flex items-center justify-center"
                    >
                      Proceed To Checkout
                    </Link>
                  </Button>

                  {/* <Button className="w-full bg-[#19D16F] hover:bg-[#19D16F]/90">
                    Proceed To Checkout
                  </Button> */}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-[#151875]">
                <h2 className="text-xl font-semibold text-[#1D3178] mb-6">
                  Calculate Shopping
                </h2>
                <div className="space-y-4">
                  <Input placeholder="Bangladesh" />
                  <Input placeholder="Mirpur Dhaka - 1200" />
                  <Input placeholder="Postal Code" />
                  <Button className="w-full bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                  <Link
                      href="/shipping"
                      className="w-full h-full flex items-center justify-center"
                    >
                    Calculate Shipping
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

