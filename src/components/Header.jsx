import React from 'react'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import Skills from './Skills'
function Header() {
  return (
    <div className= "flex justify-center items-center w-fit px-8 py-4 backdrop-blur-md bg-white/10 shadow-lg rounded-2xl mx-auto mt-6 gap-6 font-bold text-black">
        <Home/>
        <Projects/>
        <Resume/>
        <Skills/>
    </div>
  )
}

export default Header