import React, { useState } from 'react'

function Register() {
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
  return (
    <>
    <h1>Register</h1>
    <form action="">
        <input type="text" id='email' onChange={handleEmailChange}/>
        <label htmlFor="email">Email</label>
        <input type="password" id='password' onChange={handlePasswordChange}/>
        <label htmlFor="password">Password</label>
    </form>
    </>
  )
}

export default Register