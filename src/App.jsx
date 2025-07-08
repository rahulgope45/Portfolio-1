import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import Particles from "react-particles";
import { tsParticles } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import 'bootstrap-icons/font/bootstrap-icons.css';




function App() {

  const particlesInit = async () => {
      await loadBasic(tsParticles);
  }

  return (
   <div className="relative h-screen w-full bg-gradient-to-br from-[#1e1e2f] via-[#302b63] to-[#24243e] overflow-auto">

  <Particles
    id="tsparticles"
    init={particlesInit}
    className="absolute inset-0 z-0"
    options={{
      fullScreen: false,
      background: { color: 'transparent' },
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        opacity: {
          value: 0.15,
          anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false }
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: false }
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: 'none',
          out_mode: 'out',
          bounce: false
        },
        shape: { type: 'circle' },
        links: { enable: false }, // cleaner, no lines
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 }
        }
      },
      retina_detect: true
    }}
  />
    <div  >
    <Header/>
    <Main/>
     
    </div>

    </div>
   
  )
}

export default App
