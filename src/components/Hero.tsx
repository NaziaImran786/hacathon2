// src\components\Hero.tsx
import React from 'react';
import Slide from './heroslide/slide';

function Hero() {
  return (
    <div className="w-full">
      {/* Relative container for the hero image */}
      <div className="relative w-full 2xl:w-[1920px] mx-auto min-h-auto  lg:h-[700px]">
        {/* Background promotional image */}
        <Slide/>
        {/* <Image 
          src="/promotional.png" 
          alt="hero" 
          layout='fill' 
          objectFit=''
        /> */}
     </div>
    </div>
  );
}

export default Hero;
