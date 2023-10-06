import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
// import { auth } from "../config/firebaseConfig";

function Register() {
  const { register } = useContext(AuthContext);
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

  const handleRegister = (event) => {
    // to prevent default behaviour of Submit form which is: refresh page after click!
    event.preventDefault();
    // console.log('email, password :>> ', email, password);
    register(email, password);
    // contextValue.register(email, password);
  };

  return (
    <div className="register-input-container">
      <h4>
        Are you a new user? <br />
        Then please register!
      </h4>
      <form onSubmit={handleRegister}>
        <div className="register-input">
          <input
            type="text"
            id="email"
            placeholder="enter your e-mail here"
            onChange={handleEmailChange}
            autoComplete="email"
          />
          <label htmlFor="email"> </label> <br />
          <input
            type="password"
            id="password"
            placeholder="enter your password here"
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
        </div>
        <label htmlFor="password"> </label> <br />
        {/* button is of type "submit" by default */}
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
