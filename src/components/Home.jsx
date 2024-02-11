import React from 'react'

const Home = () => {
    return (
        <div className='px-20 py-10 h-screen' id='home'>
            <div className='flex flex-col gap-8'>
            <p className='text-[#64FFDA] text-[1.5vw] -mb-9 pl-2'>Hi , my name is </p>
            <div className="name">
                <p className='text-[7vw] font-semibold text-zinc-300'>Abhishek Rawat</p>
                <p className='text-[4vw] font-medium text-zinc-500 -my-4'>I am a Frontend Developer</p>
            </div>
            <div className="about w-8/12 text-[1.5vw] text-zinc-600 font-medium">
                <p>I'm a Web Developer with extensive experience of Html5,Css3,Sass,Bootstrap and Javascript. My expertise is to create and Websites design, responsive design and many more..</p>
            </div>
            <div>
            <button className='border-2 rounded-md border-[#64FFDA] px-16 py-2 text-xl text-[#64FFDA]'>Hire Me</button>
            </div>
            </div>
        </div>
    )
}

export default Home
