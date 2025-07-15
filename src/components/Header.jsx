import React,{useState, useEffect} from 'react'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Skills from './Skills'
function Header({scrollToSection}) {




  return (
    <div  className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                     flex justify-center items-center px-8 py-3 gap-6
                     w-fit rounded-2xl font-semibold text-white
                     bg-white/5 backdrop-blur-md
                     border border-cyan-400/30
                     shadow-[0_0_15px_rgba(34,211,238,0.4)]
                     transition-all duration-300">
        <button className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
        onClick={() =>scrollToSection("Home")}
        >
        Home</button>
        <button className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
        onClick={() =>scrollToSection("Projects")}
        >
        Projects</button>
        <button  className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
        onClick={() =>scrollToSection("Skills")}
        >
        Skills</button>
         <button className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
         onClick={() =>scrollToSection("Resume")}
         >
        Resume</button>
        <button className="hover:text-blue-400 hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
        onClick={() =>scrollToSection("Contact")}
        >
        Contact</button>
    </div>
  )
}

export default Header