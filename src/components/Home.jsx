import React,{useEffect,useRef} from 'react'
import SplitType from "split-type"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

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



  return (
    <div
     className="h-screen ">
       <div className="flex items-center justify-center">
       <h1 ref={textRef} >
         HEllo!
        </h1>
      </div>
      
    </div>
  )
}

export default Home