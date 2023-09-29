import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log("error :>> ", error);

  // useNavigate hook

  const navigateTo = useNavigate();
  console.log("navigateTo :>> ", navigateTo);
  const goHome = () => {
    navigateTo("/");
  };

  return (
    <>
      <h2>
        Looks like you you're not supposed to be here. <br /> Pls check what you have
        typed
      </h2>
      {/* <h3>{error.error.message}</h3> */}
      <button onClick={goHome}>go back</button>
    </>
  );
}

export default ErrorPage;
