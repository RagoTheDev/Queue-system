import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export function PrivateRoute ({ children}) {
    const auth = useAuth();
    let location = useLocation();

    if (!auth.token) {
    return <Navigate to='/' state={{ from: location}} replace />;
 }
  return children;
}
