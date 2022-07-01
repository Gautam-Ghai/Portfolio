import React from 'react'
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Card = ({icon, heading, text, iconBackground}) => {

    const cardVariant = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        hidden: { y: 100, opacity: 0 },
    }

  return (
    <motion.div 
        className='border border-gray-300 px-10 sm:px-16 py-5 grid grid-cols-3 rounded-2xl w-full mb-10'
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <div className={`col-span-1 rounded-full h-16 w-16 ${iconBackground}`}>
            {icon}
        </div>
        <div className='col-span-2 pt-2'>
            <h2 className='text-textGreen font-bold text-xl'>{heading}</h2>
            <p className='text-textGreen text-base'>{text}</p>
        </div>
    </motion.div>
  )
}

Card.protoTypes = {
    icon: PropTypes.element,
    heading: PropTypes.string,
    text: PropTypes.string,
    iconBackground: PropTypes.string
}

export default Card