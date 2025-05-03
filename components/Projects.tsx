"use client";

import React from 'react'
import { motion } from 'framer-motion';

// Framer Motion Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  
  const itemVariants = (initialY: number, delay: number) => ({
    hidden: { opacity: 0, y: initialY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.645, 0.045, 0.355, 1], // In Out Quart easing
        delay: delay, // Custom delay for each child
      },
    },
  });

const Projects = () => {
  return (
    <motion.div 
    className='flex flex-col w-full justify-center px-[40px] items-center'
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    >
            <div className="max-w-[880px] w-full gap-[24px] flex flex-col justify-start">
                {/* Second Div: Static Text */}
                <motion.h1
                className="ibm-plex-mono-medium sm:tracking-[-2px] text-gray-900 sm:text-[56px] text-[40px]"
                variants={itemVariants(24, 0.3)} // y: 24, delay: 0.3
                >
                Work
                </motion.h1>

                {/* Third Div: Introductory text */}
                <motion.div
                className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]"
                variants={itemVariants(32, 0.4)} // y: 16, delay: 0
                >
                I design intuitive systems that blend function and emotion, 
                creating experiences that feel effortless. Every project is 
                an opportunity to refine how people interact with technology.
                </motion.div>
            </div>


            <div className='flex flex-col w-full items-center my-[64px] gap-[64px]'>

                <motion.div className='flex w-full' /* refera trade */
                variants={itemVariants(32, 0.8)}
                >
                    <a className='project_card sm:flex sm:flex-row flex-col-reverse w-full mx-auto'
                    href='refera-trade'
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <div className='flex flex-col w-full h-full'>
                            <div className='flex flex-col gap-[24px] w-full h-full border-b border-gray-300"'>
                                <img 
                                    src="/images/refera_logo.svg" 
                                    alt="Refera Logo" 
                                    className="w-[134px] h-[48px]" 
                                />
                                <span className='text-gray-900 ibm-plex-mono-medium text-[16px] leading-[20px]'>
                                    Building a design system
                                </span>
                                <ul className='flex flex-start gap-[12px] items-stretch flex-wrap'>
                                    <li className='pills'>B2B</li>
                                    <li className='pills'>SaaS</li>
                                    <li className='pills'>UI/UX</li>
                                    <li className='pills'>Figma</li>
                                </ul>
                            </div>
                            <div className='flex flex-col w-full flex-start text-gray-900 ibm-plex-mono-medium text-[16px] leading-[20px]'>
                                <span className='flex py-[8px]'>
                                    Startup
                                </span>
                                <div className='flex gap-[8px] text-gray-500 ibm-plex-mono-regular text-[12px] leading-[16px]'>
                                    <span>Product designer</span>
                                    •
                                    <span>2025</span>
                                </div>
                            </div>
                        </div>
                        <img 
                            className='w-full h-full object-cover'
                            src="/images/refera-trade/cover.png" 
                            alt="refera trade cover"
                        />
                    </a>
                </motion.div>

                <motion.div className='flex w-full' /* indx agency */
                variants={itemVariants(32, 0.9)}
                >
                    <a className='project_card sm:flex sm:flex-row flex-col w-full mx-auto'
                    href='indx-agency'
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <img 
                            className='w-full h-full object-cover'
                            src="/images/indx-agency/cover.png" 
                            alt="indx agency cover"
                        />
                        <div className='flex flex-col w-full h-full'>
                            <div className='flex flex-col gap-[24px] w-full h-full border-b border-gray-300 sm:pb-0 pb-[16px]'>
                                <img 
                                    src="/images/indx_logo.svg" 
                                    alt="indx agency logo" 
                                    className="w-[48px] h-[48px]" 
                                />
                                <span className='text-gray-900 ibm-plex-mono-medium text-[16px] leading-[20px]'>
                                    Building indx agency’s digital identity from the ground up
                                </span>
                                <ul className='flex flex-start gap-[12px] items-stretch flex-wrap'>
                                    <li className='pills'>Web design</li>
                                    <li className='pills'>Webflow</li>
                                    <li className='pills'>Branding</li>
                                    <li className='pills'>Figma</li>
                                    <li className='pills'>SEO</li>
                                    <li className='pills'>B2B</li>
                                </ul>
                            </div>
                            <div className='flex flex-col w-full flex-start text-gray-900 ibm-plex-mono-medium text-[16px] leading-[20px]'>
                                <span className='flex py-[8px]'>
                                    Web design agency
                                </span>
                                <div className='flex gap-[8px] text-gray-500 ibm-plex-mono-regular text-[12px] leading-[16px]'>
                                    <span>Founder</span>
                                    •
                                    <span>Designer</span>
                                    •
                                    <span>2024</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>

            </div>
    </motion.div>
  )
}

export default Projects