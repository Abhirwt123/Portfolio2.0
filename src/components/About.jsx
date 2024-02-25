import React from 'react';
import myImage3 from '../images/Videoshot_20240211_171509.jpg';

const About = () => {
  return (
    <div className='lg:px-20 md:px-16 px-4 grid grid-cols-12 items-center justify-center lg:h-screen md:h-screen h-full' id='about'>
      <div className='myInfo lg:col-span-6 col-span-12'>
        <div className="title lg:text-[3vw] md:text-[3vw] text-3xl text-zinc-400 font-semibold py-4 lg:text-start text-center">
          {'<About Me/>'}
        </div>
        <p className='text-zinc-500 mb-2 lg:text-base md:text-base text-sm'>A 22-year-old front end developer with experience in web development. Completed a comprehensive 1-year course in front end development and currently employed as a UI Developer at Vega6 Webware Technology Company. Eager and open to new opportunities in the field of web development.
        </p>
        <div className="tech-wrap my-4">
          <p className='text-zinc-300 py-3 lg:text-lg text-base'>Here are a few technologies I’ve been working with recently:</p>
          <div className="flex gap-20 text-zinc-500 ">
            <ul className='flex flex-col gap-1'>
              {["Html", "Css", "JavaScript", "React", "Redux toolKit"].map((link, index) => {
                return <li key={index}><i className="fa-solid fa-play text-[10px] text-[#64FFDA] pr-2"></i>{link}</li>
              })}
            </ul>
            <ul className='flex flex-col gap-1'>
              {["Bootstrap", "Tailwind Css", "Sass", "Github", "Git"].map((link, index) => {
                return <li key={index}><i className="fa-solid fa-play text-[10px] text-[#64FFDA] pr-2"></i>{link}</li>
              })}
            </ul>
          </div>
        </div>

      </div>
      <div className="lg:col-span-1 lg:block hidden"></div>
      <div className='lg:col-span-5 col-span-12'>
        <div className="img-wrap lg:w-[60vh] w-11/12 h-[60vh]  m-auto">
          <img src={myImage3} alt="Myself" className='w-full h-full rounded-lg object-cover ' />
        </div>
      </div>
    </div>
  )
}

export default About
