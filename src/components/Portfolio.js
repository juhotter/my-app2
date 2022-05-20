
import React from 'react';
import FancyLoadingAnimation from 'fancy-loading-animation'
import 'fancy-loading-animation/dist/index.css'
import "./Portfolio.css"





function Portfolio(){
    return (

<div classname = "outerdiv">

<p className='TextPortfolio'>

<p>
  <h3>What does my smartphone share about me? - Traffic analysis on Android</h3>
Creation of a command-line interface that allows patching conventional 
Android apps with well-known procedures whom you can choose.
The apps are patched, automatically installed on the target hardware device or Emulator using Android Debug Bridge,
operated with touch events and then uninstalled again. 
The data traffic is recorded using mitmproxy to examine how much and which data each app sends out. 
The data sent is stored using a TLS logger which allowes to create automated graphics with python.
So you are able to find out how much data an App is sending out on usage.
</p>

<p> <h3>Android Tracking App for personal use</h3>
A simple android app for tracking calories related to body weight and 
workout units adapted to my own training. 
The app includes a maximum strength calculator that constantly recalculates itself 
with the training progress.
</p>

<p>
  <h3>My Portfolio Website</h3>

Quite obvious, but this portfolio website was built by me. 
Therefore i played around with React, Javascript, Html and Css.
</p>

<FancyLoadingAnimation  
      loadingAnimationVarient='puppy'
      loadingAnimationDelay={0.3}
      loadingCharacterDirection='left'
      loadingTextStyle={{ color: 'black'}}
      loadingSize="0.5"
      loadingContainerVisibility={false}
      loadingText="All projects can be found on my GitHub Page..."
      
      
    />
</p>




      </div>
    )
}
export default Portfolio;

