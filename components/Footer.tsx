import React from 'react'

const Footer = () => {
  return (
    <section 
    className='flex flex-col sm:flex-row gap-8 sm:justify-between text-[12px] py-8 sm:py-16 mx-8 sm:mx-16 border-t border-gray-200' 
    id='footer'>
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-16'>
            <div className='flex flex-col'>
                <span className='text-gray-400'>Ammaar Khan</span>
                <span className='text-gray-600'>Portfolio 2024</span>
            </div>
            <span className='text-gray-400'>All rights reserved.</span>
        </div>
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-16'>
            <div className='flex flex-col'>
                <span className='text-gray-400'>Let's chat</span>
                <span className='text-gray-600'>ammaarkhan2021@gmail.com</span>
            </div>
            <div className='flex flex-col gap-2 text-gray-600'>
                <a href='https://www.linkedin.com/in/ammaar-khan-3a274a256/' target='_blank'>Linkedin</a>
                <a href='https://github.com/Amm44r' target='_blank'>Github</a>
                <a href='https://www.instagram.com/ammaar___khan/' target='_blank'>Instagram</a>
            </div>
        </div>
    </section>
  )
}

export default Footer