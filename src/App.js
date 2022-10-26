
import './App.css';
import AboutMe from './Components/AboutMe';
import Career from './Components/Career';
import NavBar from './Components/NavBar';
import Test from './Components/Test';
import Work from './Components/Work';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
        <Router>
            <Routes>
                 <Route path='/' element={<NavBar/>}/>
                 <Route path='/about-me' element={<AboutMe/>}/>
                 <Route path='/career' element={<Career/>}/>
                 <Route path='/work' element={<Work/>}/>
                 <Route path='/test' element={<Test/>}/>
                 <Route path='/footer' element={<Footer/>}/>
             </Routes>
        </Router>


    </div>
  );
}


export default App;
