"use client";  
import React, { useEffect, useRef, useState } from 'react';  

function Footer() {  
  const audioRef = useRef(null);  
  const [isPlaying, setIsPlaying] = useState(false);  

  useEffect(() => {  
    // Clean up audio on unmount  
    return () => {  
      audioRef.current.pause();  
      audioRef.current.currentTime = 0; // Reset to the beginning  
    };  
  }, []);  

  const togglePlayPause = () => {  
    if (isPlaying) {  
      audioRef.current.pause();  
    } else {  
      audioRef.current.play();  
    }  
    setIsPlaying(!isPlaying);  
  };  

  return (  
    <div>  
      {/* Audio element */}  
      <audio ref={audioRef} loop>  
        <source src="/assets/music/song/morning-garden-acoustic-chill-15013.mp3" type="audio/mpeg" />  
        Your browser does not support the audio tag.  
      </audio>  

      {/* Play/Pause Button */}  
      <button   
        onClick={togglePlayPause}   
        style={{  
          position: 'fixed',  
          bottom: '20px',  
          right: '20px',  
          backgroundColor: 'rgba(0, 0, 0, 0.7)',  
          color: 'white',  
          border: 'none',  
          borderRadius: '5px',  
          padding: '10px 15px',  
          cursor: 'pointer',  
          zIndex: 1000,  
        }}  
      >  
        {isPlaying ? '⏸' : '▶'}  
      </button>  
    </div>  
  );  
}  

export default Footer;  