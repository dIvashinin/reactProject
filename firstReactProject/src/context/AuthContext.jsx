import { ReactNode, createContext, useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../config/firebaseConfig";

const AuthInitContext = {};

//1-create context
export const AuthContext = createContext(AuthInitContext);

//2-define the provider component

export const AuthContextProvider = ({children}) => {
 // Declare here the states and functions you want to export/make available
 const [user, setUser] = useState(null); 

 const logout = () =>{
    setUser(null);
 };

const register = (email, password) => {
console.log('email, password :>> ', email, password);
createUserWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('register success :>> ', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};
const contextValue = {user, setUser, logout,register};
 
 return (
    <AuthContext.Provider value ={contextValue}>
        {children}
    </AuthContext.Provider>
 );
};

