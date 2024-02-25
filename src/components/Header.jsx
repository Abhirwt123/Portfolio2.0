import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import MobileMenu from './MobileMenu';

const Header = () => {
  const [headerStyling, setHeaderStyling] = useState(false);
  const [mobMenu, setMobMenu] = useState(false);
  let prevScrollpos = window.pageYOffset;
  useEffect(() => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHeaderStyling(true);
      } else {
        setHeaderStyling(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);
  const handelMobileMenu = () => {
    setMobMenu(!mobMenu)
  }

  return (
    <div className={`py-4 bg-[#0A192F]  ${headerStyling ? "fixed  w-full shadow-2xl z-10 activeHeader " : ""}`} >
      <div className='flex justify-between items-center lg:px-16 md:px-8 px-4'>
        <motion.div
          className="logo"
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <span className='text-[#0A192F] text-3xl font-bold'>A</span>
        </motion.div>
        <div className='links lg:block md:block hidden'>
          <ul className='flex text-gray-300 gap-10 font-semibold items-center'>
            {["home", "about", "work", "contact"].map((link, index) => {
              return (
                <li key={index} className='capitalize'><a className='hover:text-[#64FFDA]' href={`#${link}`}>{`< ${link} />`}</a></li>
              )
            })}
            <li className=' px-2 py-1  rounded-md btnEffect'> Resume</li>
          </ul>
        </div>
        <button className="menuBtn w-10 h-10 rounded-full bg-[#64FFDA] lg:hidden md:hidden block" onClick={handelMobileMenu}>
        <i className={`fa-solid font-bold text-lg ${mobMenu?"fa-xmark":"fa-bars"}`}></i>
        
        </button>
          <MobileMenu mobMenu={mobMenu} setMobMenu={setMobMenu} />
      </div>
    </div>
  );
}

export default Header;
