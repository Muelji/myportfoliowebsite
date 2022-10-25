import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='genfoot'>
        
       <div className='divf'>
       <h2>Say hello</h2>
             <div className='divfoot'>
              <div>
              <span> Have a new project in mind? Let's collaborate and build something awesome. Let's turn that idea to an even greater product </span>

              </div>

              <div>
              <span id="email"> Email</span> <br/>
                 <b>muelinx@gmail.com</b><br/><br/><br/>
                <span id="email">Phone</span> <br/>
                <span>+2348185470198</span> <br/> <br/>
                 <div className="letstalk"> LET'S TALK</div>
                
              </div>
              </div>

       </div>

    </div>
  )
}

export default Footer;