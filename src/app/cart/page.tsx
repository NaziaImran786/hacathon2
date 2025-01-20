"use client";
import Image from "next/image";
import { Heart, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* <Card>
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100">
                    <Image
                      src="/cart/pic2.png"
                      alt="Air Jordan"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="p-4"> */}
                {/* <h3 className="font-medium">Air Jordan 1 Mid SE Craft</h3>
                    <p className="text-sm text-gray-600">{Item.name}</p>
                    <p className="text-sm font-medium mt-2">MRP: $ 12,295.00</p> */}
                {/* </div> */}
                {/* </CardContent> */}
                {/* </Card> */}
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
            {/* <Card>
              <CardContent className="p-6 text-[#151875]">
                 <h2 className="text-xl font-semibold text-[#1D3178] mb-6">
                 Calculate Shopping
                 </h2>
                <div className="space-y-4">
                   <Input placeholder="Pakistan" />
                  <Input placeholder="Saddar Karachi" />
                  <Input placeholder="Postal Code" />
                  <Button className="w-full bg-green-600 hover:bg-green-700]/90">
                    <Link
                      href="/billing"
                       className="w-full h-full flex items-center justify-center"
                     >
                       Calculate Shipping
                    </Link>
                  </Button>
                 </div>
              </CardContent>   
          </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Minus, Plus, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// interface CartItem {
//   id: number;
//   src: string;
//   name: string;
//   color: string;
//   size: string;
//   price: number;
//   quantity: number;
//   total: number;
// }

// export default function ShoppingCarts() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   // Load cart items from localStorage
//   useEffect(() => {
//     try {
//       const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//       if (Array.isArray(storedCart)) {
//         const validCart: CartItem[] = storedCart.filter(
//           (item: CartItem) =>
//             typeof item.name === 'string' &&
//             typeof item.price === 'number' &&
//             typeof item.quantity === 'number'
//         );
//         setCartItems(validCart);
//       } else {
//         console.error('Invalid cart format in localStorage.');
//         setCartItems([]);
//       }
//     } catch (error) {
//       console.error('Error loading cart from localStorage:', error);
//       setCartItems([]);
//     }
//   }, []);

//   // Calculate subtotal
//   const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);

//   // Handle quantity increase
//   const increaseQuantity = (id: number) => {
//     const updatedItems = cartItems.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             quantity: item.quantity + 1,
//             total: (item.quantity + 1) * item.price,
//           }
//         : item
//     );
//     setCartItems(updatedItems);
//   };

//   // Handle quantity decrease
//   const decreaseQuantity = (id: number) => {
//     const updatedItems = cartItems.map((item) =>
//       item.id === id && item.quantity > 1
//         ? {
//             ...item,
//             quantity: item.quantity - 1,
//             total: (item.quantity - 1) * item.price,
//           }
//         : item
//     );
//     setCartItems(updatedItems);
//   };

//   // Handle item removal
//   const removeItem = (id: number) => {
//     const updatedItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedItems);
//     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Update localStorage
//   };

//   // Clear cart functionality
//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem('cart');
//   };

//   // Handle checkout
//   const handleCheckout = () => {
//     alert('Proceeding to checkout...');
//     localStorage.removeItem('cart');
//     setCartItems([]);
//   };

//   return (
//     <div className="min-h-screen bg-white text-[#151875]">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="grid grid-cols-5 gap-4 mb-4 text-[#1D3178] font-semibold">
//               <div className="col-span-2">Product</div>
//               <div>Price</div>
//               <div>Quantity</div>
//               <div>Total</div>
//             </div>

//             {/* Cart Items */}
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="grid grid-cols-5 gap-4 py-6 border-b"
//                 >
//                   <div className="col-span-2 flex gap-4">
//                     <Image
//                       src={item.src}
//                       alt="Product image"
//                       width={80}
//                       height={80}
//                       className="rounded-lg object-cover"
//                     />
//                     <div>
//                       <h3 className="font-medium mb-1">{item.name}</h3>
//                       <p className="text-sm text-gray-500">Color: {item.color}</p>
//                       <p className="text-sm text-gray-500">Size: {item.size}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     ${item.price.toFixed(2)}
//                   </div>
//                   <div className="flex items-center">
//                     <div className="flex items-center bg-[#F0EFF2] rounded">
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="h-8 w-8"
//                         onClick={() => decreaseQuantity(item.id)}
//                       >
//                         <Minus className="h-4 w-4" />
//                       </Button>
//                       <span className="w-8 text-center">{item.quantity}</span>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="h-8 w-8"
//                         onClick={() => increaseQuantity(item.id)}
//                       >
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                   <div className="flex items-center font-bold">
//                     ${item.total ? item.total.toFixed(2) : item.price.toFixed(2)}
//                   </div>
//                   <div className="flex items-center">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="h-8 w-8"
//                       onClick={() => removeItem(item.id)}
//                     >
//                       <span className="text-red-600 hover:text-red-800">
//                         <Trash2 className="h-4 w-4" />
//                       </span>
//                     </Button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>Your cart is empty</p>
//             )}

//             <div className="flex justify-between mt-8">
//               <Button
//                 variant="default"
//                 className="bg-[#FB2E86] hover:bg-[#FB2E86]/90"
//                 onClick={handleCheckout}
//               >
//                 Proceed To Checkout
//               </Button>
//               <Button
//                 variant="default"
//                 className="bg-[#FB2E86] hover:bg-[#FB2E86]/90"
//                 onClick={clearCart}
//               >
//                 Clear Cart
//               </Button>
//             </div>
//           </div>

//           {/* Cart Totals */}
//           <div className="space-y-8">
//             <Card>
//               <CardContent className="p-6 text-[#151875]">
//                 <h2 className="text-xl font-semibold text-[#1D3178] mb-6">
//                   Cart Totals
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between pb-4 border-b">
//                     <span>Subtotals:</span>
//                     <span>${subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between pb-4  border-b">
//                     <span>Shipping:</span>
//                     <span>${25.0}</span>
//                   </div>
//                   <div className="flex justify-between pb-4 font-bold border-b">
//                     <span>Total:</span>
//                     <span>
//                       <span>${(subtotal + 25.0).toFixed(2)}</span>
//                     </span>
//                   </div>
//                   <Button className="w-full bg-[#19D16F] hover:bg-[#19D16F]/90">
//                     <Link
//                       href="/completed"
//                       className="w-full h-full flex items-center justify-center"
//                     >
//                       Proceed To Checkout
//                     </Link>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 text-[#151875]">
//                 <h2 className="text-xl font-semibold text-[#1D3178] mb-6">
//                   Calculate Shopping
//                 </h2>
//                 <div className="space-y-4">
//                   <Input placeholder="Pakistan" />
//                   <Input placeholder="Saddar Karachi" />
//                   <Input placeholder="Postal Code" />
//                   <Button className="w-full bg-[#FB2E86] hover:bg-[#FB2E86]/90">
//                     <Link
//                       href="/shipping"
//                       className="w-full h-full flex items-center justify-center"
//                     >
//                       Calculate Shipping
//                     </Link>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src\app\cart\page.tsx
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Minus, Plus, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// interface CartItem {
//   id: number;
//   src: string;
//   name: string;
//   color: string;
//   size: string;
//   price: number;
//   quantity: number;
//   total: number;
// }

// export default function ShoppingCarts() {
//   // State for cart items
//   // const [cartItems, setCartItems] = useState([
//   //   {
//   //     id: 1,
//   //     src: "/cart/cart1.png",
//   //     name: "Ut diam consequat",
//   //     color: "silver",
//   //     size: "S",
//   //     price: 32,
//   //     quantity: 1,
//   //     total: 32,
//   //   },
//   //   {
//   //     id: 2,
//   //     src: "/cart/cart2.png",
//   //     name: "Vel faucibus posuere",
//   //     color: "Black",
//   //     size: "M",
//   //     price: 45,
//   //     quantity: 1,
//   //     total: 45,
//   //   },
//   //   {
//   //     id: 3,
//   //     src: "/cart/cart3.png",
//   //     name: "Ac vitae vestibulum",
//   //     color: "Red",
//   //     size: "L",
//   //     price: 60,
//   //     quantity: 1,
//   //     total: 60,
//   //   },
//   //   {
//   //     id: 4,
//   //     src: "/cart/cart4.png",
//   //     name: "Elit massa diam",
//   //     color: "gray",
//   //     size: "XL",
//   //     price: 35,
//   //     quantity: 1,
//   //     total: 35,
//   //   },
//   //   {
//   //     id: 5,
//   //     src: "/cart/cart5.png",
//   //     name: "Proin pharetra elementum",
//   //     color: "Blue",
//   //     size: "XXL",
//   //     price: 55,
//   //     quantity: 1,
//   //     total: 55,
//   //   },
//   // ]);

//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     try {
//       const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//       if (Array.isArray(storedCart)) {
//         const validCart: CartItem[] = storedCart.filter(
//           (item: CartItem) =>
//             typeof item.name === 'string' &&
//             typeof item.price === 'number' &&
//             typeof item.quantity === 'number'
//         );
//         setCartItems(validCart);
//       } else {
//         console.error('Invalid cart format in localStorage.');
//         setCartItems([]);
//       }
//     } catch (error) {
//       console.error('Error loading cart from localStorage:', error);
//       setCartItems([]);
//     }
//   }, []);

//   // Calculate subtotal
//   const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);

//   // Handle quantity increase
//   const increaseQuantity = (id: number) => {
//     const updatedItems = cartItems.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             quantity: item.quantity + 1,
//             total: (item.quantity + 1) * item.price,
//           }
//         : item
//     );
//     setCartItems(updatedItems);
//   };

//   // Handle quantity decrease
//   const decreaseQuantity = (id: number) => {
//     const updatedItems = cartItems.map((item) =>
//       item.id === id && item.quantity > 1
//         ? {
//             ...item,
//             quantity: item.quantity - 1,
//             total: (item.quantity - 1) * item.price,
//           }
//         : item
//     );
//     setCartItems(updatedItems);
//   };

//    // Delete item from cart
//    const deleteItem = (id: number) => {
//     const updatedItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedItems);
//     localStorage.setItem("cart", JSON.stringify(updatedItems));
//     alert("Item removed from cart!");
//   };

//   // Clear cart functionality
//   const clearCart = () => {
//     setCartItems([]);
//   };

//   // Update cart functionality (for demonstration, simply recalculates totals)
//   const updateCart = () => {
//     const updatedItems = cartItems.map((item) => ({
//       ...item,
//       total: item.quantity * item.price,
//     }));
//     setCartItems(updatedItems);
//     alert("Cart updated successfully!");
//   };

//   // Handle checkout
//   // const handleCheckout = () => {
//   //   alert('Proceeding to checkout...');
//   //   localStorage.removeItem('cart');
//   //   setCartItems([]);
//   // };

//   return (
//     <div className="min-h-screen bg-white text-[#151875]">

//       {/* Cart Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="grid grid-cols-5 gap-4 mb-4 text-[#1D3178] font-semibold">
//               <div className="col-span-2">Product</div>
//               <div>Price</div>
//               <div>Quantity</div>
//               <div>Total</div>
//             </div>

//             {/* Cart Items */}
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="grid grid-cols-5 gap-4 py-6 border-b"
//               >
//                 <div className="col-span-2 flex gap-4">
//                   <Image
//                     src={item.src}
//                     alt="Product image"
//                     width={80}
//                     height={80}
//                     className="rounded-lg object-cover"
//                   />
//                   <div>
//                     <h3 className="font-medium mb-1">{item.name}</h3>
//                     <p className="text-sm text-gray-500">Color: {item.color}</p>
//                     <p className="text-sm text-gray-500">Size: {item.size}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   ${item.price.toFixed(2)}
//                 </div>
//                 <div className="flex items-center">
//                   <div className="flex items-center bg-[#F0EFF2] rounded">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="h-8 w-8"
//                       onClick={() => decreaseQuantity(item.id)}
//                     >
//                       <Minus className="h-4 w-4" />
//                     </Button>
//                     <span className="w-8 text-center">{item.quantity}</span>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="h-8 w-8"
//                       onClick={() => increaseQuantity(item.id)}
//                     >
//                       <Plus className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>

//                 <div className="flex items-center font-bold">
//                 ${item.total ? item.total.toFixed(2) : item.price.toFixed(2)}
//                 </div>

//               </div>
//             ))}

//             <div className="flex justify-between mt-8">
//               <Button
//                 variant="default"
//                 className="bg-[#FB2E86] hover:bg-[#FB2E86]/90"
//                 onClick={updateCart}
//               >
//                 Update Cart
//               </Button>
//               <Button
//                 variant="default"
//                 className="bg-[#FB2E86] hover:bg-[#FB2E86]/90"
//                 onClick={clearCart}
//               >
//                 Clear Cart
//               </Button>

//               {/* Delete Button */}
//               <div className="flex items-center">
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => deleteItem(item.id)} // error
//                   >
//                     <Trash2 className="h-5 w-5" />
//                   </Button>
//                </div>
//             </div>
//           </div>

//           {/* Cart Totals */}
//           <div className="space-y-8">
//             <Card>
//               <CardContent className="p-6 text-[#151875]">
//                 <h2 className="text-xl font-semibold text-[#1D3178] mb-6">
//                   Cart Totals
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between pb-4 border-b">
//                     <span>Subtotals:</span>
//                     <span>${subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between pb-4  border-b">
//                     <span>Shipping:</span>
//                     <span>${25.0}</span>
//                   </div>
//                   <div className="flex justify-between pb-4 font-bold border-b">
//                     <span>Total:</span>
//                     <span>
//                       <span>${(subtotal + 25.0).toFixed(2)}</span>
//                     </span>
//                   </div>
//                   <Button className="w-full bg-[#19D16F] hover:bg-[#19D16F]/90">
//                     <Link
//                       href="/completed"
//                       className="w-full h-full flex items-center justify-center"
//                     >
//                       Proceed To Checkout
//                     </Link>
//                   </Button>

//                   {/* <Button className="w-full bg-[#19D16F] hover:bg-[#19D16F]/90">
//                     Proceed To Checkout
//                   </Button> */}
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 text-[#151875]">
//                 <h2 className="text-xl font-semibold text-[#1D3178] mb-6">
//                   Calculate Shopping
//                 </h2>
//                 <div className="space-y-4">
//                   <Input placeholder="Bangladesh" />
//                   <Input placeholder="Mirpur Dhaka - 1200" />
//                   <Input placeholder="Postal Code" />
//                   <Button className="w-full bg-[#FB2E86] hover:bg-[#FB2E86]/90">
//                   <Link
//                       href="/shipping"
//                       className="w-full h-full flex items-center justify-center"
//                     >
//                     Calculate Shipping
//                     </Link>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
