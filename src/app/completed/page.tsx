// src\app\completed\page.tsx
import Link from 'next/link'
import { Check} from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function OrderCompleted() {
  return (
    <div className="min-h-screen bg-white">
        {/* Page Header */}
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#101750] mb-4">Order Completed</h1>
          <div className="flex gap-2 text-sm">
            <Link href="/" className="text-black">Home</Link>
            <span>.</span>
            <Link href="/pages" className="text-black">Pages</Link>
            <span>.</span>
            <span className="text-[#FB2E86]">Order Completed</span>
          </div>
        </div>
      </div>

      {/* Order Confirmation */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-24 h-24 mx-auto bg-[#F6F7FA] rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-[#FF1788]" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#101750] mb-6">
            Your Order Is Completed!
          </h2>
          <p className="text-[#8D92A7] text-lg mb-8 leading-relaxed">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. 
            You will receive an email confirmation when your order is completed.
          </p>
          <Button 
            className="bg-[#FF1788] hover:bg-[#FF1788]/90 text-white px-8 py-6 text-lg"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  )
}

