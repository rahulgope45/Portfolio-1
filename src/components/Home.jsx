import React,{useEffect,useRef,useState} from 'react'
import SplitType from "split-type"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img3 from '/Bgimg/img3.jpg'





gsap.registerPlugin(ScrollTrigger);


const allTheImg =[
"/Bgimg/img1.jpg","/Bgimg/img2.jpg"
]

function Home() {


const textRef =useRef(null)

useEffect(() =>{
  //split the text in character
  const split = new SplitType(textRef.current ,{types: 'chars'})

  gsap.from(split.chars,{
        opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      }
})

// Clean up (optional)
    return () => {
      split.revert();
    };
  }, []);

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
    <div
     className="h-screen ">
       <div className="flex items-center justify-center">
       <div className="w-[calc(100%-2px)] max-w-6xl border border-white/20 p-2  rounded-xl shadow-md bg-white/50 backdrop-blur-sm flex ">
        <div className="flex-1 bg-white/100 p-6  ">
        <div className='flex items-center justify-center'>
          <img src={allTheImg[curImg]} alt='Me' 
          className="w-full max-h-96 object-contain "/>
        </div>
           <div className='flex gap-2 mt-4 items-center justify-center'>
                    <button onClick={prvImg} disabled={curImg === 0}
                    className="px-4 py-2 bg-black/30 text-white rounded hover:bg-black/10 disabled:opacity-50">
                      <i class="bi bi-arrow-left-circle-fill"></i></button>
                    <button onClick={nextImg} disabled ={curImg === allTheImg.length -1}
                     className="px-4 py-2 bg-black/30 text-white rounded hover:bg-black/20 disabled:opacity-50">
                      <i class="bi bi-arrow-right-circle-fill"></i></button>
                    
                    
                </div>
        </div>
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
      <div className="mt-6">
       <button
       className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
       >
       <i className="bi bi-arrow-down-square-fill"></i>
        Download Resume
      </button>
      </div>
      <div className='flex p-5 gap-4 text-xl'>
        <div onClick={toggleLike} className="cursor-pointer"><i 
        className={`bi ${liked ? 'bi-heart-fill text-pink-500' : 'bi-heart'} transition-all duration-300`}
        class="bi bi-heart"></i>
        </div>
        <div className="cursor-pointer"><i className="bi bi-send-fill"></i></div>
      </div>

       </div>
       </div>
      </div>
      
    </div>
  )
}

export default Home