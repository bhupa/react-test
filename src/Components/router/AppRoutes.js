import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../backend/Dashboard';
import Categories from '../backend/categories/Categories';

function AppRoutes () {

        return (
           <Routes>
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/categories" element={<Categories />} />
           </Routes>
        );
    
}

export default  AppRoutes;