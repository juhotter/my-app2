
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
Creation of a command-line interface with Python that allows patching conventional 
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

<p> <h3>University Library System - Group Project</h3>
Design and implementation of a Online Library System. Different User Roles with different permissions.
There is a admin for management purpose and Users which can borrow und view informations about all Medias.

</p>

<p> <h3>University Multiplayer Online Activity - Group Project</h3>
Design and implementation of a Online Acitivity Game. Every Player 
roll the dice which recognizes on which side the dice lands. Every Side stands for a different Activity.
Afterward the cube sends with help of a Rasperry Pi the corresponding Side via Rest-Api to our Backend where all possible Genres for the Acitivities are stored.
We created a Web-App which allows a Online Multiplayer Game with a Online Chat.


</p>

<p> <h3>AWS Workflow with Ki Based Face Recognition from AWS</h3>
Design and implementation of a workflow which takes Images and uploads them to the AWS Bucket.
Aftersward every picure gets labeled, with help of AWS face recognition, with attributes you wish like age, happiness or gender.
Then automatically there will be a collage generated based on one or more of the attributes. 
The Collages will be safed as seperate Images on your AWS bucket or locally.


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
      loadingText="Most projects can be found on my GitHub Page..."
      
      
    />
</p>




      </div>
    )
}
export default Portfolio;

