import React from 'react';
import ProjectData from '../utils/projectData';



const Project = () => {
  return (
    <div className='lg:px-20 md:px-16 px-4 mt-8 lg:min-h-screen md:min-h-screen min-h-full' id='work'>
      <h1 className='text-white lg:text-4xl md:text-3xl text-2xl font-bold py-4 text-center my-6'>Something I Have Built.</h1>
      <div className="projects-wrapper">
        <div className=''>
          {ProjectData.map((project, i) => {
            return (
              <div key={i} className={`flex gap-x-2 mb-20 items-center lg:flex-row md:flex-row flex-col ${i % 2 === 0 ? " lg:flex-row-reverse md:flex-row-reverse" : null}`}>
                <div className="wrap basis-full">
                  <div className=" lg:w-11/12 w-full h-[60vh] projectImg relative">
                    <img src={project.imgUrl} alt="movie" className='w-full object-cover object-top h-full ' />
                  </div>
                </div>
                <div className={`wrap basis-full relative ${i % 2 === 0 ? "lg:me-[-110px] md:me-[-110px] me-0" : "lg:ms-[-110px] md:ms-[-110px] ms-0"}`}>
                  <p className={`name text-white text-[4vh] font-bold ${i % 2 === 0 ? "text-start" : "text-end"}`}>{project.title}</p>
                  <p className={`info bg-[#112240] text-zinc-400 px-10 py-6 shadow-2xl my-3 w-full  ${i % 2 === 0 ? "text-start" : "text-end"}`}>{project.info}</p>
                  <p className={`tech text-zinc-400 lg:text-lg md:text-lg  ${i % 2 === 0 ? "text-start" : "text-end"}`}>{project.tech.toString().split()}</p>
                  <div className={`links flex gap-6  mt-4  ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div className="github w-6">
                      <a href={project.codeLink} target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" hover:text-[#64FFDA] feather feather-github text-white"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="liveLink w-6 ">
                      <a href={project.liveUrl} target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#64FFDA] feather feather-external-link text-white"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
