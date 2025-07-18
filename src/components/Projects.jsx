import React from 'react'
import todo from '/Bgimg/todo.png'
import weather from '/Bgimg/weather.png'
import currency from '/Bgimg/currency.png'
import personal from '/Bgimg/personal.png'
import { motion } from "framer-motion";
import ScrollFloat from './ScrollFloat'

import { SiReact, SiCss3, SiJavascript ,SiTailwindcss  } from "react-icons/si";


function Projects() {
  return (
    
    <motion.section className="min-h-screen p-5"
    id="Projects"
    initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
    >
     
          <div className="w-full text-center my-10"
      
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Projects</h1>
        </div>

    
      <br/>
      <br/>
      <div className='flex justify-center items-center gap-15 p-7 flex-wrap'>

        <motion.div  className="w-full sm:w-[calc(30%-1rem)] max-w-sm min-h-[420px] border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md overflow-hidden transition-transform hover:scale-105 duration-300"
        whileHover={{  boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)" }}
        transition={{ type: "spring", stiffness: 300 }}
        >
         <div  className="bg-white/10 p-6">
         <img src={todo} alt='To-Do-app'  className="w-full h-40 object-cover rounded-lg shadow-sm"/>
         </div>
         <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">To-Do App</h2>
          <p className="text-sm text-white/80">
          A simple and efficient To-Do List built using React JS. It allows users to add Task , delete Tasks, manage daily and Provides a Diary where user can write their daily Journal  with a clean and responsive UI.
          </p>
        </div>
        <div className="mt-4 p-2">
         <a
         href="https://to-do-app-teal-two.vercel.app/"
         target="_blank"
         rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-200"
        >
        <i className="bi bi-arrow-up-right"></i>
        Visit
         </a>
       </div>
       <div className="flex gap-4 text-xl mt-4 text-white p-2">
          <SiReact className="text-[#61DBFB]" />
          <SiCss3 className="text-[#1572B6]" />
          <SiJavascript className="text-[#F7DF1E]" />
        </div>
        </motion.div>


        {/* 2nd project */}
         <motion.div  className="w-full sm:w-[calc(30%-1rem)] max-w-sm border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md overflow-hidden transition-transform hover:scale-105 duration-300"
         whileHover={{  boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)" }}
         transition={{ type: "spring", stiffness: 300 }}
         >
         <div  className="bg-white/10 p-6">
         <img src={weather} alt='Weather-app'  className="w-full h-40 object-cover rounded-lg shadow-sm"/>
         </div>
         <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Weather App</h2>
          <p className="text-sm text-white/80">
          A responsive Weather Application built using React that fetches real-time data from a REST API. It provides users with the current weather, detailed 24-hour forecasts, and extended 21-day weather predictions. The app offers a clean UI and smooth navigation for checking weather conditions across different cities.
          </p>
        </div>
        <div className="mt-4 p-2">
         <a
         href="https://github.com/rahulgope45/Weather-App"
         target="_blank"
         rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-200"
        >
        <i className="bi bi-arrow-up-right"></i>
        Visit
         </a>
       </div>
       <div className="flex gap-4 text-xl mt-4 text-white p-2">
          <SiReact className="text-[#61DBFB]" />
          <SiCss3 className="text-[#1572B6]" />
          <SiJavascript className="text-[#F7DF1E]" />
        </div>
        </motion.div>

         {/* 3rd project */}
         <motion.div  className="w-full sm:w-[calc(30%-1rem)] max-w-sm border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md overflow-hidden transition-transform hover:scale-105 duration-300"
         whileHover={{  boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)" }}
         transition={{ type: "spring", stiffness: 300 }}
         >
         <div  className="bg-white/10 p-6">
         <img src={currency} alt='Currency Converter'  className="w-full h-40 object-cover rounded-lg shadow-sm"/>
         </div>
         <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Currency-Converter' App</h2>
          <p className="text-sm text-white/80">
         A lightweight and user-friendly Currency Converter built with HTML, CSS, and Vanilla JavaScript. It allows users to convert between global currencies using live exchange rates. The interface is clean and intuitive, offering accurate conversion results with real-time rate updates.
          </p>
        </div>
        <div className="mt-4 p-2">
         <a
         href="https://rahulgope45.github.io/Currency-converter/"
         target="_blank"
         rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-200"
        >
        <i className="bi bi-arrow-up-right"></i>
        Visit
         </a>
       </div>
       <div className="flex gap-4 text-xl mt-4 text-white p-2">
          <SiReact className="text-[#61DBFB]" />
          <SiCss3 className="text-[#1572B6]" />
          <SiJavascript className="text-[#F7DF1E]" />
        </div>
        </motion.div>


      </div>
      <div className='flex justify-center items-center gap-15 p-7 flex-wrap'>
        {/* 4th project */}
         <motion.div  className="w-full sm:w-[calc(30%-1rem)] max-w-sm border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md overflow-hidden transition-transform hover:scale-105 duration-300"
         whileHover={{  boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)" }}
         transition={{ type: "spring", stiffness: 300 }}
         >
         <div  className="bg-white/10 p-6">
         <img src={personal} alt='portfolio website'  className="w-full h-40 object-cover rounded-lg shadow-sm"/>
         </div>
         <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Portfolio website' App</h2>
          <p className="text-sm text-white/80">
         A modern and responsive portfolio website built using React, Tailwind CSS, and JavaScript. It showcases my skills, projects, resume, and contact details in a clean and interactive layout. The site features smooth scroll navigation, animated components, and a dynamic design, making it an engaging way to highlight my developer profile.
          </p>
        </div>
        <div className="mt-4 p-2">
         <a
         href="https://rahul-gope.vercel.app/"
         target="_blank"
         rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-200"
        >
        <i className="bi bi-arrow-up-right"></i>
        Visit
         </a>
       </div>
       <div className="flex gap-4 text-xl mt-4 text-white p-2">
          <SiReact className="text-[#61DBFB]" />
          <SiTailwindcss  className="text-[#1572B6]" />
          <SiJavascript className="text-[#F7DF1E]" />
        </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects