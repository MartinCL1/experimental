import React from "react";
import './login.css'
import { Link } from "react-router-dom";

function Login(){
    const universityName = 'Here'

    return (
        <div className="login">
            <div className="panel"></div>
            <div className="circle"></div>

            <form className="login-container">
                <h2>Welcome to {universityName}</h2>
                <p>Log in to know more about your courses.</p>

                <div className="info-container">
                    <input type="text" placeholder="Enter your username"/>
                    <input type="password" placeholder="Enter your password"/>
                </div>

                <Link to={'/home'} className="login-buttom">Log In</Link>
            </form>
        </div>
    )
}

export default Login;