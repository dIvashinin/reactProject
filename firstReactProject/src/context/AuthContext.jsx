import { ReactNode, createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const AuthInitContext = {};

//1-create context
export const AuthContext = createContext(AuthInitContext);

//2-define the provider component

export const AuthContextProvider = ({ children }) => {
  // Declare here the states and functions you want to export/make available
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };

  // here the original from google, we will transform it into async/ await below
  // const register = (email, password) => {
  // console.log('email, password :>> ', email, password);
  // createUserWithEmailAndPassword (auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log('register success :>> ', user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  // redoing it in async/await
  const register = async (email, password) => {
    // console.log('email, password :>> ', email, password);
    // createUserWithEmailAndPassword (auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log('register success :>> ', user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log('register went wrong :>> ', error);
    //   });

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("register success :>> ", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("register went wrong :>> ", error);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("login success :>> ", user);
      //now we updating the null user by setting user to a logged user
      setUser(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("login went wrong :>> ", error);
      console.log("errorCode :>> ", errorCode);
    }
  };

  const contextValue = { user, setUser, logout, register, login };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
