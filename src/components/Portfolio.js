
import React from 'react';
import FancyLoadingAnimation from 'fancy-loading-animation'
import 'fancy-loading-animation/dist/index.css'
import "./Portfolio.css"





function Portfolio(){
    return (

<div classname = "outerdiv">

<div className='TextPortfolio'>

<p>
  <h3>What does my smartphone share about me? - Traffic analysis on Android</h3>
Creation of a command-line interface with Python that allows patching conventional 
Android apps with well-known procedures whom you can choose.
The apps are patched, automatically installed on the target hardware-device or Emulator using Android Debug Bridge,
operated with touch events and then uninstalled again. 
The data traffic is recorded using mitmproxy to examine how much and which data each app sends out. 
The data sent is stored using a TLS logger which allows to create automated graphics with python, for example pandas.
So you are able to find out how much data an App is sending out on usage.
</p>

<p> <h3>Android Tracking App for personal use</h3>
A simple android app for tracking calories related to body weight and 
workout units adapted to my own training. 
The app includes a maximum strength calculator that constantly recalculates itself 
with the training progress, for example training volume.
</p>

<p> <h3>University Library System - Group Project</h3>
Design and implementation of an Online Library System with different user-roles with different permissions.
There is a admin for management purpose and Users which can borrow and view information about all media.

</p>

<p> <h3>University Multiplayer Online Activity - Group Project</h3>
Design and implementation of an Online Activity-Game. Every Player 
rolls the dice, which recognizes on which side the dice lands. Every Side stands for a different Activity.
Afterwards the cube sends, with help of a Raspberry-Pi, the corresponding side via rest-api to our backend where all possible genres for the activities are stored.
We created a Web-App which allows an Online Multiplayer Game with an Online Chat.


</p>

<p> <h3>AWS workflow with KI based face recognition from AWS</h3>
Design and implementation of a workflow which takes images and uploads them to the AWS Bucket.
After that, every picture gets labelled, with help of AWS face recognition, with attributes you wish like age, happiness, or gender.
Then automatically there will be a collage generated based on one or more of the attributes. 
The Collages will be saved as separate Images on your AWS bucket or locally.


</p>

<p>
  <h3>My Portfolio Website</h3>

  Quite obvious, but this portfolio website was built by me. 
Therefore I played around with React, JavaScript, Html and CSS.
</p>

<FancyLoadingAnimation  
      loadingAnimationVarient='puppy'
      loadingAnimationDelay={0.3}
      loadingCharacterDirection='left'
      loadingTextStyle={{ color: 'black'}}
      loadingSize="0.5"
      loadingContainerVisibility={false}
      loadingText="Most projects can be found on my GitHub Page..."
      
      
    />
</div>




      </div>
    )
}
export default Portfolio;

