import React, { PureComponent } from 'react';
import Navabr from './Frontend/inc/Navbar';
import Footer from './Frontend/inc/Footer';
import { Outlet } from 'react-router-dom';
function FrotendLayout ({ children }) {
   
        return (
            
            <div>
                <Navabr />
                 <Outlet />
                <Footer />
                
            </div>
            
        );
}



export default FrotendLayout;