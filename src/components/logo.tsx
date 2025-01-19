// src\components\logo.tsx
import Image from "next/image"

const logos = [
  {
    src: "/placeholder.svg?height=40&width=120",
    alt: "Fashion Live",
    width: 120,
    height: 40
  },
  {
    src: "/placeholder.svg?height=40&width=120",
    alt: "Hand Crafted",
    width: 120,
    height: 40
  },
  {
    src: "/placeholder.svg?height=40&width=120",
    alt: "Mestonix",
    width: 120,
    height: 40
  },
  {
    src: "/placeholder.svg?height=40&width=120",
    alt: "Sunshine",
    width: 120,
    height: 40
  },
  {
    src: "/placeholder.svg?height=40&width=120",
    alt: "Pure",
    width: 120,
    height: 40
  }
]

export default function LogoBanner() {
  return (
    <div className="w-full max-w-[904px] h-[93px] mx-auto px-4">
      <div className="w-full h-full flex items-center justify-between">
        {logos.map((logo) => (
          <div 
            key={logo.alt}
            className="relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

