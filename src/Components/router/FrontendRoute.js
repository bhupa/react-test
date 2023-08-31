import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Frontend/Home/Home';
import Categories from '../backend/categories/Categories';
import About from '../Frontend/About';


function FrontendRoute () {
    return (
        <div>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} /> 
        </div>
     );
}
export default FrontendRoute;