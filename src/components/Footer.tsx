// src\components\Footer.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#EEEFFB] mt-[130px]">
      <div className="container mx-auto px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand and newsletter */}
          <div className="space-y-6">
            <h2 className="font-['Josefin_Sans'] text-4xl">Hekto</h2>
            <div className="flex max-w-sm space-x-2">
              <Input 
                type="email" 
                placeholder="Enter Email Address"
                className="bg-white/45"
              />
              <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                Sign Up
              </Button>
            </div>
            <div className="space-y-2 text-[#8A8FB9]">
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-['Josefin_Sans'] text-2xl">Categories</h3>
            <ul className="space-y-3 text-[#8A8FB9]">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="font-['Josefin_Sans'] text-2xl">Customer Care</h3>
            <ul className="space-y-3 text-[#8A8FB9]">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div className="space-y-4">
            <h3 className="font-['Josefin_Sans'] text-2xl">Pages</h3>
            <ul className="space-y-3 text-[#8A8FB9]">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#E7E4F8] px-12 py-4">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0">
          <p className="text-[#9DA0AE]">©Webecy - All Rights Reserved</p>
          <div className="flex space-x-4 pr-20">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-[#151875] text-white hover:bg-[#151875]/90"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-[#151875] text-white hover:bg-[#151875]/90"
            >
              <Instagram className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-[#151875] text-white hover:bg-[#151875]/90"
            >
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

