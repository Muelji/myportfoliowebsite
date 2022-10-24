import React from 'react'
import t1 from '../Assets/images/birthday.jpg'
import t2 from '../Assets/images/blog.jpg'
import t3 from '../Assets/images/deewanfolior.jpg'
import t4 from '../Assets/images/reviews.jpg'

import "./Test.css"


function Test() {
  return (
    <div>
      <div>
         
         <div>
              <h2>A Few Of My Latest Works</h2>
              <div>
                 <img src={t1} alt="t1" /><img src={t2} alt="t2" /><img src={t3} alt="t3" /><img src={t4} alt="t4" />
              </div>
         </div>
         
         <div>


         </div>
      </div>
    </div>
  )
}

export default Test