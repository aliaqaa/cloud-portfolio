"use client";   
import React, { useEffect, useState } from "react";  
import { motion } from "framer-motion";  
import Link from "next/link";  

function Cloud({ dragConstraints, title, className }) {  
  const [animate, setAnimate] = useState(false);  
  const [isBouncing, setIsBouncing] = useState(false);  
  const audioRef = React.useRef(null); // Create a reference for the audio element  

  useEffect(() => {  
    const timer = setTimeout(() => {  
      setAnimate(true);  
    }, 100); // Delay before starting the animation  

    return () => clearTimeout(timer);  
  }, []);  

  // Function to generate a random number  

  const handleClick = () => {  
    if (audioRef.current) {  
      audioRef.current.play(); // Play sound effect  
    }  
    setIsBouncing(true);  
    setTimeout(() => setIsBouncing(false), 300); // Duration of the bounce effect  
  };  

  return (  
    <motion.div  
      drag  
      dragElastic={0.5}   
      whileHover={{ scale: 1.1 }}  
      onClick={handleClick} // Trigger bounce and sound on click  
      dragConstraints={dragConstraints}   
      className={`cloud bg-white rounded-full relative mx-auto w-[350px] h-[120px] transition ${className}`}  // Use a template literal correctly  
      animate={isBouncing ? { scale: 1.2 } : { x: animate ? [0, 20, -20, 0] : {} }} // Add bounce effect on click  
      transition={{ duration: 0.9, ease: "easeInOut", repeat: isBouncing ? 0 : Infinity }} // Continuous animation while not bouncing  
    >  
      <div className="absolute bg-white rounded-full w-[100px] h-[100px] top-[-50px] left-12 z-[-1]"></div>  
      <Link href={`/${title}`} className="text-5xl font-farmhouse">  
        {title}   
      </Link>  
      <div className="absolute bg-white rounded-[100px] w-[180px] h-[180px] top-[-90px] right-12 z-[-1]"></div>  
      {/* Sound effect audio element */}  
      <audio ref={audioRef}>  
        <source src="/path/to/your-sound-effect.mp3" type="audio/mpeg" />  
        Your browser does not support the audio tag.  
      </audio>  
    </motion.div>  
  );  
}  

export default Cloud;  