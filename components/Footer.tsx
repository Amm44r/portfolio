"use client";

import React, { useState } from 'react';
import { PiCopyLight } from "react-icons/pi";
import { IoCheckmark, IoCloseOutline } from "react-icons/io5";

const Footer = () => {
    const [copyStatus, setCopyStatus] = useState<null | 'success' | 'failure'>(null);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('ammaarkhan2021@gmail.com');
            setCopyStatus('success'); // Success
        } catch (err) {
            setCopyStatus('failure'); // Failure
            console.error('Failed to copy: ', err);
        }
        setTimeout(() => setCopyStatus(null), 3000); // Reset after 3 seconds
    };

    const getBorderColor = () => {
        if (copyStatus === 'success') return 'border-green-500'; // Green for success
        if (copyStatus === 'failure') return 'border-red-500';   // Red for failure
        return 'border-gray-400';                                // Default border color
    };

    return (
      <section 
        className='flex flex-col sm:flex-row gap-8 sm:justify-between text-[12px] py-8 sm:py-16 mx-8 sm:mx-16 border-t border-gray-200' 
        id='footer'
      >
          <div className='flex flex-col sm:flex-row gap-8 sm:gap-16'>
              <div className='flex flex-col'>
                  <span className='text-gray-400'>Ammaar Khan</span>
                  <span className='text-gray-600'>Portfolio 2024</span>
              </div>
              <span className='text-gray-400'>All rights reserved.</span>
          </div>
          <div className='flex flex-col sm:flex-row gap-8 sm:gap-16'>
              <div className='flex flex-col'>
                  <span className='text-gray-400'>Let&apos;s chat</span>
                  <span 
                    className={`inline-flex items-center text-gray-600 cursor-pointer gap-[4px] px-[8px] py-[2px] rounded-full border ${getBorderColor()} transition-all duration-300 ease-in-out`}
                    onClick={copyToClipboard}
                  >
                    {copyStatus === null ? (
                      <PiCopyLight className='w-[12px] h-[12px]' />
                    ) : copyStatus === 'success' ? (
                      <IoCheckmark className='w-[12px] h-[12px] text-green-500' />
                    ) : copyStatus === 'failure' ? (
                      <IoCloseOutline className='w-[12px] h-[12px] text-red-500' />
                    ) : null}
                    <span>ammaarkhan2021@gmail.com</span>
                  </span>
              </div>
              <div className='flex flex-col gap-2 text-gray-600'>
                  <a href='https://www.linkedin.com/in/ammaar-khan-3a274a256/' target='_blank' rel='noopener noreferrer'>Linkedin</a>
                  <a href='https://github.com/Amm44r' target='_blank' rel='noopener noreferrer'>Github</a>
                  <a href='https://www.instagram.com/ammaar___khan/' target='_blank' rel='noopener noreferrer'>Instagram</a>
              </div>
          </div>
      </section>
    );
}

export default Footer;