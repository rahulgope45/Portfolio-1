import React,{useRef,useState} from 'react'
import { SiReact, SiTailwindcss, SiJavascript, SiCss3 ,  SiPython, SiFirebase, SiGit, SiGithub,  SiHtml5  } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SpotlightCard from './Spotlightcard';
import { motion } from "framer-motion";

function Skills() {










  return (
  <motion.section className="min-h-screen p-5"
  id="Skills"
   initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.5 }}
  
  >
    <div className="w-full text-center my-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Skills</h1>
        </div>

  <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl w-full mx-auto">
    {/* Skill Item */}
     <SpotlightCard 
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200">
         <div className="flex flex-col items-center">
         <SiReact className="text-cyan-400 text-4xl mb-2" />
         <p className="text-white font-medium">React</p>
         </div>
      </SpotlightCard>
  
    <SpotlightCard
    spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200">

      <div className="flex flex-col items-center">
      <SiTailwindcss className="text-sky-400 text-4xl mb-2" />
      <p className="text-white font-medium">Tailwind CSS</p>
    </div>

    </SpotlightCard>
    

    
    <SpotlightCard
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200"
     >
      <div className="flex flex-col items-center">
      <SiJavascript className="text-yellow-300 text-4xl mb-2" />
      <p className="text-white font-medium">JavaScript</p>
    </div>

    </SpotlightCard>

    
    
    <SpotlightCard
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200"
    >
      <div className="flex flex-col items-center">
      <SiCss3 className="text-blue-500 text-4xl mb-2" />
      <p className="text-white font-medium">CSS3</p>
    </div>

    </SpotlightCard>

    <SpotlightCard
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200"
    >
      <div className="flex flex-col items-center">
      <SiPython className="text-blue-300 text-4xl mb-2" />
      <p className="text-white font-medium">Python</p>
    </div>

    </SpotlightCard>

    <SpotlightCard
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200"
    >
      <div className="flex flex-col items-center">
      <SiFirebase className="text-orange-500 text-4xl mb-2"  />
      <p className="text-white font-medium">Firebase</p>
    </div>

    </SpotlightCard>

    <SpotlightCard
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200"
    >
      <div className="flex flex-col items-center">
      <SiGit className="text-red-500 text-4xl mb-2" />
      <p className="text-white font-medium">Git</p>
      </div>
      
    </SpotlightCard>

    <SpotlightCard
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200"
    >
      <div className="flex flex-col items-center">
      <SiGithub className="text-white text-4xl mb-2" />
      <p className="text-white font-medium">Github</p>
    </div>


    </SpotlightCard>

    <SpotlightCard
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200"
    >
      <div className="flex flex-col items-center">
      <FaJava className="text-orange-600 text-4xl mb-2"  />
      <p className="text-white font-medium">Java</p>
    </div>

    </SpotlightCard>
    
    <SpotlightCard
     spotlightColor="rgba(187, 0, 255, 0.4)"
     className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-200"
    >
      <div className="flex flex-col items-center">
      <SiHtml5 className="text-orange-600 text-4xl mb-2" />
      <p className="text-white font-medium">Html</p>
    </div>

    </SpotlightCard>

    

    

    

    
    

    

    </div>

  </motion.section>
  )
}

export default Skills