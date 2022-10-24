import React from 'react'
import Footer from './Footer'
import p from '../Assets/images/parrot.jpg'
import "./Test.css"



function Test() {
  return (
    <div className='gentest'>
       <div className='divtest'>
            <div>
                <img src={p} alt="p1" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt possimus accusamus ipsam! Tempore dolorem iure doloribus sapiente culpa at consectetur nihil blanditiis veniam debitis? Esse modi molestias ducimus cupiditate laborum.</p>

            </div>
            <div>
                <img src={p} alt="p2" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, similique! Provident beatae praesentium ipsam sed, eos vel autem sint facilis repudiandae aliquid. Esse perspiciatis ut cum beatae, temporibus voluptas placeat?</p>
            </div>

       </div>
      <Footer/>
    </div>
  )
}

export default Test