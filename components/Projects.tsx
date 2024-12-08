import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
        <div className='flex flex-col w-full justify-center items-center'>
            <div className='flex flex-col w-full items-center py-[64px] px-[16px] gap-[32px]'>

                <h1
                className="text-center font-semibold leading-[32px] text-gray-500 text-[24px]">
                    Here&apos;s some of my work:
                </h1>

                <a className='flex w-full'
                href='web-design-agency'
                target="_blank" 
                rel="noopener noreferrer">
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
                </a>
                

            </div>
        </div>
    </div>
  )
}

export default Projects