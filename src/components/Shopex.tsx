// src\components\Shopex.tsx
import React from 'react'
import Image from 'next/image'

function Shopex() {
  return (    
    <section className='w-full 2xl:w-[1920px] mx-auto mt-[129px] mb-[130px] '>
      {/* heading */}
      <div className="container mx-auto px-4 text-center mb-[60px] ">
        <h1 className='text-[24px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans'>What Shopex Offer!</h1>
      </div>

    <div className="container mx-auto px-4 mb-[130px]">
      <div className='mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <div className='h-[270px] w-320px]  mt-[56px] hover:scale-110'>
            <div className='w-[65px] h-[65px] mx-[102px]'>
            <Image src="/s2.png" alt="card" width={65} height={65}></Image>
            </div>            
            <div className='mx-[27px] mt-[27px]'>
            <Image src="/sb5.png" alt="card" width={217} height={127}></Image>
            </div>
        </div>

        <div className='h-[270px] w-320px] mt-[56px] hover:scale-110'>
            <div className='w-[65px] h-[65px] mx-[102px] '>
            <Image src="/s3.png" alt="card" width={65} height={65}></Image>
            </div>            
            <div className='mx-[27px] mt-[27px]'>
            <Image src="/sb5.png" alt="card" width={217} height={127}></Image>
            </div>
        </div>

        <div className='h-[270px] w-320px]  mt-[56px] hover:scale-110'>
            <div className='w-[65px] h-[65px] mx-[102px]   '>
            <Image src="/s4.png" alt="card" width={65} height={65}></Image>
            </div>            
            <div className='mx-[27px] mt-[27px]'>
            <Image src="/sb5.png" alt="card" width={217} height={127}></Image>
            </div>
        </div>

        <div className='h-[270px] w-320px]  mt-[56px] hover:scale-110'>
            <div className='w-[65px] h-[65px] mx-[102px]   '>
            <Image src="/s1.png" alt="card" width={65} height={65}></Image>
            </div>            
            <div className='mx-[27px] mt-[27px]'>
            <Image src="/sb5.png" alt="card" width={217} height={127}></Image>
            </div>
        </div> 

      </div>
      </div>

        {/* Relative container for the hero image */}
      <div className=" min-w-[200px] lg:w-full min-h-[300px] lg:h-[579px] bg-[#F1F0FF] mx-auto">
     
      <div className="min-w-[200px] lg:w-[1050px] min-h-[300px] lg:h-[550px] mx-auto my-[15px]">
        {/* Background promotional image */}
        <Image 
          src="/unique.png" 
          alt="unique" 
          width={1050}
          height={550}
          objectFit='contain'
        />
     </div>
    </div>
      
    

    </section>
  )
}

export default Shopex
