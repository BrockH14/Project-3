import React, { Component } from "react";
import Form from "../components/Form";
import { render } from "@testing-library/react";
import API from "../utils/API";
import WalmartAPI from "../controllers/Walmart";
import AmazonAPI from "../controllers/Amazon";

class Home extends Component {
    state = {
        saved: [],
        q: "",
        results: []
    }

    handleInputChange = event => {
        this.setState({ q: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        // API.get().then(res => this.setState({
        //     saved: res.data
        // }).catch(err => console.log(err)));
        // console.log("this is the saved state.");
        // console.log(this.state.saved);
        AmazonAPI.AmazonFind(this.state.q).then(
            res => {
                this.setState({
                results: res
            })
        }).catch(err => console.log(err));
            
        console.log(this.state.results);
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
