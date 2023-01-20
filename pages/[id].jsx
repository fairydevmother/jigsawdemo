import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Sidebar from '../components/sidebar';
import Image from 'next/image'

export default function Post(){ 
  const router = useRouter()
  const { id } = router.query
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));

  }, []);
  
  return (
    <div>
       {posts.map((post) => (
       post.id == id
      ? (<div key={post.id}>
        
        <div>
      <Head>
        <title>Post | Blog</title>
        <link rel="icon" href="/puzzle.png" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />


      </Head>
     
       
     <div className="h-screen w-full bg-white relative flex overflow-hidden">

    <Sidebar />



   <div className="w-full h-full flex flex-col justify-between">
  
    <Header />

    <main className="max-w-full h-full flex relative overflow-y-hidden">

      <div  className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">

      <section className="text-gray-600 body-font ">
            
             <div   className=' mt-1 ml-28 p-5'>
              <div>
                
              <Image className='mx-auto py-10'  width={190} height={190} src={post.imgUrl} alt={post.title} />
              </div>
             <span className="ml-2 text-gray-500 text-sm">Jigsaw By S. KARACA</span> 
             <br></br>
             <span className="text-gray-500 text-sm"> 12 Jun 2019 at 03:00AM</span>

             </div>
             
              <div className="container  py-10 mx-auto">
               <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto">
              
               <h1 className='title font-bold '>  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
               </svg>  {post.title}</h1>
              
        
        
               <p className="mb-3 text-xl font-light text-gray-500 dark:text-gray-400">    
               {post.content} </p>


              <div className='text-center'>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">S. KARACA</h2>
               <p className="text-gray-500">Full-Stack Developer</p>
              </div>
               </div> 
           </div>
          
           
          </section>
           
     
    </div>






    





  </main>
</div>

</div>

<style jsx>{`
      .popup-content {
        height:37.8rem;
        border-radius:2px;
        position: fixed;
        top: 55%;
        left:51.8%;
        transform: translate(-50%, -50%);
        background-color:#F4F9F9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px;
        z-index: 1; 
        color:black;
        width:80.3rem;
    }
    .container{
        position: fixed;
        top: 13%;
        left:12%;
    }
    .title{
        font-size:1.50rem;
    }
    
      `}</style>
 


      
    </div>
         
         
         
         </div>
         
         
         
         )



      : null

      ))}
    </div>
  );
 }