import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../config/firebaseConfig";

function Login() {
  const { login, user, logout } = useContext(AuthContext);
  // console.log('contextValue :>> ', contextValue);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("email :>> ", email);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("password :>> ", password);
  };

  const handleLogin = (event) => {
    // to prevent default behaviour of Submit form which is: refresh page after click!
    event.preventDefault();
    // console.log('email, password :>> ', email, password);
    if (user) {
      // If a user is already logged in, trigger the logout function
      logout();
    } else {
      // If no user is logged in, trigger the login function
      login(email, password);
      // contextValue.register(email, password);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          id="email"
          placeholder="your e-mail here"
          onChange={handleEmailChange}
        />
        <label htmlFor="email"> Email</label> <br />
        <input
          type="password"
          id="password"
          placeholder="your password here"
          onChange={handlePasswordChange}
        />
        <label htmlFor="password"> Password</label> <br />
        {/* button is of type "submit" by default */}
        {/* Depending on the user's login state, we either display "Login" or "Logout" 
         as the button text and handle the appropriate action accordingly when the button is clicked. */}
        <button>{user ? "Logout" : "Login"}</button>
      </form>
    </>
  );
}

export default Login;
