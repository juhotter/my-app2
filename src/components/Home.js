
import React from 'react';
import background from './background.jpg'
import "./Home.css"

function Home() {
  return (

   
<div className='fullwrap'>


<img
        src={background}
        height={"100%"}

        alt="Background"
   
        
      />




       <div class="fullcap" id='hello'>
       

         <h1>
        <span>Hi. <br></br></span>
           <span>I'm
         <span > Julian</span>
         </span></h1>
   
         <span > a </span>
         <span > Software</span>
         <span > Engineer <br></br></span>
         <span > 📍Based </span>
         <span > in</span>
         <span > Austria⛰️</span>
       
       
         
       
         
         
         
         
         </div>
</div>
   
   
   
     )
    }

export default Home;
