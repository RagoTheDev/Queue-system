import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import { AuthProvider } from './Components/AuthProvider';
import {RequireDoctor}  from './Components/RequireDoctor';
import { RequireNurse } from './Components/RequireNurse';
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
          element={
          <RequireDoctor>
              <Dashboard />  
          </RequireDoctor>
          }
          />
          <Route
          path='Doctors'
          element={
          <RequireNurse>
              <Doctors/>
          </RequireNurse>
          }
          />
      </Routes>
      </div>
      </AuthProvider>
  );
};

export default App;
