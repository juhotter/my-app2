
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
        loading="lazy"
        
      />




       <div class="fullcap" id='hello'>
       

         <span>I'm</span>
         <span > Julian</span>
         <span > - a </span>
         <span > Software</span>
         <span > Engineer</span>
         <span > Based </span>
         <span > in</span>
         <span > Austria</span>
          
       
         
       
         
         
         
         
         </div>
</div>
   
   
   
     )
    }

export default Home;
