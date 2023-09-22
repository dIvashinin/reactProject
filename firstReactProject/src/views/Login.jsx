import React, { useContext, useState } from 'react';
import {AuthContext} from "../context/AuthContext";
import { auth } from '../config/firebaseConfig';

function Login() {
    const {login} = useContext (AuthContext);
    // console.log('contextValue :>> ', contextValue);
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log('email :>> ', email);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log('password :>> ', password);
    };

    const handleLogin = (event) => {
        // to prevent default behaviour of Submit form which is: refresh page after click!
        event.preventDefault();
        // console.log('email, password :>> ', email, password);
        login (email, password);
        // contextValue.register(email, password);
    };

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
        <input type="text" id='email' placeholder='your e-mail here' onChange={handleEmailChange}/>
        <label htmlFor="email"> Email</label> <br />
        <input type="password" id='password' placeholder='your password here' onChange={handlePasswordChange}/>
        <label htmlFor="password"> Password</label> <br />
         {/* button is of type "submit" by default */}
        <button>Login</button>
    </form>
    </>
  )
}

export default Login;