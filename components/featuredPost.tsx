import React, { useState } from 'react';
import Image from 'next/image'
import closeButton from './close.png'
import Link from 'next/link'
const FeaturedPost = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>
        <h1 className="text-black text-2xl title-font font-bold mb-2">The Pandemic Developer</h1>
        </button>
        {isOpen && (


  
          <div className="popup-content max-w-full flex relative overflow-x-hidden">
            
            <section className="text-gray-600 body-font">
            <button  onClick={() => setIsOpen(false)}> 
            <Image  width={35} height={35} src={closeButton} alt="closeButton" />
             </button>
             <Image className='pl-16 pt-10'  width={320} height={320} src="/cat.webp" alt="cat" />
             <span className="mt-1 ml-32 p-5 text-gray-500 text-sm">Jigsaw By S. KARACA</span> 
             <br></br>
             <span className="mt-1 ml-28 p-5 text-gray-500 text-sm"> 12 Jun 2019 at 03:00AM</span>

              <div className="container  py-10 mx-auto">
               <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto">
              
               <h1 className='title font-bold '>  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
               </svg>  Pandemic Developer </h1>
              
        
        
               <p className="mb-3 text-xl font-light text-gray-500 dark:text-gray-400">    
            
            
             </p>
             <Link className="mt-3 text-indigo-500 inline-flex items-center"  href="/featured-post" >
                          Read More
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                         </Link>
              <div className='text-center'>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">S. KARACA</h2>
               <p className="text-gray-500">Full-Stack Developer</p>
              </div>
               </div> 
           </div>
          
           
          </section>
             
           
          </div>
        )}
    

        
    <style jsx>{`
      .popup-content {
        height:37.8rem;
        border-radius:2px;
        position: fixed;
        top: 55%;
        left:51.8%;
        background-color:#F4F9F9;
        transform: translate(-50%, -50%);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:80.3rem;
    }
    .container{
        position: fixed;
        top: 4%;
        left:12%;
    }
    .title{
        font-size:1.50rem;
    }
    
      `}</style>
      </>
    );
}

export default FeaturedPost;
