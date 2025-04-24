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

const Play = () => {
    return (
        <motion.div
          className="flex flex-col py-[128px] items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
            <div className="max-w-[880px] px-[40px] w-full flex flex-col justify-start">
              <div className='flex flex-col gap-[24px]'>
                {/* Second Div: Static Text */}
                <motion.h1
                  className="ibm-plex-mono-medium sm:tracking-[-2px] text-gray-900 sm:text-[56px] text-[40px]"
                  variants={itemVariants(24, 0.3)} // y: 24, delay: 0.3
                  >
                  Play
                </motion.h1>
      
                {/* Third Div: Introductory text */}
                <motion.div
                  className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]"
                  variants={itemVariants(32, 0.4)} // y: 16, delay: 0
                >
                  Exploring design beyond client work — reimagining interfaces, 
                  prototyping ideas, and pushing storytelling through visuals. 
                  Also my other hobbies {":)"}
                </motion.div>
              </div>
              
    
              {/* Fourth Div: Buttons */}
              <motion.div
                className="flex gap-[16px] py-[32px]"
                variants={itemVariants(32, 0.5)} // y: 32, delay: 0.5
              >
                <a className="button-primary ibm-plex-mono-medium"
                    href='play'
                    target="_blank" 
                    rel="noopener noreferrer">
                  explore
                </a>
              </motion.div>
            </div>
        </motion.div>
      );
    };

export default Play