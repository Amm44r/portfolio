import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'


const agency = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full h-screen'>
      <span className='text-gray-400 uppercase font-semibold text-[12px] leading-[12px] tracking-widest'>
        In progress
      </span>

      <a 
      href='https://indx-agency.webflow.io/'
      className='flex items-center text-gray-600 font-medium text-[12px] leading-[16px] my-2 mx-4'
      target='_blank'>
          Live view
          <GoArrowUpRight className='ml-1'/>
      </a>
    </div>
  )
}

export default agency