import React from 'react'

const Home = () => {
    return (
        <div className='lg:px-20 md:px-16 px-4 py-10 lg:h-screen md:h-screen h-full pt-28' id='home'>
            <div className='flex flex-col lg:gap-8 md:gap-8 gap-2 lg:mt-20 items-start '>
                <p className='text-[#64FFDA] lg:text-[1.5vw] md:text-[1vw] text-md lg:-mb-9 md:-mb-9 lg:pl-2 md:pl-2  '>Hi , my name is </p>
                <div className="name">
                    <p className='lg:text-[7vw] md:text-[6vw] text-2xl font-semibold text-zinc-300 lg:my-10'>Abhishek Rawat</p>
                    <p className='lg:text-[3.2vw] md:text-[2.5vw] text-md font-medium text-zinc-500 '>I am a Frontend Developer</p>
                </div>
                <div className="about lg:w-8/12 lg:text-[1.3vw] text-zinc-600 font-medium">
                    <p>As a seasoned front end developer, I bring proficiency in HTML5, CSS3, Sass, and Bootstrap to create visually stunning interfaces. With a strong foundation in JavaScript, React, Redux, and TailwindCSS, I specialize in crafting dynamic and responsive web applications that engage and delight users. Let's collaborate to bring your vision to life!"</p>
                </div>
                <div>
                    <button className='border-2 rounded-md border-[#64FFDA] lg:px-16 md:px-10 px-6 py-2 text-xl text-[#64FFDA] btnEffect'>Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Home
