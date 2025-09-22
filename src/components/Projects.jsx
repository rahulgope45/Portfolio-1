import React from 'react'
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
          {/* Chatify */}
         <div  className="bg-white/10 p-6">
         <img src={chat} alt='Chat-app'  className="w-full h-40 object-cover rounded-lg shadow-sm"/>
         </div>
         <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Chatify</h2>
          <p className="text-sm text-white/80">
          A Chat Application available in both as a Website and in Native.
          </p>
        </div>
        <div className="mt-4 p-2">
         <a
         href="https://github.com/rahulgope45/Chatify"
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
          <SiTailwindcss className="text-[#38BDF8]"/>
          <SiNodedotjs  className="text-[#339933]" />
          <SiMongodb className="text-[#47A248]"/>
          <SiExpress className="text-[#F7DF1E]"/>
          <SiCloudinary  className="text-[#3448C5]" />
          <SiSocketdotio className="text-[#010101]" /> 
          
        </div>
        </motion.div>


        {/* 2nd project */}
         <motion.div  className="w-full sm:w-[calc(30%-1rem)] max-w-sm border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md overflow-hidden transition-transform hover:scale-105 duration-300"
         whileHover={{  boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)" }}
         transition={{ type: "spring", stiffness: 300 }}
         >
         <div  className="bg-white/10 p-6">
         <img src={Proboat} alt='Weather-app'  className="w-full h-40 object-cover rounded-lg shadow-sm"/>
         </div>
         <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Proboat</h2>
          <p className="text-sm text-white/80">
          Proboat is an Fullstack responsive UI Property Rental website.
          
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
          <SiTailwindcss className="text-[#38BDF8]"/>
          <SiNodedotjs  className="text-[#339933]" />
          <SiMongodb className="text-[#47A248]"/>
          <SiExpress className="text-[#F7DF1E]"/>
          <SiCloudinary  className="text-[#3448C5]" />
          
        </div>
        </motion.div>

         {/* 3rd project */}
         <motion.div  className="w-full sm:w-[calc(30%-1rem)] max-w-sm border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md overflow-hidden transition-transform hover:scale-105 duration-300"
         whileHover={{  boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)" }}
         transition={{ type: "spring", stiffness: 300 }}
         >
         <div  className="bg-white/10 p-6">
         <img src={habbit} alt='Currency Converter'  className="w-full h-40 object-cover rounded-lg shadow-sm"/>
         </div>
         <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Habbit Tracker App</h2>
          <p className="text-sm text-white/80">
         A Habbit Tracker Native App for tracking your daily habbits.
          </p>
        </div>
        <div className="mt-4 p-2">
         <a
         href="https://github.com/rahulgope45/Habit-Tracker"
         target="_blank"
         rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-200"
        >
        <i className="bi bi-arrow-up-right"></i>
        Visit
         </a>
       </div>
       <div className="flex gap-4 text-xl mt-4 text-white p-2">
          <SiDart className="text-[#0175C2]" />
          <SiFlutter className="text-[#02569B]" />
          
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
          <h2 className="text-xl font-semibold mb-2">Portfolio website</h2>
          <p className="text-sm text-white/80">
         A modern and responsive portfolio websitemade with React and Tailwind.
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
        {/* 4th project */}
         <motion.div  className="w-full sm:w-[calc(30%-1rem)] max-w-sm border border-white/20 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md overflow-hidden transition-transform hover:scale-105 duration-300"
         whileHover={{  boxShadow: "0 0 15px rgba(0, 123, 255, 0.6)" }}
         transition={{ type: "spring", stiffness: 300 }}
         >
         <div  className="bg-white/10 p-6">
         <img src={Groccery} alt='Currency Converter'  className="w-full h-40 object-cover rounded-lg shadow-sm"/>
         </div>
         <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Shope Mart</h2>
          <p className="text-sm text-white/80">
         A Fullstack Shopping E-commrece Groccery web app with User and Admin Pannel.
          </p>
        </div>
        <div className="mt-4 p-2">
         <a
         href="https://github.com/rahulgope45/Grocery-App-SmartB"
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
          <SiTailwindcss className="text-[#38BDF8]"/>
          <SiNodedotjs  className="text-[#339933]" />
          <SiMongodb className="text-[#47A248]"/>
          <SiExpress className="text-[#F7DF1E]"/>
          <SiCloudinary  className="text-[#3448C5]" />
          
          
        </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects