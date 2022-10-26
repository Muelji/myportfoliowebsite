import React from 'react';
import "./NavBar.css";
import { Link,} from 'react-router-dom';
import Aboutme from './AboutMe';
import Career from './Career';
import Work from './Work';
import Test from './Test';
import Footer from './Footer';


function NavBar() {
  return (
    <div>
  <div className='navdiv'>
       <div class="div1">
               <nav class="navbar">
                 <ul>
                  <Link to='/'><li>Home</li></Link>
                  <Link to='/about-me'><li>About</li></Link>
                  <Link to='/career'><li>Resume</li></Link>
                  <Link to='/work'><li>Works</li></Link>
                  <Link to='/test'><li>Testimonials</li></Link>
                  <Link to='/footer'><li>Say Hello</li></Link>
                </ul>      
              </nav>

        </div>
          <div className='div2'>
              <h1> I'm Muelji Damos</h1>
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