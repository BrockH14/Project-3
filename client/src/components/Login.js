import React from "react";


function Login(props) {
    return (   
        <div className="form-container">
            <h1 className="display-4 justify-content-center">Sign in</h1>
            <form class="pure-form">
                <fieldset class="pure-group">
                    <input type="email" class="pure-input-1" placeholder="Email" />
                    <input type="text" class="pure-input-1" placeholder="Password" />
                </fieldset>
                <button type="submit" class="pure-button pure-input-1 pure-button-primary">Login</button>
            </form>
        </div>
    );
  }
  
  export default Login;