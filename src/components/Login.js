import React from "react";

function Login(props) {
  const { homePage, history } = props;

  return (
    <div>
      {console.log("homePage is: ", homePage)}
      <h1>Login</h1>
    </div>
  );
}

export default Login;
