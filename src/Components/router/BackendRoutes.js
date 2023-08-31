import React from 'react';
import { useSelector } from 'react-redux';
import { Routes,Route, Navigate } from 'react-router-dom';

const BackendRoutes = ({ path, element, roles }) => {
  const { token } = useSelector(state => state.user);


  if (token) {
    return element;
  } else {
    return <Navigate to="/home" />;
  }

//   // If roles are provided and the user doesn't have required roles, redirect to unauthorized page
//   if (roles && !roles.some(role => isAuthenticated && state.user.user.roles.includes(role))) {
//     return <Navigate to="/unauthorized" />;
//   }

};

export default BackendRoutes;