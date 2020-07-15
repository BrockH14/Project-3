import React from "react";

function Register(props) {

    return (

        <div className="register-user">
            <div className="form-container">
                <form method="post" action="/register">
                    <h2 className="text-center">Register</h2>
                    <div className="form-group">
                        <label form="name">Name</label> <input type="text" className="form-control" id="name" name="name" placeholder="Name"></input>
                    </div>
                    <div className="form-group">
                        <label form="email">Email</label> <input type="email" className="form-control" id="email" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <label form="password">Password</label><input type="password" className="form-control" id="password" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Register;