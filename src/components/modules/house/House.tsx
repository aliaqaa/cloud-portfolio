import React from 'react'

function House() {
  return (
    <div className='relative w-52 translate-x-30 '>  
     
        <div className='w-[250px] rounded-t-4xl h-[40px] bg-black absolute bottom-40 -left-1.5'></div>
        <div className='w-[150px] rounded-t-4xl h-[40px] bg-black absolute bottom-44 left-10'></div>
      
        <div className='absolute -top-40 left-[20%] bg-amber-400 w-[150px] h-[170px] p-2'>  
            <div className='bg-slate-600 w-10 h-10'></div>
            <div className='absolute top-2 left-2 bg-blue-200 border-2 border-black w-16 h-16'></div>  
            <div className='absolute top-2 right-2 bg-blue-200 border-2 border-black w-16 h-16'></div>  
            
           
            <div className='absolute bottom-0 left-[50%] transform -translate-x-1/2 bg-amber-600 w-24 h-22 p-2'>  
                <span className='bg-blue-200 w-2 h-2 rounded-full block mx-auto translate-y-8'></span>  
            </div>  
        </div>  
    </div>  
  )
}

export default House