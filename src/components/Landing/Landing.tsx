"use client"; 
import React, { useRef } from "react";  
import Cloud from "../modules/Cloud/Cloud";  

function Landing() {  
  const constraintsRef = useRef(null); 

  return (  
    <div ref={constraintsRef} className="font-lucy relative h-screen w-screen flex items-center justify-center text-center">
        <h1 className="text-9xl font-farming text-center">Ali Toosi</h1>  
      <Cloud dragConstraints={constraintsRef} title="About" />  
    </div>  
  );  
}  

export default Landing;  