import React from 'react'
import p from '../Assets/images/parrot.jpg'
import "./Test.css"



function Test() {
  return (
    <div>
    <div className='gentest'>
         <div className='gen1'>
             <div className='hdiv'>Hear What My Clients Have to Say About my Works</div>
             <div className='divtest'>
                  <div>
                      <img src={p} alt="p1" className='imgp' />
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt possimus accusamus ipsam! Tempore dolorem iure doloribus sapiente culpa at consectetur nihil blanditiis veniam debitis? Esse modi molestias ducimus cupiditate laborum.</p>

                  </div>
                  <div>
                     <img src={p} alt="p2" className='imgp' />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, similique! Provident beatae praesentium ipsam sed, eos vel autem sint facilis repudiandae aliquid. Esse perspiciatis ut cum beatae, temporibus voluptas placeat?</p>
                  </div>
             </div> 
       </div>
    </div>
    
    </div>
  )
}

export default Test;