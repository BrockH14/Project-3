import React, { Component } from "react";
import Form from "../components/Form";
import { render } from "@testing-library/react";

class Home extends Component {
    state = {
        saved: [],
        q: "",
    }

    render() {
    return (
        <div>
            <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
            />
        </div>
    )
    }
}

export default Home;