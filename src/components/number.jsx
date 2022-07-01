import React, { useRef, useEffect }  from 'react'
import { animate } from "framer-motion";
import PropTypes from 'prop-types';
import { useInView } from "react-intersection-observer";

const NumberCount = ({ from, to }) => {
    const test = useRef();
    const [ref, inView] = useInView();
    

  useEffect(() => {
    if(inView){
        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
              test.current.textContent = value.toFixed(0) + '+';
            }
          });
          return () => controls.stop();
    }
  }, [from, to, inView]);

  return (
    <span ref={ref}>
        <p ref={test} className="text-5xl md:text-7xl font-bold text-textGreen"/>
    </span> 
  )
}

NumberCount.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number
}

export default NumberCount;