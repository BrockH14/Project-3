import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";


class Log extends Component {
    state = {
        savedItem: [],
        results: [],
    }

    render() {
        return (
            <div>
                <Navbar>
                    {this.state.isLoggedIn
                    ? <LogoutButton onClick={this.handleLogout} />
                    : <LoginButton onClick={this.handleLogin} />
                    }
                </Navbar>
                <Jumbotron>
                <Login>
                </Login>
                </Jumbotron>
                

            </div>
        )
    }

}

export default Log;