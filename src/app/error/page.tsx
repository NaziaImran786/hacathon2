// src\app\error\page.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <>
    <div className=' w-full '>
       <div className="bg-[#F6F5FF] w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#101750] mb-4">Error</h2>
          <div className="flex items-center space-x-2 text-sm lg:text-base">
            <Link href="/"><span>Home</span></Link>
            <span>.</span>
            <span>Pages</span>
            <span>.</span>
            <span className="text-[#FB2E86]">Error</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Link href="/"><Image src="/error.png" alt="blog" width={913} height={677}></Image></Link>
      </div>
    </div>
    </>
  )
}

export default page
