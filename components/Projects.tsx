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
    className='flex flex-col w-full justify-center items-center'
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    >
        <div className='flex flex-col w-full justify-center items-center'>
            <div className='flex flex-col w-full items-center py-[64px] px-[16px] gap-[32px]'>

                <motion.h2
                className="text-center font-semibold leading-[32px] text-gray-500 text-[24px]"
                variants={itemVariants(32, 0.7)}
                >
                    Here&apos;s some of my work:
                </motion.h2>

                <motion.a className='flex w-full' /* refera trade */
                href='refera-trade'
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants(32, 0.8)} 
                >
                    <div className='project_card w-full mx-auto'>
                        <span className='text-gray-500 text-[16px] font-semibold leading-[20px]'>
                            2024</span>

                            <img 
                                src="/images/refera_logo.svg" 
                                alt="Refera Logo" 
                                className="w-[48px] h-[48px]" 
                            />

                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='flex flex-col items-start'>
                                <span className='text-gray-900 text-[16px] font-semibold leading-[20px]'>ReferaTrade</span>
                                <span className='text-gray-500 text-[16px] font-semibold leading-[20px]'>Designing a design system</span>
                            </div>
                            <img 
                                src="/images/add.svg" 
                                alt="Add Icon" 
                                className="w-[16px] h-[16px]" 
                            />
                        </div>

                    </div>
                </motion.a>

                <motion.a className='flex w-full' /* hrms */
                href='hrms-case-study'
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants(32, 0.9)} 
                >
                    <div className='project_card w-full mx-auto'>
                        <span className='text-gray-500 text-[16px] font-semibold leading-[20px]'>
                            2024</span>

                            <img 
                                src="/images/hrms_logo.svg" 
                                alt="HRMS Logo" 
                                className="w-[48px] h-[48px]" 
                            />

                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='flex flex-col items-start'>
                                <span className='text-gray-900 text-[16px] font-semibold leading-[20px]'>Personal Project</span>
                                <span className='text-gray-500 text-[16px] font-semibold leading-[20px]'>Micro interactions study</span>
                            </div>
                            <img 
                                src="/images/add.svg" 
                                alt="Add Icon" 
                                className="w-[16px] h-[16px]" 
                            />
                        </div>

                    </div>
                </motion.a>

                <motion.a className='flex w-full' /* indx agency */
                href='web-design-agency'
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants(32, 1)} 
                >
                    <div className='project_card w-full mx-auto'>
                        <span className='text-gray-500 text-[16px] font-semibold leading-[20px]'>
                            2023</span>

                            <img 
                                src="/images/indx_logo.svg" 
                                alt="Indx Agency Logo" 
                                className="w-[48px] h-[48px]" 
                            />

                        <div className='flex flex-col items-start gap-[16px]'>
                            <div className='flex flex-col items-start'>
                                <span className='text-gray-900 text-[16px] font-semibold leading-[20px]'>Indx Agency</span>
                                <span className='text-gray-500 text-[16px] font-semibold leading-[20px]'>Landing page for a web design agency</span>
                            </div>
                            <img 
                                src="/images/add.svg" 
                                alt="Add Icon" 
                                className="w-[16px] h-[16px]" 
                            />
                        </div>

                    </div>
                </motion.a>
                

            </div>
        </div>
    </motion.div>
  )
}

export default Projects