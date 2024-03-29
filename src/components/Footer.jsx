import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='pt-20'>
      <div className='lg:h-screen md:h-screen h-full lg:px-20 md:px-16 px-4 flex justify-center items-center flex-col ' >
        <p className='lg:text-6xl md:text-4xl text-3xl lg:mb-10 mb-4 text-[#64ffdb91] font-bold'>Get In Touch</p>
        <div className="wrap">
          <div className="wrap flex flex-col lg:gap-6 gap-2 text-white text-center">
            <p className='lg:text-2xl text-xl'>Let's Collaborate!</p>
            <p className='lg:w-8/12 md:w-8/12  m-auto text-zinc-400 lg:text-xl md:text-lg text-base'>Ready to bring your ideas to life? I'm here to make it happen. Whether you have a project in mind or just want to say hello, I'd love to hear from you. Drop me a message below, and let's create something awesome together!</p>
            <div className="btn-wrap py-6">
              <a className='btnEffect px-6 py-2 rounded-md'
                href="mailto:abhishekrwt77777@gmail.com"> Say Hello </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copywight lg:px-20 md:px-16 px-4 text-center pb-6 text-zinc-400">Designed & Built by Abhishek Rawat</p>
      <div className="socialWrap fixed bottom-40 left-10 linkAftr lg:block md:block hidden">
        <ul className='flex flex-col gap-10 left-[-20px] relative'>
          <li className='w-6 h-6 text-zinc-400 hover:text-[#64ffdb91]'>
            <a href="https://github.com/Abhirwt123" target='_blank' rel='noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="  feather feather-github w-full"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
          </li>
          <li className='w-6 h-6 text-zinc-400 hover:text-[#64ffdb91]'>
            <a href="https://www.linkedin.com/in/abhishekrawat2/" target='_blank' rel='noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="  feather feather-linkedin w-full"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
          <li className='w-6 h-6 text-zinc-400 hover:text-[#64ffdb91]'>
            <a href="https://www.instagram.com/meabhishek_rwt/" target='_blank' rel='noreferrer'>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather  feather-instagram w-full"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg></a>
          </li>
        </ul>
      </div>
      <div className="email bottom-[150px] right-5 linkAftr hover:text-[#64ffdb91] fixed text-zinc-400 lg:block md:block hidden">ahishekrwt77777@gmail.com</div>
    </div>

  )
}

export default Footer
