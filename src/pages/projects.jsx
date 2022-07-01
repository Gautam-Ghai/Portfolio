import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import AnimatedCharacters from '../components/animation';

import 'swiper/css';

const Projects = () => {

    const placeholderText = [
        { 
          type: "heading1",
          text: "My Latest Projects"
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
    <div className='container mx-auto' id="projects">
        <div className='h-auto pt-20 pb-40'>
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
            <p className='px-4 text-textGreen mt-10 mb-40 text-xl'>Easy solutions to complex problems</p>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={40}
                centeredSlides
            >
                <SwiperSlide className='max-w-md rounded-2xl relative cursor-grab' >
                    <img src="/images/weather.png" alt="project-1" className='h-full w-auto object-cover rounded-2xl pointer-events-none project-image'/>
                    <a href="https://gautamghai-weatherapp.netlify.app" target='_blank' rel="noreferrer" className='absolute top-20 left-8 text-white text-lg hover:underline'>https://gautamghai-weatherapp.netlify.app</a>
                </SwiperSlide>
                <SwiperSlide className='max-w-md rounded-2xl relative cursor-grab' >
                    <img src="/images/dashboard.png" alt="project-1" className='h-full w-auto object-cover rounded-2xl pointer-events-none project-image'/>
                    <a href="https://responsivedashboard.netlify.app" target='_blank' rel="noreferrer" className='absolute top-20 left-8 text-white text-lg hover:underline'>https://responsivedashboard.netlify.app</a>
                </SwiperSlide>
                <SwiperSlide className='max-w-md rounded-2xl relative cursor-grab' >
                    <img src="/images/scrwld.png" alt="project-1" className='h-full w-auto object-cover rounded-2xl pointer-events-none project-image'/>
                    <a href="https://scrwld.com" target='_blank' rel="noreferrer" className='absolute top-20 left-8 text-white text-lg hover:underline'>https://scrwld.com</a>
                </SwiperSlide>
                <SwiperSlide className='max-w-md rounded-2xl relative cursor-grab' >
                    <img src="/images/weather.png" alt="project-1" className='h-full w-auto object-cover rounded-2xl pointer-events-none project-image'/>
                    <a href="https://gautamghai-weatherapp.netlify.app" target='_blank' rel="noreferrer" className='absolute top-20 left-8 text-white text-lg hover:underline'>https://gautamghai-weatherapp.netlify.app</a>
                </SwiperSlide>
                <SwiperSlide className='max-w-md rounded-2xl relative cursor-grab' >
                    <img src="/images/dashboard.png" alt="project-1" className='h-full w-auto object-cover rounded-2xl pointer-events-none project-image'/>
                    <a href="https://responsivedashboard.netlify.app" target='_blank' rel="noreferrer" className='absolute top-20 left-8 text-white text-lg hover:underline'>https://responsivedashboard.netlify.app</a>
                </SwiperSlide>
                <SwiperSlide className='max-w-md rounded-2xl relative cursor-grab' >
                    <img src="/images/scrwld.png" alt="project-1" className='h-full w-auto object-cover rounded-2xl pointer-events-none project-image'/>
                    <a href="https://scrwld.com" target='_blank' rel="noreferrer" className='absolute top-20 left-8 text-white text-lg hover:underline'>https://scrwld.com</a>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Projects