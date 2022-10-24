import React from 'react'
import t1 from '../Assets/images/birthday.jpg'
import t2 from '../Assets/images/blog.jpg'
import t3 from '../Assets/images/deewanfolior.jpg'
import t4 from '../Assets/images/reviews.jpg'

import "./Test.css"


function Test() {
  return (
    <div>
      <div className='divtest'>
         
         <div>
              <h2>A Few Of My Latest Works</h2>
              <div>
                 <img src={t1} alt="t1" className='imgt' /><img src={t2} alt="t1" className='imgt' /><img src={t3} alt="t1" className='imgt' /><img src={t4} alt="t1" className='imgt' />
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

export default Test