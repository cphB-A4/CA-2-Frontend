import React, { useEffect } from "react";

function Logout(props) {
  const { logout } = props;

  useEffect(() => {
    logout();
  }, []);

  return <div>Logging out....</div>;
}

export default Logout;
