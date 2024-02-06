import React, { useState } from "react";
import { createContext,useContext } from "react"
import { authGetToken } from "../auth"
import { useNavigate} from "react-router-dom";

let AuthContext = createContext(null);

export function AuthProvider({ children }) {

  let [token, setToken] = useState(null);
  let [role, setRole] = useState(null);
  let navigate = useNavigate();

  let signin = async(email,password) => {
      const { token, role } = await authGetToken(email, password);
      setToken(token);
      setRole(role);
      localStorage.setItem("qtoken", token);
      localStorage.setItem("qrole", role);

      if (role === "doctor"){
              return navigate('/Dashboard')
      } else {
              return navigate ('/Doctors')
      }
    
    }
  

  let signout = () => {
      setToken(null);
      setRole(null);
      localStorage.removeItem("qtoken");
      localStorage.removeItem("qrole");
      return navigate("/")
    };
  ;

  let value = { token, role, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



export function useAuth() {
  return useContext(AuthContext);
}
