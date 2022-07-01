import React from 'react'
import { motion } from "framer-motion";

const TimeLineRow = ({ company, time, role, children, link }) => {

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 },
    }

    return(
        <motion.div 
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-2 divide-x-2 divide-dashed divide-iconGreen'
        >            
            <div className='hidden md:block text-right mr-20'>
                <a href={link} target='_blank' rel="noreferrer">
                    <h3 className='text-textGreen font-semibold text-3xl hover:underline'>{company}</h3>
                </a>
                <p className='text-textGreen'>{time}</p>
            </div>

            <div className='relative'>
                <span className="flex absolute -left-5 justify-center items-center w-10 h-10 rounded-full border-2 border-dashed bg-bgYellow border-iconGreen">
                    <span className='h-5 w-5 rounded-full bg-iconGreen'></span>
                </span>
                <div className='ml-10 md:ml-20'>
                    <h3 className="text-3xl font-semibold text-textGreen mb-5">{role}</h3>
                    {children}
                </div>
                <div className='block md:hidden ml-10 md:ml-20 mb-20'>
                    <h3 className='text-textGreen font-semibold text-3xl'>{company}</h3>
                    <p className='text-textGreen'>{time}</p>
                </div>
            </div>
        </motion.div>
    )
};

const Timeline = () => {

  return (
    <div className='my-20'>
        <TimeLineRow
            company="AByte Inc."
            link="https://abyte.ca"
            role="Junior Web Developer"
            time="Oct 2021 - June 2022"
            about="sebfuoiywesgbfuybuyiwebfcuy"
        >
            <p className="md:mb-10 mb-5 text-lg leading-9 tracking-wider font-normal text-textGreen">
                Developing front-end applications from UI/UX designs<br />
                Responsible for updating websites with latest technology trends<br />
                Work effectively in a team to provide quality products to clients<br />
            </p>
        </TimeLineRow>
        <TimeLineRow
            company="Tybo Contracting Ltd."
            link="https://tybo.ca"
            role="IT Support / Web Application Developer"
            time="June 2021 - Sep 2021"
        >
            <p className="md:mb-10 mb-5 text-lg leading-9 tracking-wider font-normal text-textGreen">
                Designed and Developed web application using NodeJS and MySql<br />
                Implemented the web app on Linux server using Nginx and PM2<br />
                Provided IT support services, troubleshooting, and asset management<br />
            </p>
        </TimeLineRow>
        <TimeLineRow
            company="SASI - UFV"
            link="https://www.ufv.ca/sasi/"
            role="Wordpress Developer"
            time="November 2020 - December 2020"
        >
            <p className="md:mb-10 mb-5 text-lg leading-9 tracking-wider font-normal text-textGreen">
                Redesigned the organization’s website to improve the styling and UI/UX of the site<br />
                Collaborated with other developers to maintain and update the website as per requirements
            </p>
        </TimeLineRow>
        <TimeLineRow
            company="College of Arts - UFV"
            link="https://www.ufv.ca/arts/"
            role="Social Media and Website Assistant "
            time="Oct 2021 - June 2022"
        >
            <p className="md:mb-10 mb-5 text-lg leading-9 tracking-wider font-normal text-textGreen">
                Worked with the Department of Arts on various projects<br />
                Customized website using Terminal Four<br />
                Updated website blog with Wordpress
            </p>
        </TimeLineRow>
    </div>
  )
}

export default Timeline