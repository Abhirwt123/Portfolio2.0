import React from 'react';
import myImage from '../images/myImage.png'

const About = () => {
  return (
    <div className='px-20 grid grid-cols-12 items-center h-screen' id='about'>
      <div className='myInfo col-span-6'>
        <div className="title text-[3vw] text-zinc-400 font-semibold py-4">
          {'<About Me/>'}
        </div>
        <p className='text-zinc-500 mb-2'>Hello, my name is Abhishek Rawat, and I am in the final year of my graduation from Uttrakhand Open University. I completed my 12th since 2020 from G.I.C. Dugadda (P.C.M.) and also completed my 10th from J.P.I.C. Kotdwara.</p>
        <p className='text-zinc-500'>Other than that, I have great knowledge in UI development and responsive design. Currently, I am looking for work as a frontend developer.</p>
        <div className="tech-wrap my-4">
          <p className='text-zinc-300 py-3 text-lg'>Here are a few technologies I’ve been working with recently:</p>
          <div className="flex gap-20 text-zinc-500 ">
            <ul className='flex flex-col gap-1'>
              {["Html", "Css", "JavaScript", "React", "Git"].map((link,index) => {
                return <li key={index}><i className="fa-solid fa-play text-[10px] text-[#64FFDA] pr-2"></i>{link}</li>
              })}
            </ul>
            <ul className='flex flex-col gap-1'>
              {["Bootstrap", "Tailwind Css", "Sass", "Github", "Vs Code"].map((link,index) => {
                return <li key={index}><i className="fa-solid fa-play text-[10px] text-[#64FFDA] pr-2"></i>{link}</li>
              })}
            </ul>
          </div>
        </div>

      </div>
      <div className="col-span-1"></div>
      <div className='col-span-5'>
        <div className="img-wrap w-80 ">
          <img src={myImage} alt="Myself" className='w-full h-full rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default About
