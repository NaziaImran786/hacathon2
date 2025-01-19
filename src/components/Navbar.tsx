// src\components\Navbar.tsx
"use client";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDown, HeartIcon, ShoppingCartIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  return (
    <>
      {/* Nav Bar */}       
      <div className="w-full mx-auto container h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1900px] h-full flex justify-between items-center ">
          {/* Left Section: Logo and Search Bar */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <h1 className="text-4xl font-bold">Hekto</h1>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="hidden sm:flex items-center gap-x-8">
            <ul className="flex gap-x-8 items-center">
              <li>
                <Link
                  className="hover:text-[#FB2E86] transition-colors"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  className="hover:text-[#FB2E86]  flex justify-center items-center transition-colors"
                  onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)} // Toggle the Pages menu
                >
                  Pages
                  <ChevronDown className="ml-1 h-4 w-4 text-[#FB2E86]" />
                </button>
                {isPagesDropdownOpen && (
                  <ul className="absolute top-full mt-2 z-30 bg-white shadow-md rounded-md text-black text-sm">
                    <li className="px-4 py-2 hover:bg-[#FB2E86]">
                      <Link href="/cart">Cart</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#FB2E86]">
                      <Link href="/billing">Billing Details</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#FB2E86]">
                      <Link href="/completed">Order Completed</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#FB2E86]">
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#FB2E86]">
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#FB2E86]">
                      <Link href="/login">My Account</Link>
                    </li>
                    <li className="px-4 py-2 hover:[#FB2E86]">
                      <Link href="/faq">FAQ</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  className="hover:text-[#FB2E86] transition-colors"
                  href="/product"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#FB2E86] transition-colors"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#FB2E86] transition-colors"
                  href="/shopgrid"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#FB2E86] transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Icons */}
          <div className="hidden sm:flex items-center gap-x-6">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>           
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center px-4 py-2 border-t">
          {/* Mobile Pages Dropdown */}
          <button
            className="hover:text-[#FB2E86] transition-colors"
            onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
          >
            Pages
          </button>
          {isPagesDropdownOpen && (
            <ul className="w-full text-center bg-white shadow-md rounded-md text-black text-sm">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/cart">Cart</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/billing">Billing Details</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/completed">Order Completed</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/about">About Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/login">My Account</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          )}

          {/* Mobile Navigation Links */}
          <ul className="w-full text-center">
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 hover:text-[#FB2E86]"
                href="/product"
              >
                Products
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 hover:text-[#FB2E86]"
                href="/shopgrid"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:text-[#FB2E86]" href="/login">
                My Account
              </Link>
            </li>
          </ul>

          {/* Mobile Search Bar */}
          <div className="flex items-center border rounded-md overflow-hidden bg-gray-100 px-4 py-2 mx-4 mt-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 text-sm outline-none bg-transparent"
            />
            <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Cart and Wishlist */}
          <div className="flex justify-around px-4 py-2 border-t">
            <Link
              href="/cart"
              className="flex items-center gap-1 text-sm hover:text-[#FB2E86]"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm hover:text-[#FB2E86]"
            >
              <HeartIcon className="w-5 h-5" />
              <span>Wishlist</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default  Navbar;

