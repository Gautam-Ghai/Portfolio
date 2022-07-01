import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import { usePopperTooltip } from 'react-popper-tooltip';

function Menu() {
    const [ controlledVisible, setControlledVisible ] = React.useState(false);
    const {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible,
      } = usePopperTooltip({
        trigger: 'click',
        closeOnOutsideClick: true,
        visible: controlledVisible,
        onVisibleChange: setControlledVisible,
      });

      useEffect(() => {
        let timer1 = setTimeout(() => setControlledVisible(false), 1000)
        return () => {
            clearTimeout(timer1);
          };
      }, [controlledVisible])

      const phone = '7782018358';

  return (
    <>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-evenly'>
            <ul className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly w-full max-w-2xl ">
                <li>
                    <Link 
                        activeClass="px-4 text-iconGreen rounded-full border-l-2 border-r-2 border-iconGreen" 
                        className="text-textGreen text-base lg:text-2xl hover:border-b-2 hover:border-textGreen cursor-pointer" 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="px-4 text-iconGreen rounded-full border-l-2 border-r-2 border-iconGreen" 
                        className="text-textGreen text-base lg:text-2xl hover:border-b-2 hover:border-textGreen cursor-pointer"  
                        to="work" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="px-4 text-iconGreen rounded-full border-l-2 border-r-2 border-iconGreen" 
                        className="text-textGreen text-base lg:text-2xl hover:border-b-2 hover:border-textGreen cursor-pointer" 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                    >
                        Projects
                    </Link>
                </li>
            </ul>
            <p ref={setTriggerRef} className='w-fit lg:w-80 text-textGreen text-base lg:text-2xl cursor-pointer' onClick={() => {navigator.clipboard.writeText(phone)}}>+1-778-201-8358</p>
            <a href="mailto:gautamghai99@gmail.com" className='block lg:hidden text-base text-iconRed border-opacity-0 border-b border-iconRed hover:border-opacity-100 '>gautamghai99@gmail.com</a>
        </div>

        {visible && (
            <div
                ref={setTooltipRef}
                {...getTooltipProps({ className: 'tooltip-container' })}
                className="bg-iconGreen rounded-2xl p-2 text-white font-medium"
            >
                copied
                <div {...getArrowProps({ className: 'tooltip-arrow' })}/>
            </div>
        )}
    </>
  )
}

export default Menu