import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import Footer from "@/components/Footer";

const agency = () => {
  return (
    <div className='flex flex-col gap-[128px] px-[16px] items-center w-full'>
      <div className='flex max-w-[1200px] w-full gap-[64px] pt-[64px] justify-between items-start'>
        <div className='flex flex-col max-w-[280px] gap-[32px]'>
          <div className='flex flex-col gap-[12px]'>
            <span className='ibm-plex-mono-regular text-[12px] text-gray-600 leading-[16px]'>Year</span>
            <span className='ibm-plex-mono-regular text-[12px] text-gray-900 leading-[16px]'>2024</span>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <span className='ibm-plex-mono-regular text-[12px] text-gray-600 leading-[16px]'>Scope of work</span>
            <ul className='flex gap-[12px]'>
              <li className='pills'>Brand identity</li>
              <li className='pills'>Website design</li>
            </ul>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <span className='ibm-plex-mono-regular text-[12px] text-gray-600 leading-[16px]'>Stack</span>
            <ul className='flex gap-[12px]'>
              <img 
                  src="/images/figma.svg" 
                  alt="Figma logo" 
                  className="w-[40px] h-[40px]" 
              />
              <img 
                src="/images/webflow.svg" 
                alt="Webflow logo" 
                className="w-[40px] h-[40px]" 
              />
            </ul>
          </div>

        </div>

        <div className='flex flex-col max-w-[880px] w-full gap-[24px] px-[32px] border-l border-gray-300'>
          <h1
              className="ibm-plex-mono-medium sm:tracking-[-2px] text-gray-900 sm:text-[56px] text-[40px]"
              // variants={itemVariants(24, 0.3)} // y: 24, delay: 0.3
              >
              Indx <br/>
              agency
          </h1>

          <div
            className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full"
          >
            A self-initiated project to build the foundation of indx - my own design studio.
            This case study walks through the process of designing and developing a bold, 
            scalable website that reflects the agency&apos;s identity, communicates its services 
            clearly, and sets the stage for future client work.
          </div>
          <div className="flex">
            <a
              href="https://indx-agency.webflow.io/"
              className="button-secondary !mx-0 ibm-plex-mono-medium gap-[8px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              view live website
              <GoArrowUpRight className="ml-1 icon" />
            </a>
          </div>
        </div>
      </div>
      <img 
        src="/images/indx-agency/indx-agency-intro.svg" 
        alt="indx agency cover" 
      />
      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* colours */}
        <div className='flex flex-col gap-[16px]'>
          <text
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Colours
          </text>
          <div
            className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]">
            A bold, high-contrast palette that balances energy with clarity - designed to guide 
            attention and support readability across all touchpoints.
          </div>
        </div>
        <div className='flex flex-col'>
          <img 
          src="/images/indx-agency/colours.svg" 
          alt="brand colours" 
          />
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* typography */}
        <div className='flex flex-col gap-[16px]'>
          <text
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Typography
          </text>
          <div
            className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]">
            A thoughtful type system that balances personality with function. 
            It ensures headlines feel distinctive while maintaining legibility 
            across all device sizes and content types.
          </div>
        </div>
        <div className='flex flex-col gap-[40px]'>
          <img 
          src="/images/indx-agency/font-1.svg" 
          alt="cal sans font" 
          className='max-w-[429px]'
          />
          <img 
          src="/images/indx-agency/font-2.svg" 
          alt="ibm plex sans font" 
          className='max-w-[429px]'
          />
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* design language */}
        <div className='flex flex-col gap-[16px]'>
          <text
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Design language
          </text>
          <div
            className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]">
            A consistent visual rhythm defined by approachable forms and subtle interaction cues. 
            Every element is crafted to feel intentional, intuitive, and cohesive across the product. 
            I love micro-interactions {":)"}
          </div>
        </div>
        <div className='flex w-full gap-[24px]'>
          <img 
          className='w-full rounded-[12px]'
          src="/images/indx-agency/design-language-button-hover.gif" 
          alt="indx agency button hover" 
          />
          <img 
          className='w-full rounded-[12px]'
          src="/images/indx-agency/design-language-faq-dropdown.gif" 
          alt="indx agency faq dropdown" 
          />
        </div>
      </div>


      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* sales funnel */}
        <div className='flex flex-col gap-[16px]'>
          <text
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            24/7 Sales funnel
          </text>
          <div
            className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]">
            Structured to guide users from discovery to action - turning 
            curiosity into conversion around the clock.
          </div>
        </div>
        <div className='flex flex-col gap-[40px]'>
          <img 
          src="/images/indx-agency/funnel.svg" 
          alt="sales funnel" 
          />
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* outcome */}
        <div className='flex flex-col gap-[16px]'>
          <text
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Outcome
          </text>
          <div
            className="ibm-plex-mono-regular flex text-gray-600 text-[18px] max-w-[640px]">
            The goal of this project was to create a bold, polished web presence to 
            kickstart indx as a design-led agency. The result is a site that reflects 
            the brand’s personality, clearly communicates its services, and is built 
            for scalability as the agency grows. <br/>
            <br/>
            The site also serves as a foundation for future work—making it easy to 
            showcase case studies, onboard new clients, and grow indx’s presence 
            across digital channels.
          </div>
        </div>
        
      </div>

      <Footer />
    </div>

    
  )
}

export default agency