// src/app/faq/page.tsx
'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
 
      {/* Page Header */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#101750] mb-4">FAQ</h1>
          <div className="flex gap-2 text-sm">
            <Link href="/" className="text-black">Home</Link>
            <span>.</span>
            <Link href="/pages" className="text-black">Pages</Link>
            <span>.</span>
            <span className="text-[#FB2E86]">FAQ</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#1D3178] mb-8">General Information</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-4">
                <AccordionTrigger className="text-[#1D3178] font-semibold">
                  Eu dictumst cum at sed euismood condimentum?
                </AccordionTrigger>
                <AccordionContent className="text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg p-4">
                <AccordionTrigger className="text-[#1D3178] font-semibold">
                  Magna bibendum est fermentum eros.
                </AccordionTrigger>
                <AccordionContent className="text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg p-4">
                <AccordionTrigger className="text-[#1D3178] font-semibold">
                  Odio muskana hak eris conseekin sceleton?
                </AccordionTrigger>
                <AccordionContent className="text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg p-4">
                <AccordionTrigger className="text-[#1D3178] font-semibold">
                  Elit id blandit sabara boi velit gua mara?
                </AccordionTrigger>
                <AccordionContent className="text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Ask a Question Form */}
          <div className="bg-[#F8F8FD] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#1D3178] mb-8 text-center">Ask a Question</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-[#8990B1] mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <Input required className="bg-white border-[#CDCEDC]" />
              </div>
              <div>
                <label className="block text-[#8990B1] mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input required className="bg-white border-[#CDCEDC]" />
              </div>
              <div>
                <label className="block text-[#8990B1] mb-2">
                  Type Your Message <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  required 
                  className="bg-white border-[#CDCEDC] min-h-[197px]" 
                />
              </div>
              <Button 
                type="submit"
                className="bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white w-[156px]"
              >
                Send Mail
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#EEEFFB] pt-20 pb-4 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-4xl font-bold mb-6">Hekto</h3>
              <div className="flex gap-2 mb-4">
                <Input 
                  type="email" 
                  placeholder="Enter Email Address"
                  className="bg-white/45"
                />
                <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                  Sign Up
                </Button>
              </div>
              <div className="text-[#8A8FB9]">
                <p className="mb-2">Contact Info</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Catagories</h4>
              <ul className="space-y-4 text-[#8A8FB9]">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Customer Care</h4>
              <ul className="space-y-4 text-[#8A8FB9]">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Pages</h4>
              <ul className="space-y-4 text-[#8A8FB9]">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#E7E4F8] py-4 -mx-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <p className="text-[#9DA0AE]">©Webecy - All Rights Reserved</p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center">
                  <FacebookIcon className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center">
                  <TwitterIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

