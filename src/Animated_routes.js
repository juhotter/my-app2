
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Imprint from "./components/Imprint";

import { PageTransition } from '@steveeeie/react-page-transition';

function AnimatedRoutes(){
    const location = useLocation();

    return(

        <PageTransition  style={{height: '100vh'}}
      
        preset="fall"
        transitionKey={location.pathname}
      >
        <Routes location={location} key={location.pathname}>   
        <Route path="/" element={ <Home/> } />
        <Route path="About" element={ <About/> } />
        <Route path="Contact" element={ <Contact/> } />
        <Route path="Portfolio" element={ <Portfolio/> } />
        <Route path="Skills" element={ <Skills/> } />
        <Route path="Imprint" element={ <Imprint/> } />
        <Route path="Home" element={ <Home/> } />
        </Routes>
        </PageTransition>
    );
}

export default AnimatedRoutes;