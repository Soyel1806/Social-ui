import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Connect Social.</h1>
                    <p>Welcome to our social platform, a space where you can connect, 
                       share experiences, and express yourself through posts, images, 
                       and stories, while engaging with a diverse community.
                    </p>
                    <span>Do you have an Account ?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder='Username'/> 
                        <input type="email" placeholder='Email'/> 
                        <input type="password" placeholder='Password'/>
                        <input type="text" placeholder='Name'/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register
