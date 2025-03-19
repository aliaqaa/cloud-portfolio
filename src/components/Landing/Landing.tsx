"use client"; 
import React, { useRef } from "react";  
import Cloud from "../modules/Cloud/Cloud";  
import mainItems from "@/mock/mainItems";
function Landing() {  
  const constraintsRef = useRef(null); 

  return (  
    
    <div ref={constraintsRef} className="font-lucy relative h-screen w-screen flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl -translate-x-46 -translate-y-7">welcome to</h3>
        <h1 className="text-9xl font-farming text-center flex  ">Ali Toosi</h1>  
        <h3 className="text-3xl translate-x-46 translate-y-2">portfolio</h3>
        <div className="flex gap-10">

        {mainItems.map((item)=>(
          <Cloud key={item.id}dragConstraints={constraintsRef}title={item.title}/>
        ))}
        </div>
    </div>  
  );  
}  

export default Landing;  