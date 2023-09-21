import { ReactNode, createContext, useState } from "react";

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
};
const contextValue = {user, setUser, logout,register};
 
 return (
    <AuthContext.Provider value ={contextValue}>
        {children}
    </AuthContext.Provider>
 );
};

