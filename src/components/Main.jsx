import React from 'react'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import Resume from './Resume'
import {Contact} from './Contact'


function Main() {
  return (
    <div  className="pt-28 space-y-20">
      <Home/>
      <Projects/>
      <Skills/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default Main