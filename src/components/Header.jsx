import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Header = () => {
  const [headerStyling, setHeaderStyling] = useState(false);
  let prevScrollpos = window.pageYOffset;
  useEffect(() => {
    window.onscroll =()=>{
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          setHeaderStyling(true);
        } else {
          setHeaderStyling(false);
        }
        prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div className={`py-4  bg-[#0A192F]  ${headerStyling ? "fixed  w-full shadow-2xl z-10 activeHeader " : ""}`} >
      <div className='flex justify-between items-center px-16'>
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
            {["home", "about", "work", "contact"].map((link,index) => {
              return (
                <li key={index} className='capitalize'><a className='hover:text-[#64FFDA]' href={`#${link}`}>{`< ${link} />`}</a></li>
              )
            })}
            <li className=' px-2 py-1  rounded-md btnEffect'> Resume</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
