import React from "react";
import { Link } from "react-router-dom";
import  "./Footer.css"

const Footer = () => {
return (
   <div className="wholeFooter">
    <Link className="class1" style={{ textAlign: "right", float:  "right",textDecoration: 'none', color: 'white'  ,paddingRight: "20px",paddingTop:"4px"}}to="imprint">Imprint</Link>
   
   
  </div>

)}
export default Footer;
