import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { AuthProvider } from './Components/AuthProvider';
import { PrivateRoute } from './Components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
       <div>
        {" "}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route 
            path='/Home' 
            element={
              <PrivateRoute>
                 <Home/>
              </PrivateRoute>
            } /> 
        </Routes>
       </div>
     </AuthProvider>
  );
}

export default App;
