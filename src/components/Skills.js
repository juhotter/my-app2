
import "./Skills.css"
import react from  "./react.png"
import typescript from "./typescript.png"
import js from "./js.png"
import html from "./html.png"
import css from "./css.png"
import haskell from "./haskell.png"
import android from "./android.png"
import c from "./c.png"
import github from "./github.png"
import gitlab from "./gitlab.png"
import java from "./java.png"
import python from "./python.png"
import bash from "./bash.png"
import spring from "./spring.png"
import nest from "./nest.png"
import mongodb from "./mongodb.png"
import mysql from "./mysql.png"
import docker from "./docker.png"
import mitmproxy from "./mitmproxy.png"
import mobile from "./mobile.jpg"
import web from "./web.jpeg"
import programming from "./programming.jpg"
import further from "./further.jpg"
import key from "./key.png"


function Skills() {
    return (
    
<html>

<div class="mycontainer">

  <div class="box">
    <div class="imgBx">
      <img src={web}></img>
    </div>
    <div class="content">
      <div>
        <h2>Web-Development </h2>
        <p>
          Building fronted Web-Apps with React Framework while 
          backend is made with NestJS or Spring.
          Different Languages with different strengths used. 
        </p>
        <p > 
        Weapons: <br></br>
        <img src={react}  height={"20em"} padding = "20px"></img>
        <img src={nest}  height={"20em"} padding = "20px"></img>
        <img src={spring}  height={"20em"} padding = "20px"></img>
  <img src={typescript}  height={"20em"} padding = "20px"></img>
<img src={html}  height={"20em"} padding = "20px"></img>
<img src={css}  height={"20em"} padding = "20px"></img>
<img src={js}  height={"20em"} padding = "20px"></img>
<img src={java}  height={"20em"} padding = "20px"></img>
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
    <img src={mobile} ></img> </div>
    <div class="content">
      <div>
        <h2>App-Development</h2>
        <p>
Apps are developed native for Android using Java.<br></br>
Currently also learning flutter, for developing hybrid Apps for Android and IOS.



        </p>
        <p>
        Weapons: <br></br>
        <img src={java}  height={"20em"} padding = "20px"></img>
        <img src={android}  height={"20em"} padding = "20px"></img>


        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
    <img src={programming}></img>  </div>
    <div class="content">
      <div>
        <h2>Further Programming</h2>
        <p>
          Creating Bash Scripts for automated tasks. 
          Coding very hardware related in C++.
          Functional Coding with Haskell or
          using allrounder Python.
          </p>

          <p>
            Weapons: <br></br>
        <img src={bash}  height={"20em"} padding = "20px"></img>
        <img src={haskell}  height={"20em"} padding = "20px"></img>
        <img src={c}  height={"20em"} padding = "20px"></img>
        <img src={python}  height={"20em"} padding = "20px"></img>
        </p>
      </div>
    </div>
  </div>
  <div class="box">
    <div class="imgBx">
    <img src={further}></img> </div>
    <div class="content">
      <div>
        <h2>Further</h2>
        <p>
        Possible to implement a database which fits best into the implementing environment.<br></br>
          Version Controll System.
        Interested on colobarating? <br></br>
       
        </p>
        <p>
        Weapons: <br></br>
        <img src={github}  height={"20em"} padding = "20px"></img>
        <img src={gitlab}  height={"20em"} padding = "20px"></img>
        <img src={docker}  height={"20em"} padding = "20px"></img>
        <img src={mongodb}  height={"20em"} padding = "20px"></img>
        <img src={mysql}  height={"20em"} padding = "20px"></img>
        <img src={mitmproxy}  height={"20em"} padding = "20px"></img>

          
          
            </p>
      </div>
    </div>
  </div>


</div>
<div className="text">
In Austria there is a saying "Geht nid gibts nid", meaning that something can't be done, doesn't exist.
So i will try my best to make everything possible.
</div>
</html>
    );
    }
    
    export default Skills