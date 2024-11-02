import React from 'react'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () =>{
        login();
    };

    return (
        <div className='login'>
            <div className="cart">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Welcome to our social platform, a space where you can connect, 
                       share experiences, and express yourself through posts, images, 
                       and stories, while engaging with a diverse community.
                    </p>
                    <span>Don't you have an Account ?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username'/> 
                        <input type="password" placeholder='Password'/> 
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
