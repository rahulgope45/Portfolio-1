import React from 'react'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Skills from './Skills'
function Header() {
  return (
    <div  className="fixed top-4 left-1/2 -translate-x-1/2 z-50
  flex justify-center items-center px-8 py-3 gap-6
  w-fit rounded-2xl font-semibold text-white
  bg-white/5 backdrop-blur-md
   border border-cyan-400/30
  shadow-[0_0_15px_rgba(34,211,238,0.4)]
   transition-all duration-300">
        <div className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
        Home</div>
        <div className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
        Projects</div>
        <div  className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
        Skills</div>
         <div className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
        Resume</div>
        <div className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
        Contact</div>
    </div>
  )
}

export default Header