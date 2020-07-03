import React, { Component } from "react";
import Form from "../components/Form";
import { render } from "@testing-library/react";

class Home extends Component {
    state = {
        saved: [],
        q: "",
    }

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.get().then(res => this.setState({
            saved: res.data
        }).catch(err => console.log(err)));
        console.log(“this is the saved state.“);
        console.log(this.state.saved);
        console.log(this.state.q);
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
