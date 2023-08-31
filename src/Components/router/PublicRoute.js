import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
  const { token } = useSelector(state => state.user);

  return token ? <Navigate to="/" /> : element;
};

export default PublicRoute;