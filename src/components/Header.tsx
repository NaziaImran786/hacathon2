// src\components\Header.tsx
"use client"

import { Mail, Phone, ShoppingCart,  } from 'lucide-react'
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

export default function Header() {
  return (
    <header className="w-full bg-[#7E33E0] text-white">
      <div className="container w-[95%] 2xl:w-[1920px] mx-auto px-4">
        <div className="flex h-11 items-center justify-between text-sm">
          {/* Left side - Contact Info */}
          <div className="hidden space-x-6 sm:flex">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="font-semibold">mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(12345)67890</span>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex gap-1 lg:gap-6">
            <Select defaultValue="english">
              <SelectTrigger className="w-[84px] lg:w-24 bg-transparent border-0 text-white">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="urdu">Urdu</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="usd">
              <SelectTrigger className="w-[76px] lg:w-24 bg-transparent border-0 text-white">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="pkr">PKR</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
              </SelectContent>
            </Select>
            <Link href="/login" className='py-2'><button className="text-s">Login</button></Link>
            <Link href="/whishlist" className='py-2'><button className="text-sm">Wishlist</button></Link>
            <Link href="/cart" className='py-2'><button className="text-sm">
              <ShoppingCart className="h-4 w-4" />
            </button></Link>
          </div>         
        </div>
      </div>
    </header>
  )
}

