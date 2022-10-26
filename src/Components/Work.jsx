import React from 'react'
import w1 from '../Assets/images/birthday.jpg'
import w2 from '../Assets/images/blog.jpg'
import w3 from '../Assets/images/deewanfolior.jpg'
import w4 from '../Assets/images/reviews.jpg'
import "./Work.css"


function Work() {
  return (
    <div className='genwork'>
      <div className='divwork'>
         
         <div>
            A Few Of My Latest Works
              <div>
                 <img src={w1} alt="t1" className='imgd' /><img src={w2} alt="t1" className='imgd' /><img src={w3} alt="t1" className='imgd' /><img src={w4} alt="t1" className='imgd' />
              </div>
         </div>
         
         <div className='divcontact'>
               <hr id="hr2"/>
               <h3>Need a place to learn a skill in tech?</h3>
               <p>
               I highly recommend BlueHouse Technologies. BlueHouse has a team of skilled and certified experts and is offering to help anyone who would like to start a career in tech. Guaranteed.
               </p>
               <button>Contact Bluehouse</button>

         </div>
      </div>
    </div>
  )
}

export default Work;