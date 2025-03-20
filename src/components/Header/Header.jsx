import Link from 'next/link'  
import React from 'react'  

function Header() {  
  return (  
    <>  
      <div className='w-full h-[12%] flex m-auto justify-between px-10 items-center'>  
        <div id='sun1' className='px-3 py-4 rounded-full border-2 border-yellow-400 bg-yellow-200 glow animate-pulse'>  
          <div id='sun2' className='px-3 py-4 rounded-full  bg-yellow-300 glow'>  
            <Link href={'/'} className='text-5xl px-5 py-4 border-yellow-400 border bg-yellow-400 rounded-full'>  
              2c  
            </Link>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
}  

export default Header;  