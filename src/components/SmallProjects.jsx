import React from 'react'
import SmallProjectsData from '../utils/smallProjectData'

const SmallProjects = () => {
  return (
    <div className='lg:px-20 md:px-16 px-4 lg:min-h-screen md:min-h-screen min-h-full'>
      <p className='text-center text-4xl font-bold text-zinc-200 py-6'> My Other Projects</p>
      <div className="card-warp grid grid-cols-12 gap-4">
        {SmallProjectsData.map((project, index) => {
          return (<div key={index} className="card lg:col-span-4 md:col-span-6 col-span-12 bg-[#112240] p-6">
            <div className="links flex gap-4 justify-end items-center ">
              <div className="github w-6">
                <a href={project.CodeLink} target='_blank' rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" hover:text-[#64FFDA] feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                </a>
              </div>
              <div className="liveLink w-6 ">
                <a href={project.liveLink} target='_blank' rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#64FFDA] feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
              </div>
            </div>
            <p className="head pb-3 text-2xl text-zinc-500 font-bold">{project.title}</p>
            <p className='text-zinc-500 font-semibold'>{project.info}</p>
            <div className="flex gap-6 py-2 text-zinc-600 font-semibold mt-3">{project.techs.toString()}</div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default SmallProjects
