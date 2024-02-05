import React from 'react';
import './App.css';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import { AuthProvider } from './Components/AuthProvider';
import PrivateRoute  from './Components/PrivateRoute';
import Doctors from './Pages/Doctors';


const App = () => {
  return ( 
    <AuthProvider>
      <div>
        {''}
      <Routes>
          <Route path='/' element={<Login />} />

          <Route
          path='Dashboard'
          component={
          <PrivateRoute
            allowedRoles={['doctor']}>
              <Dashboard />  
          </PrivateRoute>
          }
          />
          <Route
          path='Doctors'
          component={
          <PrivateRoute
            allowedRoles={['nurse']}>
              <Doctors/>
          </PrivateRoute>
          }
          />
      </Routes>
      </div>
      </AuthProvider>
  );
};

export default App;
