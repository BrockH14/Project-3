// import React from "react"; 

// function LoginButton() {
//     return (
//         <a className="nav-link" href="/login">Login</a>
//     );
// }

// export default LoginButton;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;