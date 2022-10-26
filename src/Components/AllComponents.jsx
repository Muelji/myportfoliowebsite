import React from 'react';
import AboutMe from './Components/AboutMe';
import Career from './Components/Career';
import NavBar from './Components/NavBar';
import Test from './Components/Test';
import Work from './Components/Work';
import Footer from './Components/Footer';


function AllComponents() {
  return (
    <div>
        <NavBar/>
        <AboutMe/>
        <Career/>
        <Test />
        <Work/>
        <Footer/>
    </div>
  )
}

export default AllComponents