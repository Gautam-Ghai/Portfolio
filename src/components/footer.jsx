import React from 'react'

import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa'


function Footer() {
  return (
    <div className='bg-bgYellow absolute bottom-0 w-full h-20 sm:h-14 py-4 '>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='cols-span-1 flex flex-wrap pl-4 sm:pl-auto'>
            <p className='text-textGreen text-lg font-medium mr-3'>Built with: </p>
            <a href="https://reactjs.org/" target='_blank' rel="noreferrer" className='px-1'>
              <img src='/images/react.svg' alt='React' className='h-6'/>
            </a>
            <a href="https://tailwindcss.com/" target='_blank' rel="noreferrer" className='px-1'>
              <img src='/images/tailwind.svg' alt='TailwindCSS' className='h-6'/>
            </a>
            <a href="https://www.framer.com/motion/" target='_blank' rel="noreferrer" className='px-1'>
              <img src='/images/framer.png' alt='Framer-Motion' className='h-6'/>
            </a>
            <a href="https://swiperjs.com/" target='_blank' rel="noreferrer" className='px-1'>
              <img src='/images/swiper.png' alt='Swiper' className='h-6'/>
            </a>
          </div>
          <div className='cols-span-1 flex flex-wrap'>
            <p className='text-textGreen text-lg font-medium mr-3'>Connect with me at: </p>
            <a href="https://github.com/Gautam-Ghai" target='_blank' rel="noreferrer" className='px-1'>
              <FaGithub className='text-2xl text-github'/>
            </a>
            <a href="https://linkedin.com/in/gautam-ghai" target='_blank' rel="noreferrer" className='px-1'>
              <FaLinkedin className='text-2xl text-linkedin'/>
            </a>
            <a href="https://stackoverflow.com/users/14798264/gautam-ghai" target='_blank' rel="noreferrer" className='px-1'>
              <FaStackOverflow className='text-2xl text-stackOverflow'/>
            </a>
            <a href="https://twitter.com/_gautamghai" target='_blank' rel="noreferrer" className='px-1'>
              <FaTwitter className='text-2xl text-twitter'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer