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

// here the original from google, we will transform it into async/ await
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

// redoing it in async/await
try {
    const userCredential = await createUserWithEmailAndPassword (auth, email, password);
    
    const user = userCredential.user;
            console.log('register success :>> ', user);
    
} catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('register went wrong :>> ', error);   
}

};
const contextValue = {user, setUser, logout,register};
 
 return (
    <AuthContext.Provider value ={contextValue}>
        {children}
    </AuthContext.Provider>
 );
};

