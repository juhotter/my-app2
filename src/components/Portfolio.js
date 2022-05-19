
import React from 'react';
import FancyLoadingAnimation from 'fancy-loading-animation'
import 'fancy-loading-animation/dist/index.css'
import "./Portfolio.css"





function Portfolio(){
    return (

<div classname = "outerdiv">
<center>
<p className='TextPortfolio'>
Nothing official here yet. <br></br>
Check out my GitHub in the meantime. <br></br>
There are some small projects i made. 
</p>

  <FancyLoadingAnimation  
      loadingAnimationVarient='puppy'
      loadingAnimationDelay={0.3}
      loadingCharacterDirection='left'
      loadingTextStyle={{ color: 'black'}}
      loadingSize="0.5"
      loadingContainerVisibility={false}
      loadingText="...on my way to new challenges"
      
      
    /></center>

      </div>
    )
}
export default Portfolio;

