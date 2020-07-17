import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register(props) {

    return (
        <div>
            <Navbar />
            <div className="register-user">
                <div className="form-container">
                    <form class="pure-form" method="post" action="/register">
                    <h2 className="text-center">Register</h2>
                        <fieldset class="pure-group">
                            <input type="text" class="pure-input-1" placeholder="Username" />
                            <input type="text" class="pure-input-1" placeholder="Password" />
                            <input type="email" class="pure-input-1" placeholder="Email" />
                        </fieldset>
                        <button type="submit" class="pure-button pure-input-1 pure-button-primary">Sign in</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;