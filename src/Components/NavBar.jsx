import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import Aboutme from './AboutMe';
import Career from './Career';
import Work from './Work';
import Test from './Test';
import Footer from './Footer';


function NavBar() {
  return (
    <div>
  <div className='navdiv'>
       
          <div className='div2'>
              <div>I'm Muelji Damos</div>
              <h3> I'm an <b> Front-End Developer,</b> Chemical Engineer, a <b>visionary</b> and a creative, who has the sole passion of       creating effective an optimal visual identities for individuals, companies and organizations of all sizes around the world.
                 Start scrolling and learn more about me and my spectacular works.
              </h3>           
     
                    <hr id="hr2"/> <br/> <br/>

              <div className='div2i'>

                  <a href="https://www.github.com/muelji" className="fa fa-github">.</a>
                  <a href="https://www.twitter.com" className="fa fa-twitter">.</a>
                  <a href="https://wwww.instagram.com" className="fa fa-linkedin">.</a>
              
              </div>
    
    
         </div>
     

    </div>
    <Aboutme/>
    <Career/>
    <Work/>
    <Test/>
    <Footer/>
              
    </div>
  )
}

export default NavBar