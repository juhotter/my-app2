import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";
import Image from './signature.png'

const Header = () => (

  
  <div className="header">
  
   <nav class="navbar ">

    <a class="navbar-brand"  href="/#">
      <img
        src={Image}
        height={40}
        width={150}
        alt="Signature"
        loading="lazy"
      />


</a>
  

   

    <Link className='class1' style={{  textAlign: "right", float:  "right",    textDecoration: 'none', color: 'white', paddingRight: "20px",paddingTop:"5px" }} to="contact">Contact  </Link>
     <Link className='class1' style={{ textAlign: "right", float:  "right", textDecoration: 'none', color: 'white' , paddingRight: "20px",paddingTop:"5px" }}to="about">About</Link>
     <Link className='class1' style={{ textAlign: "right", float:  "right",textDecoration: 'none', color: 'white' , paddingRight: "20px",paddingTop:"5px" }}to="portfolio">Portfolio</Link>
     <Link className='class1' style={{ textAlign: "right", float:  "right", textDecoration: 'none', color: 'white' , paddingRight: "20px" ,paddingTop:"5px"}}to="skills">Skills</Link>
     
   

</nav>

   
  </div>
)
export default Header;

