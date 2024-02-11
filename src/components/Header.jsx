import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Header = () => {
  const [headerStyling, setHeaderStyling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderStyling(true);
      } else {
        setHeaderStyling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`py-4 px-16 bg-[#0A192F]  ${headerStyling ? "fixed top-0 w-full  shadow-2xl z-10 activeHeader " : ""}`} >
<div className='flex justify-between items-center w-11/12'>
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
      <div className='links'>
        <ul className='flex text-gray-300 gap-10 font-semibold items-center'>
          <li className=''><a href="#home">{'< Home />'}</a></li>
          <li className=''><a href="#about">{'< About />'}</a></li>
          <li className=''><a href="#work">{'< Work />'}</a></li>
          <li className=''><a href="#contact">{'< Contact />'}</a></li>
          <li className='text-[#64FFDA] px-2 py-1 border-2 border-[#64FFDA] rounded-md'> Resume</li>
        </ul>
      </div>
</div>
    </div>
  );
}

export default Header;
