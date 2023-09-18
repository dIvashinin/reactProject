import React from 'react'
import {useRouteError} from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log('error :>> ', error);
  return (
    <>
    <h2>Looks like you you're not supposed to be here. Pls check what you have typed</h2>
    <h3>{error.error.message}</h3>
    
    </>
  );
}

export default ErrorPage