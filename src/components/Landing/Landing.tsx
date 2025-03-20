"use client"; 
import React, { useRef } from "react";  
import Cloud from "../modules/Cloud/Cloud";  
import mainItems from "@/mock/mainItems";
import House from "../modules/house/House";
import Ali from "../modules/Ali/Ali";
function Landing() {  
  const constraintsRef = useRef(null); 

  return (  
    
    <div ref={constraintsRef} className="font-lucy relative h-screen w-screen flex flex-col items-center justify-center text-center">
        <div className="translate-y-40">

        <h3 className="text-3xl -translate-x-46 -translate-y-7">welcome to</h3>
        <h1 className="text-9xl font-farming text-center flex  ">Ali Toosi</h1>  
        <h3 className="text-3xl translate-x-46 translate-y-2">portfolio</h3>
        </div>
        <div className="flex gap-10">

       
          <Cloud dragConstraints={constraintsRef}title="About" className="-translate-x-20 translate-y-10"/>
          <Cloud dragConstraints={constraintsRef}title="contact" className="translate-x-80 translate-y-60"/>
          <Cloud dragConstraints={constraintsRef}title="works" className="translate-x-30 -translate-y-10"/>
      
        </div>
        <div id="ground" className="w-full h-[20%] bg-green-400 rounded-full absolute bottom-0">
          <div className="w-[85%] h-100 bg-green-400 rounded-full m-auto -translate-y-20">
            <div className="relative">
              <House/>
              <Ali/>
            </div>
          </div>
      </div> 
  
        <div className="flex justify-center items-center min-h-screen bg-blue-300">  
 
    </div> 
    </div>  
  );  
}  

export default Landing;  