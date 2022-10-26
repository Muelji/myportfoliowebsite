import React from 'react';
import AboutMe from './AboutMe';
import Career from './Career';
import NavBar from './NavBar';
import Test from './Test';
import Work from './Work';
import Footer from './Footer';


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