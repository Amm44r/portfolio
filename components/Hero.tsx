"use client";

import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

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

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col py-[128px] items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id='hero'
    >
        <div className="max-w-[880px] px-[40px] w-full flex flex-col justify-start">

          {/* First Div: Internship Status */}
          <motion.div
            className="flex ibm-plex-mono-regular items-center w-full gap-[16px] text-gray-600  text-[18px] py-[32px]"
            variants={itemVariants(16, 0)} // y: 16, delay: 0
          >
            <div className="pulse"></div>
            currently in my penultimate year of studies
          </motion.div>

          {/* Second Div: Static Text */}
          <div className='flex flex-col gap-[24px]'>
          <motion.h1
            className="ibm-plex-mono-medium sm:tracking-[-2px] text-gray-900 sm:text-[56px] text-[40px]"
            variants={itemVariants(24, 0.3)} // y: 24, delay: 0.3
            >
            Hi <br/>
            i&apos;m ammaar.
          </motion.h1>

          {/* Third Div: Introductory text */}
          <motion.div
            className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]"
            variants={itemVariants(32, 0.4)} // y: 16, delay: 0
          >
            I&apos;m a product designer working on the design system at 
            Refera Trade. My passion is to create emotional experiences 
            at the intersection of art, design and productivity.
          </motion.div>
          </div>
          

          {/* Fourth Div: Buttons */}
          <motion.div
            className="flex gap-[16px] py-[32px]"
            variants={itemVariants(32, 0.5)} // y: 32, delay: 0.5
          >
            <button
              className="button-primary ibm-plex-mono-medium"
              onClick={() => scrollToSection("footer")}
            >
              say hi
            </button>
            <a
              href="https://drive.google.com/file/d/1pKorKAciuj5un9wNOxRm4n4gzrveVCx3/view?usp=sharing"
              className="button-secondary ibm-plex-mono-medium gap-[8px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
              <GoArrowUpRight className="ml-1 icon" />
            </a>
          </motion.div>
        </div>
    </motion.section>
  );
};

export default Hero;