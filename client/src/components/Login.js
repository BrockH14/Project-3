import React from "react";

function Login(props) {
    return (
        
        <div className="row">
            <div className="login-dark">
                <form method="post" action="/login">
                    <h2 className="text-center">Login</h2>
                    < div className="form-group">
                         <input class="form-control" name="email" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>

    );
  }
  
  export default Login;