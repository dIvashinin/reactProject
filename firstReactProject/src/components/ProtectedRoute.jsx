import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute(props) {
    const {user} = useContext(AuthContext);
    console.log('props :>> ', props);
  // this bouncer will check you and let you in or not
  return (
    <div>
      {/* if user is true we go to children, if not we see message sorry... */}
      {user ? props.children : <h2>sorry but you are not allowed here <br /> please register and login first</h2>}
    </div>
  );
}

export default ProtectedRoute;
