import React from 'react'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'


function Main() {
  return (
    <div  className="pt-28 space-y-20">
      <Home/>
      <Projects/>
      <Skills/>

    </div>
  )
}

export default Main