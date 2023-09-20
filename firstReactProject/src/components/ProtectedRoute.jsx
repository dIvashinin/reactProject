import React, { useContext } from 'react';

function ProtectedRoute(props) {
  
    // this bouncer will check you and let you in or not
    return (
    <div>
        <h2>sorry but you are not allowed here</h2>
    </div>
  );
}

export default ProtectedRoute;