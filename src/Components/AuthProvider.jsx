import React, { useState } from 'react'
import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';


let AuthContext = createContext(null);

export function AuthProvider({ children }) {
    let [token, setToken] = useState(null);
    let navigate = useNavigate();

    const signin = async (email, password) => {
        try {
          const response = await fetch("https://appt.eadevs.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
          });
          const res = await response.json();
          const token = res.token ;
          console.log("this is token", token, "this is res", res)

          if (res) {
            setToken(token);
            localStorage.setItem("site", token);
            return navigate("/Home");
          }
          
        } catch (err) {
          console.error(err);
        }
      };

    let signout = () => {
        setToken(null);
        return navigate("/")
    };

    let value = {token, signin, signout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth() {
    return useContext(AuthContext)
}
