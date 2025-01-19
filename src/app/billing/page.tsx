//src\app\billing\page.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";


export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-[15px] lg:px-[40px]  mx-auto h-[286px] bg-[#f7f6fd] ">
        {/* Banner content can be added here */}

        <div className="w-[314px] pl-6  pt-[106px]">
          <h1 className="text-[36px] leading-[42px] font-['Josefin_Sans'] text-[#101750] text-center mb-2">
            Hekto Demo
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-20 py-16">
        <h1 className="text-2xl lg:text-4xl font-semibold text-[#101750] mb-6">
          Billing Information
        </h1>
        <h5 className="text-lg font-semibold text-[#101750] mb-6">
          Cart/ Information/ Shipping/ Payment
        </h5>
        <div className="grid grid-cols-1  ">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#eeedfc] p-8 rounded-md">
              <div className="mb-12">
                <h2 className="text-lg font-semibold text-[#1D3178] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email or mobile phone number</Label>
                    <Input id="email" className="mt-2 bg-slate-100" />
                  </div>
                  <div className="flex items-start gap-2">
                    <Label htmlFor="updates" className="text-sm text-gray-500">
                      Keep me up to date on news and exclusive offers
                    </Label>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#1D3178] mb-6">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First name (optional)</Label>
                    <Input id="firstName" className="mt-2 bg-slate-100" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" className="mt-2 bg-slate-100" />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" className="mt-2 bg-slate-100" />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="apartment">
                      Apartment, suite, etc. (optional)
                    </Label>
                    <Input id="apartment" className="mt-2 bg-slate-100" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" className="mt-2 bg-slate-100" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      defaultValue="Bangladesh"
                      className="mt-2 bg-slate-100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" className="mt-2 bg-slate-100" />
                  </div>
                </div>

                <Button className="mt-8 bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                  <Link
                    href="/completed"
                    className="w-full h-full flex items-center justify-center"
                  >
                    Continue Shipping
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          </div>          
      </main>
    </div>
  );
}
