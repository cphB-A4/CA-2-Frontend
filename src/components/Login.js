import React, { useState, useEffect } from "react";

function Login(props) {
  const { login, errorMsg} = props;
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onChange={onChange}>
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={handleSubmit}>Login</button>
        </form>
        {errorMsg === "" ? "" : <p>{errorMsg}</p>}
      </div>
    </div>
  );
}

export default Login;
