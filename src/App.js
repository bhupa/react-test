import './App.css';

import React from 'react';
import Home from '../src/Components/Frontend/Home/Home';
import About from '../src/Components/Frontend/About';
import Contact from '../src/Components/Frontend/Contact';
import Navabr from '../src/Components/Frontend/inc/Navbar';
import { BrowserRouter as Router, Route,Routes, Switch,Link } from 'react-router-dom';
import Footer from '../src/Components/Frontend/inc/Footer';
import Admin from './Components/backend/Admin';
import Dashboard from './Components/backend/Dashboard';


 class App extends React.Component {
  styles = {
    fontStyle : "bold",
    color : "teal"
  };
  render(){
      return (
      
          <div >
{/*             
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Dashboard />} /> */}
              
      
          </div>
          
      
         
      );
  }
}

export default App;
