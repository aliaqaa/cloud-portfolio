import React, { useState } from 'react';  

function Ali() {  
  // State to manage the rotation animation  
  const [isRotating, setIsRotating] = useState(false);  

  // Click handler to trigger the animation  
  const handleRightHandClick = () => {  
    if (!isRotating) { // Prevent multiple animations at the same time  
      setIsRotating(true);  
      setTimeout(() => {  
        setIsRotating(false); // Reset after animation completes  
      }, 1000); // Match this with the animation duration  
    }  
  };  

  return (  
    <div className="absolute -top-34 left-1/2" onClick={handleRightHandClick}>  
      <div id="head" className="flex flex-col bg-orange-200 rounded-full w-[40px] h-[40px] overflow-hidden border">  
        <div id="upperface" className="h-1/2 flex justify-center gap-x-2 items-center">  
          <div id="eyes" className="w-1/5 bg-black rounded-full h-2/5"></div>  
          <div id="eyes" className="w-1/5 bg-black rounded-full h-2/5"></div>  
        </div>  
        <div id="beard" className="h-1/2 bg-black flex justify-center">   
          <div id="small" className="mt-[5px] bg-red-400 h-1/2 rounded-b-full w-2/3 border-2 border-white"></div>  
        </div>  
      </div>  

      <div id="body" className="w-[40px] h-[50px] bg-purple-800 rounded-t-3xl relative border">  
        <div id="lefthand" className="w-[10px] h-[30px] bg-purple-800 absolute -left-1 border top-1/3 rounded-t-full">  
          <div id="wrist" className="w-[10px] h-[10px] rounded-b-full bg-orange-200 absolute -bottom-3 z-1"></div>  
        </div>  

        <div   
          id="righthand"   
          className={`w-[10px] h-[40px] bg-purple-800 absolute  right-0 origin-top rotate-220 border top-3 rounded-t-full ${isRotating ? 'rotating' : ''}`}   
        >  
          <div id="wrist" className="w-[10px] h-[10px] rounded-b-full bg-orange-200 absolute -bottom-3"></div>  
        </div>  
      </div>  

      <div id="leg" className="w-[17px] h-[40px] bg-blue-600 absolute translate-x-0"></div>  
      <div id="leg" className="w-[17px] h-[40px] bg-blue-600 absolute translate-x-5.5"></div>  

      <div id="shoe" className="w-[20px] h-[15px] bg-black absolute bottom-0 rounded-full translate-y-12"></div>  
      <div id="shoe" className="w-[20px] h-[15px] bg-black absolute bottom-0 rounded-full translate-y-12 translate-x-6 rotate-180"></div>  
    </div>  
  );  
}  

export default Ali;  