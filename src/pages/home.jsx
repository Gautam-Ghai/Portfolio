import React from 'react'
import { motion } from "framer-motion";
import { isMobile } from 'react-device-detect';
import AnimatedCharacters from '../components/animation';

function Home() {

  const placeholderText = [
    { 
      type: "heading1",
      text: "Hey There,"
    },
    {
      type: "heading1",
      text: "I'm Gautam"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <div className='bg-bgYellow' id="home">
      <div className='container mx-auto'>
        <div className='relative w-full min-h-screen h-auto'>
          <div className={`${isMobile ? 'pt-10' : 'pt-20 md:pt-60'} flex justify-start sm:justify-between flex-wrap items-center px-10 sm:px-0`}>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
            >
              {
                placeholderText.map((item, index) => {
                  return <AnimatedCharacters {...item} key={index} />
                })
              }
            </motion.div>
            
            <p className='text-textGreen text-lg md:text-xl mt-10 sm:mt-0'>I love to create random things,<br />mostly using javascript</p>
          </div>
          <img src="/images/user.svg" className={`${isMobile ? 'h-1/2' : 'h-2/3'} absolute bottom-0 right-0 left-0 mx-auto pointer-events-none z-20`} alt="user" />
          <img src="/images/blob.svg" className={`${isMobile ? 'h-1/2' : 'h-2/3'} absolute bottom-0 right-0 left-0 mx-auto pointer-events-none`} alt="user" />
          <motion.div 
            className={`${isMobile ? 'hidden' : 'hidden lg:block'} absolute left-0 bottom-1/3`}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
          >
            <a href="mailto:gautamghai99@gmail.com" className='text-xl font-semibold text-iconRed hover:underline'>gautamghai99@gmail.com</a>
          </motion.div>

          <motion.div 
            className={`${isMobile ? 'hidden' : 'hidden lg:block'} absolute right-0 bottom-1/3`}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
          >
            <div className='flex items-center'>
              <p className='text-7xl font-semibold'>1+</p>
              <p className='uppercase text-textGreen text-xl font-medium pl-2'>years<br />experience</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
    
  )
}

export default Home