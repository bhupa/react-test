import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect,Navigate } from 'react-router-dom';
import Loader from '../Loader'
const PermissionRoute = ({  permission, children, ...rest }) => {

const [isLoading, setIsLoading] = useState(true);
  const {permissions} = useSelector(state => state.user);
  const hasCreateUserPermission = permissions.some(perms => perms.slug === permission);
  
    setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Adjust the delay as needed
    
    if(hasCreateUserPermission){
        return isLoading ? <Loader /> : children;
    }
    return  (<Navigate to="/" />);
   
};

export default PermissionRoute;