import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import Aboutme from './AboutMe';
import Career from './Career';
import Work from './Work';
import Test from './Test';
import Footer from './Footer';
import Home from './Home';


function NavBar() {
  return (
    <div>
  <div className='navhome'>
     <div>
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


    </div>
    <Home/>
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