//src\app\about\page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  const feacherCards = [
    {
      image: "/s1.png",
      title: "Free Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/s2.png",
      title: "100% Cash Back",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/s3.png",
      title: "Quality Product",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      image: "/s4.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#F6F5FF] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#101750] mb-4">About Us</h2>
          <div className="flex items-center space-x-2 text-sm lg:text-base">
            <span>Home</span>
            <span>.</span>
            <span>Pages</span>
            <span>.</span>
            <span className="text-[#FB2E86]">About Us</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#2B3CAB] rounded-lg transform translate-x-4 translate-y-4"></div>
            <Image
              src="/about/about.png"
              alt="About Us"
              width={600}
              height={400}
              className="relative ml-8 z-10 rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-[#151875] mb-6">
              Know About Our Ecommerce Business, History
            </h3>
            <p className="text-[#8A8FB9] mb-8 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam,
              malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan
              faucibus vitae lobortis quis bibendum quam.
            </p>
            <Button className="bg-[#FB2E86] px-8 py-3 text-lg">Contact us</Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <h3 className="text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Our Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {feacherCards.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:scale-110 transition-transform">
              <CardContent className="p-6 lg:p-8">
                <div className="mb-4 flex justify-center">
                  <Image src={feature.image} alt="Feature" width={65} height={65} />
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold text-[#151875] mb-4">{feature.title}</h4>
                <p className="text-[#8A8FB9]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Client Section */}
      <div className="bg-[#FBFBFF] py-12 lg:pt-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">Our Client Say!</h3>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-4 lg:gap-8 mb-6 lg:mb-10">
              <Image src="/about/ab1.png" alt="Client 1" width={64} height={64} />
              <Image src="/about/ab2.png" alt="Client 2" width={64} height={64} />
              <Image src="/about/ab3.png" alt="Client 3" width={64} height={64} />
            </div>
            <h4 className="text-xl lg:text-2xl font-semibold mb-2">Selina Gomez</h4>
            <p className="text-sm lg:text-base text-[#8A8FB9] mb-4">CEO At Webecy Digital</p>
            <p className="text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel
              dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
