import React from 'react'
//import' ./App.css';
import NavBar from './Component/NavBar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './Pages/About';
import Support from './Pages/Support';
import Platform from './Pages/Platform';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <Router>
      <NavBar/>

      <Routes>

        <Route path='/' element= {<Home/>} />

        <Route path='/about' element= {<About/>} />
        <Route path='/support' element= {<Support/>}/>
        <Route path='/platform' element= {<Platform/>}/>
        <Route path='/pricing' element= {<Pricing/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>

       

        </Routes>
      <Footer/>
    </Router>

  )
}

export default App
