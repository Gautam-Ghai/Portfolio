import React from 'react'
import Timeline from '../components/timeline'
import { motion } from "framer-motion";
import AnimatedCharacters from '../components/animation';

function Work() {

  const placeholderText = [
    { 
      type: "heading1",
      text: "My Work Experience"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.010
      },
    }
  };

  return (
    <div className='bg-bgYellow diagonal'> 
      <div className='container mx-auto content py-10 md:py-40' id="work">
        <div className='h-auto px-10 pt-20 pb-10' >
          <div className='flex flex-col justify-center items-center'>
            <motion.div
                initial="hidden"
                variants={container}
                whileInView="visible"
                viewport={{ once: true }}
              >
                {
                  placeholderText.map((item, index) => {
                    return <AnimatedCharacters {...item} key={index} />
                  })
                }
            </motion.div>
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work