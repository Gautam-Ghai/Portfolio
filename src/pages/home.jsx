import React from 'react'
import { motion } from "framer-motion";
import AnimatedCharacters from '../components/animation';
import NumberCount from '../components/number'

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
    <div className='bg-bgYellow diagonal' id="home">
      <div className={`absolute top-0 h-20 sm:h-32 md:40 xl:h-60 w-full bg-bgYellow content`} />
      <div className='container mx-auto content'>
        <div className='relative w-full h-fit min-h-screen'>
          <div className={`pt-20 md:pt-60 flex flex-col sm:flex-row justify-between items-start sm:items-center px-10 sm:px-0`}>
            
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
            
            <p className='text-textGreen text-base md:text-xl mt-10 sm:mt-0'>I love to create random things,<br />mostly using javascript</p>
          </div>
          <div className='hidden lg:block '>
            <div className={`pt-60 pb-20 md:pb-60  flex flex-col sm:flex-row justify-between items-start sm:items-center px-10 sm:px-0`}>
              <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
              >
                <a href="mailto:gautamghai99@gmail.com" className='text-xl font-semibold text-iconRed hover:underline'>gautamghai99@gmail.com</a>
              </motion.div>

              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
              >
                <div className='flex items-center'>
                  <NumberCount  from={0} to={13}/>
                  <p className='uppercase text-textGreen text-xl font-medium pl-2'>PROJECTS<br />COMPLETED</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className='grid place-items-center relative lg:absolute bottom-0 lg:-bottom-8 left-0 right-0 lg:h-4/5'>
            <img src="/images/user.png" className={`h-96 lg:h-4/5 w-auto lg:absolute pointer-events-none z-10`} alt="user"/>
            <img src="/images/blob.svg" className={`h-96 lg:h-4/5 absolute bottom-116 pointer-events-none`} alt="user-bg" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home