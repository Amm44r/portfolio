import React from 'react';
import Footer from "@/components/Footer";
import { GoArrowUpRight } from 'react-icons/go'


const Hero = () => {
  return (
    <div id='hero'>
        <div className="max-w-[880px] sm:mx-auto mx-[16px] pt-[64px] gap-[80px] w-full flex flex-col justify-start">

            <div className='flex flex-col gap-[24px]'> {/* hackathons */}
                <h1 className="ibm-plex-mono-medium sm:tracking-[-2px] text-gray-900 sm:text-[56px] text-[40px]">
                    Hackathons
                </h1>

                <span className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]">
                    Coming soon...
                </span>
            </div>

            <section className='flex flex-col gap-[40px]'> {/* digital art */}
                <div className='flex flex-col gap-[24px]'> 
                    <h1 className="ibm-plex-mono-medium sm:tracking-[-2px] text-gray-900 sm:text-[56px] text-[40px]">
                        Digital art
                    </h1>
                    <span className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]">
                        A collection of character-focused digital art—just for fun, practice, and exploration.
                    </span>
                </div>
                <div className='flex flex-col items-center gap-[24px]'>
                    <div className='flex items-center justify-center gap-[24px]'>
                        <img src='/images/play/itachi.png' alt='itachi drawing'/>
                        <img src='/images/play/jinwoo.png' alt='jinwoo drawing'/>
                        <img src='/images/play/lifeguard.png' alt='lifeguard drawing'/>
                    </div>
                    <div className="flex">
                        <a
                        href="https://www.instagram.com/amk.bus/"
                        className="button-secondary !mx-0 ibm-plex-mono-medium gap-[8px]"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        check out more on instagram
                        <GoArrowUpRight className="ml-1 icon" />
                        </a>
                    </div>
                </div>
            </section>
            

            <section className='flex flex-col gap-[40px]'> {/* 3D */}
                <div className='flex flex-col gap-[24px]'> 
                    <h1 className="ibm-plex-mono-medium sm:tracking-[-2px] text-gray-900 sm:text-[56px] text-[40px]">
                        3D
                    </h1>
                    <span className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]">
                        Character models I&apos;ve built in 3D—showcasing sculpting, texturing, and posing.
                    </span>
                </div>
                <div className='flex flex-col gap-[24px]'>
                    <div className='flex items-center justify-center gap-[24px]'>
                        <img src='/images/play/3d-1.png' alt='3d sci fi character'/>
                        <img src='/images/play/3d-2.png' alt='3d trex model'/>
                    </div>
                    <div className='flex items-center justify-center gap-[24px]'>
                        <img src='/images/play/3d-3.png' alt='3d dragon model'/>
                        <img src='/images/play/3d-4.png' alt='3d marvel rivals daredevil'/>
                    </div>
                </div>
            </section>

        </div>
    <Footer />
    </div>
  );
};

export default Hero;