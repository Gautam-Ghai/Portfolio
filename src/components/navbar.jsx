import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Menu from './menu'
import MyModal from './modal';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-0.5 w-5 my-1 rounded-full bg-black transition ease transform duration-300`;


  return (
    <div className="sticky top-0 z-10 w-full py-2 bg-bgYellow z-20">
        <div className='container mx-auto'>
            <div className='px-4 flex justify-between'>
                <Link 
                    className="text-textGreen text-4xl cursor-pointer" 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                >
                    <img src="/images/logo.svg" alt="logo" className='h-10'/>
                </Link>
                <div className='hidden lg:block w-full xl:w-1/2'>
                    <Menu />
                </div>

                <div className='block lg:hidden relative'>
                    <button
                        className="p-2.5 h-10 w-10 rounded justify-center items-center group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            className={`${genericHamburgerLine} ${
                            isOpen
                                ? "rotate-45 translate-y-1 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${
                            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${
                            isOpen
                                ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                    </button>
                </div>
            </div>

            <MyModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    </div>
  )
}

export default Navbar