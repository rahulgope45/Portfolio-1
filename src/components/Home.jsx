import React,{useState} from 'react'
import FadeContent from './Fadecontent'
  


import img3 from '/Bgimg/img3.jpg'







const allTheImg =[
"/Bgimg/img1.jpg","/Bgimg/img2.jpg"
]

function Home() {



  const [curImg,setScrollImg] =useState(0)

  const nextImg = () =>{
    if (curImg < allTheImg.length -1){
      setScrollImg((per) => per+1)
    }
  }

  const prvImg =()=>{
    if(curImg > 0){
      setScrollImg((per) => per-1)
    }
  }


  const [liked,setLiked] = useState(false)
  const toggleLike = ()=>{
    setLiked((prev) => !prev)
  }

  



  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={60}>

      <section
    id="Home"
     className="h-screen ">
       <div className="flex items-center justify-center">
       <div className="w-[calc(100%-2px)] max-w-6xl border border-white/20 p-2  rounded-xl shadow-md bg-white/50 backdrop-blur-sm flex ">
       
       <div  className="flex-2 border border-white/10 p-2 ">
       <div className=' flex items-center gap-1'>
        <div className="relative p-2 ">
          <img src={img3}
           alt="Profile Icon"
           className="w-10 h-10 rounded-full border border-white shadow-md object-cover"/>
             
        </div>
        <div className='flex items-center justify-between gap-2'>
                <h2 className="text-white font-semibold text-lg">Rahul Gope</h2>
                <a className="text-sm text-blue-500 cursor-pointer hover:underline"
                href="https://www.linkedin.com/in/rahul-gope-808476369/"
                target="_blank"
                rel="noopener noreferrer"
                >Follow</a> 
              
             </div>
             

       </div>
       <br/>
            <div>
             <h1 className="text-xl font-bold mb-4">About Me</h1>
             <p className="text-white leading-relaxed">
             From a young age, I've been drawn to problem solving. This interest led me to explore graphic design  especially animation and poster creation.
             <br /><br />
            When I discovered programming, I found a new passion and began honing my skills to build websites and mobile apps.
            <br /><br />
            Outside of building, I love researching AI tools and exploring how they can enhance my projects.
            </p>
      </div>
        <div className="mt-6 flex ">
        <a
         href="/rahulresume.pdf"
         download
         className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200"
        >
        <i className="bi bi-arrow-down-square-fill text-lg"></i>
        <span className="font-medium">Download Resume</span>
       </a>
      </div>
      <div className='flex p-5 gap-4 text-xl'>
        <div onClick={toggleLike} className="cursor-pointer"><i 
        className={`bi ${liked ? 'bi-heart-fill text-pink-500' : 'bi-heart'} transition-all duration-300`}
        class="bi bi-heart"></i>
        </div>
        <div className="cursor-pointer"
        onClick={() => {
        navigator.clipboard.writeText('https://rahul-gope.vercel.app')
        alert('Link copied to clipboard!');
        }}
        ><i className="bi bi-send-fill"></i></div>
      </div>

       </div>
       </div>
      </div>
      
    </section>

      

    </FadeContent>
    
  )
}

export default Home