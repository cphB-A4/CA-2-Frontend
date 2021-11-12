import React, {useState, useEffect} from 'react';

// function LoggedIn() {
  // const [dataFromServer, setDataFromServer] = useState("Loading...");
  // const [errorMsg, setErrorMsg] = useState("All is good");

  // useEffect(() => {
  //   facade
  //     .fetchData()
  //     .then((data) => setDataFromServer(data.msg))
  //     .catch((err) => {
  //       if (err.status) {
  //         err.fullError.then((e) => setErrorMsg(e.code + ": " + e.message));
  //       } else {
  //         console.log("Network error");
  //       }
  //     });
  // }, []);

//   return (
//     <div>
//       <h2>Data Received from server</h2>
//       <h3>{dataFromServer}</h3>
//       <p>{errorMsg}</p>
//     </div>
//   );
// }


function Login(props) {
  const {login, facade,loggedIn, logout, dataFromServer, errorMsg } = props
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  // const [dataFromServer, setDataFromServer] = useState("Loading...");
  // const [errorMsg, setErrorMsg] = useState("All is good");

  // useEffect(() => {
  //   facade
  //     .fetchData()
  //     .then((data) => setDataFromServer(data.msg))
  //     .catch((err) => {
  //       if (err.status) {
  //         err.fullError.then((e) => setErrorMsg(e.code + ": " + e.message));
  //       } else {
  //         console.log("Network error");
  //       }
  //     });
  // }, []);





  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);



    // facade
    //   .fetchData()
    //   .then((data) => setDataFromServer(data.msg))
    //   .catch((err) => {
    //     if (err.status) {
    //       err.fullError.then((e) => setErrorMsg(e.code + ": " + e.message));
    //     } else {
    //       console.log("Network error");
    //     }
    //   });
  };





  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
  
    });
  };

  return (
    <div>





{loggedIn ? "" : <div>
<h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
</div> }






    
      <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
      <p>{errorMsg}</p>


{loggedIn ? <button onClick={logout}>Logout</button> : "" }




    </div>

    </div>
  );
}

export default Login;
