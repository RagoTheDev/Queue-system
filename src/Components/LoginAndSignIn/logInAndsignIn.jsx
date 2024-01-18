import React, { useState } from 'react'
import { useAuth } from "../../Components/AuthProvider"
import login from '../../Images/login.png'
import './Loginsignin.css'

function LogInAndsignIn() {

    let auth = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    function handleChange (e) {
        const {name, value} =e.target
        setForm({...form, [name]: value});
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email !== "" && form.password !== "") {
          auth.signin(form.email, form.password);
          return;
        }
        alert("please provide a valid input")
    };

    return (
        <div className='loginandsignin'>
            <div className='login--header'>
                <h1>Q Easy</h1>
                <p>Efficiency in Line, Precision in Time: </p>
                <img src={login} alt="loginimage" />
            </div>

            <div className='loginsignin'>
                <div className='login--text'>
                    <h5>Welcome Back!</h5>
                
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='login--inputs'>
                         
                        <input
                            type='email'
                            className='input'
                            placeholder='Email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                        />
                    
                        <input
                            type='password'
                            className='input'
                            placeholder='Password'
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                        />
                    
                    <div className='forgot--password'> Forgot Password?</div>
                            <button
                            type='submit'
                            className='submit'
                            >
                            Login
                            </button>
                    </div>        
                </form>
            </div>
        </div>
    )
}

export default LogInAndsignIn
