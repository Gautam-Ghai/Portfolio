import React from 'react'
import NumberCount from '../components/number'
import { motion } from "framer-motion";
import AnimatedCharacters from '../components/animation';

import { HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineLightBulb } from 'react-icons/hi'
import Card from '../components/card';

const About = () => {

  const placeholderText = [
    { 
      type: "heading1",
      text: "What Do I Help With?"
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
    <div className='container mx-auto' id="about">
      <div className='flex justify-center md:justify-between items-center flex-wrap-reverse px-4 py-20 md:py-60'>
        <div className='flex flex-col justify-between'>
          <Card 
            iconBackground="bg-iconGreen"
            icon={<HiOutlineDesktopComputer className='text-white text-4xl mt-3.5 ml-3.5'/>}
            heading='Web Development'
            text='11 Projects'
          />
          <Card 
          iconBackground="bg-iconYellow"
            icon={<HiOutlineDeviceMobile className='text-white text-4xl mt-3.5 ml-3.5'/>}
            heading='Mobile Friendly'
            text='9 Projects'
          />
          <Card 
            iconBackground="bg-iconRed"
            icon={<HiOutlineLightBulb className='text-white text-4xl mt-3.5 ml-3.5'/>}
            heading='SEO Optimization'
            text='2 Projects'
          />
        </div>
        <div className='max-w-3xl mb-10'>
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
          <p className='my-10 text-textGreen text-base md:text-xl leading-7 md:leading-9 tracking-wider'>
            I will help you in  finding a solution.
            I have experience in designing and developing user interfaces, testing, and debugging.
            Proven ability in optimizing web functionality that improves data retrieval and workflow efficiencies.
            <br />
            <br />
            Have a project in mind? Connect with me and we'll create something amazing.
          </p>
          <div className='flex justify-evenly'>
            <div className='flex flex-col'>
              <NumberCount  from={0} to={13}/>
              <p>Projects Completed</p>
            </div>
            <div className='flex flex-col'>
              <NumberCount  from={0} to={4}/>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 