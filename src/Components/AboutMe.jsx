import React from 'react'
import wizpic from '../Assets/images/wizkid.webp'
import "./AboutMe.css"


function Aboutme() {
  return (
   <div className=''>
    
        <div className='about'>
                <img src={wizpic} alt="wizpic" className="wizpic"/>
                  <div className='abouttext'>
                      <div>
                       <h2>About Me</h2>
                        <p>Hi, My name is Kamshinen Dewan, I am the CEO of Nexus Technology, a tech company in Nigeria. I am a self taught front-end developer. Aside fullstack development, I have an interest in Artificial Intelligence with a particular focus on Machine Learning, Deep Learning, Automation, Robotics and Data Science. At a personal level, I am a man of few words with a reserved, dedicated, and open-minded personality. I like to mind my business in all the things I do. I believe that a person should work on developing themselves with professional skills by learning new things all the time. This has been my guiding principle and philosophy through the years.
                        </p>
                        <br/><br/><br/>
                        <hr/>
                     </div>
                        <div>
                           <div>
                           <h2>Contact Details</h2>
                            <address>
                            Kamshinen Dewan <br/>
                            Jos, Nigeria <br/>
                            +2348108644731 <br/>
                             kjoeldewan@gmail.com
                           </address>
                           </div>
                           <div className="downloadcv"><h5>DOWNLOAD CV</h5></div>

                        </div>
                 
                  </div>
        </div>
   </div>
  )
}

export default Aboutme