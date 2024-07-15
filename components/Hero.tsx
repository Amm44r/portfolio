"use client";

import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { GoArrowUpRight } from 'react-icons/go'


const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };


const Hero = () => {
  return (
    <div className='py-32'>
        <div className='text-gray-900'>
        </div>
        <div className='flex justify-center'>
            <div className='max-w-[89vw] flex flex-col items-center justify-center'>
                <a 
                href='https://github.com/Amm44r/portfolio'
                className='outline outline-1 outline-gray-400 text-gray-400 uppercase font-semibold text-[8px] text-center leading-[12px] tracking-widest rounded-full py-0.5 px-4'
                target='_blank'>
                access github repo
                </a>

                <TextGenerateEffect 
                className='text-center text-gray-900 text-[32px] max-w-[480px]'
                words='Crafting products, interactions & stories.'
                />

                <div className='flex gap-4 mt-6'>
                    <button 
                    className='text-gray-100 font-medium text-[12px] leading-[16px] bg-blue rounded-full py-2 px-4'
                    onClick={()=>scrollToSection("footer")}>
                        Get in touch
                    </button>
                    <a 
                    href='https://drive.google.com/file/d/1xXgoxgA9vDCoSK0Yj8W8uB0fCgdDpZ65/view?usp=drive_link'
                    className='flex items-center text-gray-600 font-medium text-[12px] leading-[16px] my-2 mx-4'
                    target='_blank'>
                        View resume
                        <GoArrowUpRight className='ml-1'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Hero