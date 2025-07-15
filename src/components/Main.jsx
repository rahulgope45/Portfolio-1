import React from 'react'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import Resume from './Resume'


function Main() {
  return (
    <div  className="pt-28 space-y-20">
      <Home/>
      <Projects/>
      <Skills/>
      <Resume/>

    </div>
  )
}

export default Main