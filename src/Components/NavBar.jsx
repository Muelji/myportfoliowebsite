import React from 'react'
import "./NavBar.css"
function NavBar() {
  return (
    <div className='navdiv'>
<div class="div1">
        <nav class="navbar">
           <ul>
               <li>Home</li>
               <li>About</li>
               <li>Resume</li>
               <li>Works</li>
               <li>Testimonials</li>
               <li>Say Hello</li>
           </ul>      
        </nav>

     </div>
     <div className='div2'>
           <h1> I'm Muelji Damos, aka MJ.</h1>
           <h3> I'm an <b> Front-End Developer,</b> Chemical Engineer, a <b>visionary</b> and a creative, who has the sole passion of creating 
               effective an optimal visual identities for individuals, companies and organizations of all sizes around the world.
                Start scrolling and learn more about me and my spectacular works.
            </h3>           
     
                    <hr/> <br/> <br/>

            <div className='div2i'>

               <a href="https://www.github.com/muelji" className="fa fa-github">.</a>
                <a href="https://www.twitter.com" className="fa fa-twitter">.</a>
                <a href="https://wwww.instagram.com" className="fa fa-linkedin">.</a>
              
            </div>
    
    
    </div>
     


    </div>
  )
}

export default NavBar