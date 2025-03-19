"use client";   
import React, { useEffect, useState } from "react";  
import { motion } from "framer-motion";  
import Link from "next/link";  

function Cloud({ dragConstraints, title }) {  
  const [animate, setAnimate] = useState(false);  

  useEffect(() => {  
    const timer = setTimeout(() => {  
      setAnimate(true);  
    }, 100); // Delay before starting the animation  

    return () => clearTimeout(timer);  
  }, []);  

  // Function to generate a random number  
  const randomX = () => Math.random() * 30 - 10; // Random value between -10 and 10  

  return (  
    <motion.div  
      drag  
      dragElastic={0.5}   
      whileHover={{ scale: 1.1 }}  
      dragConstraints={dragConstraints}   
      className="cloud bg-white rounded-full relative mx-auto w-[350px] h-[120px] transition"  
      animate={animate ? { x: [randomX(), 10, -10, 0] } : {}} // Random jiggle motion  
      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }} // Continuous animation  
    >  
      <div className="absolute bg-white rounded-full w-[100px] h-[100px] top-[-50px] left-12 z-[-1]"></div>  
      <Link href={`/${title}`} className="text-5xl">  
        {title}   
      </Link>  
      <div className="absolute bg-white rounded-[100px] w-[180px] h-[180px] top-[-90px] right-12 z-[-1]"></div>  
    </motion.div>  
  );  
}  

export default Cloud;  