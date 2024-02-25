import React from 'react'

const MobileMenu = ({ mobMenu ,setMobMenu }) => {
  const handelMenuClose=()=>{
    setMobMenu(false)
  }
  return (
    <div div className={`fixed top-0 left-0  w-7/12 py-10 shadow-2xl bg-[#0A192F] z-50 h-screen duration-300 ${mobMenu ? "transform-x-0" : ' -translate-x-full'}`}>
      <ul className='flex text-gray-300 gap-10 font-semibold items-center h-screen flex-col w-full top-0 z-50'>
        {["home", "about", "work", "contact"].map((link, index) => {
          return (
            <li key={index} className='capitalize' onClick={handelMenuClose}><a className='hover:text-[#64FFDA]' href={`#${link}`}>{`< ${link} />`}</a></li>
          )
        })}
        <li className=' px-2 py-1  rounded-md btnEffect'> Resume</li>
      </ul>
    </div>
  )
}

export default MobileMenu
