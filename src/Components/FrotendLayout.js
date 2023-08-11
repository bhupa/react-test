import React, { PureComponent } from 'react';
import Navabr from './Frontend/inc/Navbar';
import Footer from './Frontend/inc/Footer';
import { BrowserRouter as Router, Route,Routes, Switch,Link } from 'react-router-dom';
function FrotendLayout ({ children }) {
   
        return (
            
            <div>
                <Navabr />
                <div className="content">{children}</div>
                <Footer />
                
            </div>
            
        );
}



export default FrotendLayout;