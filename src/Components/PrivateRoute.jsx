import React from 'react'
import { Navigate, Route, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const PrivateRoute = ({ component: Component, allowedRoles, ...rest})  =>{
    const auth = useAuth();
    let location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.token) {
          return <Navigate to='/' state={{ from: location}} replace />;
       }
       if (!allowedRoles.includes(auth.role)) {
        return <Navigate to='/' state={{from: location}} replace />;
       }   
        return <Component {...props} />
      }}
    />
  );
}

export default PrivateRoute;