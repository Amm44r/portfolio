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
            <span className='ibm-plex-mono-regular text-[12px] text-gray-900 leading-[16px]'>2025</span>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <span className='ibm-plex-mono-regular text-[12px] text-gray-600 leading-[16px]'>Scope of work</span>
            <ul className='flex gap-[12px]'>
              <li className='pills'>Design system</li>
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
                src="/images/clickup.svg" 
                alt="Clickup logo" 
                className="w-[40px] h-[40px]" 
              />
              <img 
                src="/images/slack.svg" 
                alt="Slack logo" 
                className="w-[40px] h-[40px]" 
              />
              <img 
                src="/images/github.svg" 
                alt="Github logo" 
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
              Refera <br/>
              trade
          </h1>

          <div className='flex flex-col gap-[16px]'>
            <span
              className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
              Team
            </span>
            <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
              Scrum team consisted of 3 software engineers, 1 designer, and 1 product manager. 
              Design team consisted of 2 designers, where I led the Design Systems project as 
              the designer assigned to the scrum team.
            </p>
          </div>

          <div className='flex flex-col gap-[16px]'>
            <span
              className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
              Role
            </span>
            <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
              As the lead designer for this project, I was responsible for the creation of the 
              Refera Trade Design System and also to collaborate closely with engineers in order 
              to help build a component library.
            </p>
          </div>

        </div>
      </div>
      <img 
        src="/images/refera-trade/refera-trade-intro.svg" 
        alt="indx agency cover" 
      />
      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* problem statement */}
        <div className='flex flex-col gap-[16px]'>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Problem statement
          </span>
          <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
            Inconsistent UX and misalignment across the team made it harder to collaborate and 
            slowed down decision-making. A big part of this came from missing documentation and 
            the build-up of design and tech debt over time.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* objective & goals */}
        <div className='flex flex-col gap-[16px]'>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Objective & Goals
          </span>
          <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
            We set out to build a scalable design system that could grow with the team. The goal was 
            to bring components, styles, and naming into one place to make things easier to use and maintain.
            <br/>
            <br/>
            A shared system meant clearer communication, faster work, and better alignment between design 
            and engineering — reducing guesswork and keeping the product consistent.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* design approach */}
        <div className='flex flex-col gap-[16px]'>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Design approach
          </span>
          <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
            Since we were starting from scratch, we kept our process lean and focused. We used Tailwind&apos;s 
            colour tokens to speed things up and didn&apos;t worry too much about getting every tiny detail 
            perfect early on.<br/>
            <br/>
            Design and frontend development happened side by side, so we worked closely with engineers — 
            building and updating components as we went. Our goal was to create reusable pieces that 
            could work across different parts of the product, not just for one screen.<br/>
            <br/>
            As each component was finalised, we added it to our Figma library so the team had a clear, 
            shared source to work from. One example were the cards, which we designed to be flexible, 
            consistent, and easy to drop in wherever it was needed.<br/>
            <br/>
            This process helped us build a solid foundation for the design system — one that could grow 
            with the product and support faster collaboration going forward.
          </p>
        </div>
        <div className='flex w-full'>
          <img 
          className='w-full rounded-[12px]'
          src="/images/refera-trade/design-approach.png" 
          alt="refera trade lean methodology" 
          />
        </div>
      </div>


      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* brand guidelines */}
        <div className='flex flex-col gap-[16px]'>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Brand guidelines
          </span>
          <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
            As we built the design system, we knew it had to cover more than just components — 
            it also needed brand guidelines. We worked closely with Marketing to align on tone 
            of voice, colours, logos, and visual styles, making sure everything felt consistent 
            across the product and beyond.<br/>
            <br/>
            Since the system was designed for the whole company, not just designers and engineers, 
            cross-team collaboration was key.
          </p>
        </div>
        <div className='flex flex-col gap-[40px]'>
          <img 
          src="/images/refera-trade/brand-guidelines-1.png" 
          alt="brand guidelines colours" 
          />
        </div>
        <div className='flex flex-col gap-[40px]'>
          <img 
          src="/images/refera-trade/brand-guidelines-2.png" 
          alt="brand guidelines typography" 
          />
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* ideation */}
        <div className='flex flex-col gap-[16px]'>
        <div className="flex w-[880px] p-6 justify-center items-center gap-2 rounded-xl border border-gray-300 ibm-plex-mono-regular-italic">
          For the purpose of presenting a summary of this project, only the &apos;Card&apos; 
          component will be explored in this section of the case study.
        </div>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Ideation
          </span>
          <div className="ibm-plex-mono-regular flex flex-col text-gray-600 text-[18px] w-full">
            <p>
            One of the key challenges we tackled was redesigning the &apos;Card&apos; component, particularly 
            the &apos;Recommended by&apos; feature that highlights which of the user&apos;s mutuals have endorsed a 
            tutor or service provider.
            </p>
            <br/>
            <span>We explored several directions, including:</span>
            <ul className="list-disc pl-6">
              <li>A ranking system</li>
              <li>A stacked layout of profile icons</li>
              <li>Hover-based reveals</li>
              <li>Copy-first approaches (“Recommended by: Name + 2 others”)</li>
            </ul>
            </div>
        </div>
        <div className='flex flex-col'>
          <img 
          src="/images/refera-trade/ideation-1.png" 
          alt="ideation" 
          />
        </div>
        <div className="ibm-plex-mono-regular flex flex-col text-gray-600 text-[18px] w-full">
          <p>
            While this feature adds valuable social proof, we found it difficult to surface 
            this information without overwhelming the card. Each card already had to showcase 
            the tutor&apos;s key details (like name, job title, description, and rating), and adding 
            mutual profiles risked visual clutter.
          </p><br/>
          <br/>
          <p>Ultimately, we combined two key solutions:</p>
          <ul className="list-disc pl-6">
            <li>
              Limited the visible mutuals to 3 profile images + “+x more”, keeping the card clean
              and scannable.</li>
            <li>
              Displayed the names of the first 3 mutuals on hover, giving users lightweight context
              without crowding the design.</li>
          </ul>
        </div>
        <div className='flex flex-col items-center'>
          <img 
          className='max-w-[680px]'
          src="/images/refera-trade/ideation-2.png" 
          alt="ideation" 
          />
        </div>
        <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
          To add depth, we also made the mutuals section clickable, revealing a detailed view of 
          all endorsers — allowing users to explore further if they wanted more context and trust signals.
        </p>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* final component */}
        <div className='flex flex-col gap-[16px]'>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Final component
          </span>
          <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
            This approach let us keep the interface clean while still leveraging the power 
            of social proof and familiarity, essential for a platform built on trust and 
            recommendations.
          </p>
        </div>
        <div className='flex flex-col'>
          <img 
          src="/images/refera-trade/card-prototype.gif" 
          alt="card prototype" 
          />
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* figma library */}
        <div className='flex flex-col gap-[16px]'>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Figma library
          </span>
          <p className="ibm-plex-mono-regular flex text-gray-600 text-[18px] w-full">
            We aligned design and development with a comprehensive Figma component library, 
            our central reference point. Every UI element, like the &apos;Tags&apos; shown below, was 
            a reusable component handed off directly to development. This 1:1 system ensured 
            accurate implementation and faster build times.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img 
          className='max-w-[446px]'
          src="/images/refera-trade/tag-component.png" 
          alt="card prototype" 
          />
        </div>
        <div className='flex flex-col w-full'>
          <img 
          className='rounded-[12px]'
          src="/images/refera-trade/figma-library.gif" 
          alt="card prototype" 
          />
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* outcome */}
        <div className='flex flex-col gap-[16px]'>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Outcome
          </span>
          <div className="ibm-plex-mono-regular flex flex-col text-gray-600 text-[18px] w-full">
            <p>
            Before starting this project, we defined success by the following:
            </p>
            <ul className="list-disc pl-6">
              <li>Designers actively using the design system.</li>
              <li>Engineers actively using the design system.</li>
              <li>Reduced time for designers to make design changes, updates, and handoffs.</li>
              <li>Consistent interface implemented on the new frontend.</li>
              <li>A 1:1 match between code and design components.</li>
            </ul>
            <br/>
            Despite resource limitations preventing quantitative measurement, 
            these initial success criteria were met. Recognising that a scaling 
            design system requires more tangible metrics, we acknowledged the 
            future need for quantitative tracking.
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-[40px] max-w-[880px] w-full'> {/* reflection */}
        <div className='flex flex-col gap-[16px]'>
          <span
            className="ibm-plex-mono-medium text-orange text-[18px] leading-[24px]">
            Reflection
          </span>
          <div className="ibm-plex-mono-regular flex flex-col text-gray-600 text-[18px] w-full">
          <span className='ibm-plex-mono-bold'>What do you think was done well?</span>
          <p>
          One of the things I think was done well in this project was building a scalable 
          and consistent Figma component library that mapped cleanly to development. 
          By prioritising structure, naming conventions, and reusability early on, we were 
          able to move fast without creating design debt. The close alignment between design 
          and code made handoff smoother and reduced friction across teams.
          </p>
          <br/>
          <span className='ibm-plex-mono-bold'>What could have been improved?</span>
          <p>
          That said, there are a few areas I&apos;d improve next time. Accessibility wasn&apos;t something 
          I focused on as much as I should have, especially when it came to contrast, keyboard 
          interactions, and component states. This is something I&apos;ll be building into my workflow 
          from the beginning moving forward.<br/>
          <br/>
          Another challenge was the lack of a shared development environment like Storybook. 
          Since we went straight from Figma to live implementation, I had to wait until components 
          were fully built to identify and address any issues, which dragged out the feedback loop 
          and slowed down progress. Using a tool like Storybook next time would allow for quicker 
          iterations and reduce friction between design and development.
          </p>
          <br/>
          <span className='ibm-plex-mono-bold'>What would I do differently if I were to approach the same problem again?</span>
          <p>
          If I were to approach this problem again, I&apos;d bring in accessibility considerations earlier, 
          stress-test components in real UI sooner, and set up better feedback systems, whether that&apos;s 
          through documentation, dev previews, or a more collaborative build process.
          </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>

    
  )
}

export default agency