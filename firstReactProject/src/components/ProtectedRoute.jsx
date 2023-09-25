import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute(props) {
    const {user} = useContext(AuthContext);
    console.log('props :>> ', props);
  // this bouncer will check you and let you in or not
  return (
    <div>
      
      {user ? props.children : <h2>sorry but you are not allowed here</h2>}
    </div>
  );
}

export default ProtectedRoute;
