import React, { useState } from 'react'
import { createContext, useContext } from 'react';
import { authGetToken } from "../auth.js";
import { useNavigate } from 'react-router-dom';

let AuthContext = createContext(null);

export function AuthProvider({ children }) {
    let [token, setToken] = useState(null);
    let navigate = useNavigate();

    let signin = async(email, password) => {
        const token = await authGetToken(email,password)
        setToken(token);
        return navigate("/Home")
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
