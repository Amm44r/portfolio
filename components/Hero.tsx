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
            className="flex items-center gap-[16px] text-gray-600 font-normal text-[12px] text-center rounded-full py-0.5 px-4"
            variants={itemVariants(16, 0)} // y: 16, delay: 0
          >
            <div className="pulse"></div>
            Currently looking for an internship
          </motion.div>

          {/* Second Div: Static Text */}
          <motion.div
            className="text-center mt-4 font-normal leading-snug text-gray-900 text-[32px] max-w-[600px]"
            variants={itemVariants(24, 0.3)} // y: 24, delay: 0.3
          >
            <span className="instrument-serif-regular-italic">Ammaar Khan</span> - product (UI/UX) designer
          </motion.div>

          {/* First Div: Internship Status */}
          <motion.div
            className="flex items-center mt-4 gap-[16px] text-gray-600 font-normal text-[12px] text-center rounded-full py-0.5 px-4 max-w-[480px]"
            variants={itemVariants(32, 0.4)} // y: 16, delay: 0
          >
            I&apos;m a 2nd year University student studying a double degree in Science & IT 
            with a passion for design and all things tech
          </motion.div>

          {/* Third Div: Buttons */}
          <motion.div
            className="flex gap-4 mt-6"
            variants={itemVariants(32, 0.5)} // y: 32, delay: 0.5
          >
            <button
              className="button-primary"
              onClick={() => scrollToSection("footer")}
            >
              Get in touch
            </button>
            <a
              href="https://drive.google.com/file/d/1Q5cpQS9_I9HBkKo3plUY61iD0yHfhT3C/view?usp=sharing"
              className="button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume
              <GoArrowUpRight className="ml-1 icon" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;