import React, { useState } from 'react'
import todo from '/Bgimg/todo.png'
import weather from '/Bgimg/weather.png'
import currency from '/Bgimg/currency.png'
import personal from '/Bgimg/personal2.png'
import chat from '/Bgimg/chatappp.png'
import Proboat from '/Bgimg/banner1.png'
import habbit from '/Bgimg/habbit2.png'
import Groccery from '/Bgimg/Grocery.png'
import { motion } from "framer-motion";
import ScrollFloat from './ScrollFloat'

import { SiReact, SiCss3, SiJavascript ,SiTailwindcss, SiExpress, SiMongodb, SiNodedotjs, SiCloudinary, SiSocketdotio, SiDart, SiFlutter  } from "react-icons/si";
import Frontend from './Frontendproject'
import Fullstack from './Fullstackproject'
import CrossPlatform from './CrossPlatform'


function Projects() {





const [active, setActive] = useState("fullstack")


  return (
    
    <motion.section className="min-h-screen p-5"
    id="Projects"
    initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
    >
     
          <div className="w-full text-center my-4"
      
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Projects</h1>
        </div>

    
      <br/>
      <br/>
      
      {/* Adding Slider here */}
      <div className='mt-3 w-full flex flex-col  '>
          <div className='flex item-center justify-center'>
            <div className=' flex gap-2 w-fit rounded-2xl font-semibold text-white bg-white/5 backdrop-blur-md border border-cyan-400/30 px-4 py-2 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 item-center justify-center
                     
                     '>
            <button className='hover:text-blue-400 cursor-pointer border-r  px-4 py-2 '
            onClick={() => setActive('fullstack')}
            >
              Fullstack

            </button>
            <button className='hover:text-blue-400 cursor-pointer  px-4 py-2 '
            onClick={() =>setActive('frontend')}
            >
              Frontend

            </button>
            <button className='hover:text-blue-400 cursor-pointer  border-l px-4 py-2 '
            onClick={() =>setActive('Native')}
            >
              CrossPlatform

            </button>
            
          </div>
          </div>
          <div className='mt-10'>
             { active === 'fullstack' && <Fullstack />}
             { active === 'frontend' && <Frontend />}
             { active === 'Native' && <CrossPlatform />}

            </div>

            
        </div>
    </motion.section>
  )
}

export default Projects