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

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and translate down 50px
  visible: {
    opacity: 1, 
    y: 0, 
    transition: {
      duration: 0.5, 
      ease: [0.645, 0.045, 0.355, 1], // In Out Quart easing
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="py-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-gray-900"></div>
      <div className="flex justify-center">
        <div className="max-w-[89vw] flex flex-col items-center justify-center">

          {/* First Div: Internship Status */}
          <motion.div
            className="flex items-center gap-[16px] text-gray-600 font-normal text-[10px] text-center tracking-widest rounded-full py-0.5 px-4"
            variants={itemVariants}
          >
            <div className="pulse"></div>
            Currently looking for an internship
          </motion.div>

          {/* Second Div: Static Text */}
          <motion.div
            className="text-center mt-4 font-bold leading-snug tracking-wide text-gray-900 text-[32px] max-w-[480px]"
            variants={{
              ...itemVariants,
              visible: {
                ...itemVariants.visible,
                transition: {
                  ...itemVariants.visible.transition,
                  delay: 0.3, // Delay for 2nd child
                },
              },
            }}
          >
            Crafting products, interactions & stories.
          </motion.div>

          {/* Third Div: Buttons */}
          <motion.div
            className="flex gap-4 mt-6"
            variants={{
              ...itemVariants,
              visible: {
                ...itemVariants.visible,
                transition: {
                  ...itemVariants.visible.transition,
                  delay: 0.5, // Delay for 3rd child
                },
              },
            }}
          >
            <button
              className="text-gray-100 font-medium text-[12px] leading-[16px] bg-blue rounded-full py-2 px-4"
              onClick={() => scrollToSection("footer")}
            >
              Get in touch
            </button>
            <a
              href="https://drive.google.com/file/d/1xXgoxgA9vDCoSK0Yj8W8uB0fCgdDpZ65/view?usp=drive_link"
              className="flex items-center text-gray-600 font-medium text-[12px] leading-[16px] my-2 mx-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume
              <GoArrowUpRight className="ml-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;