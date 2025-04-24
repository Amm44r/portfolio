"use client";

import React, { useState } from 'react';
import { BiHomeAlt } from "react-icons/bi";
import { Toaster, toast } from 'react-hot-toast';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('ammaarkhan2021@gmail.com');
            toast.success("Copied to clipboard!", { duration: 2000 });
        } catch (err) {
            toast.error("Failed to copy!");
            console.error('Failed to copy: ', err);
        }
    };

    return (
      <section 
        className='flex flex-col sm:flex-row gap-8 sm:justify-between text-[12px] max-w-[880px] w-full justify-self-center py-8 sm:py-16 mx-8 sm:mx-16 border-t border-gray-200' 
        id='footer'
      >
        {/* Toast Notifications */}
        <Toaster position="top-center" reverseOrder={false} />

        <div className='flex flex-col sm:flex-row sm:gap-[4px] gap-[16px] items-center'>
              <button onClick={() => scrollToSection("hero")}><BiHomeAlt className="w-[24px] h-[24px] m-[12px] icon" /></button>
              <span className='flex items-center text-[24px]'>·</span>
              <span 
                className="inline-flex h-[24px] items-center ibm-plex-mono-medium text-[18px] leading-[24px] text-gray-900 cursor-pointer gap-[8px] px-[16px] py-[8px] transition-all duration-300 ease-in-out"
                onClick={copyToClipboard}
              >
                <span>ammaarkhan2021@gmail.com</span>
              </span>
              <span className='flex items-center text-[24px]'>·</span>
              <a 
              className="button-link ibm-plex-mono-medium"
              href="https://www.linkedin.com/in/ammaar-khan-3a274a256/" target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
          </div>
          <div className='flex flex-col sm:flex-row gap-8 sm:gap-16'>
              <div className='flex flex-col items-center justify-center'>
                  <span className='text-gray-600 ibm-plex-mono-medium text-[18px]'>portfolio 2025</span>
              </div>
          </div>
      </section>
    );
}

export default Footer;