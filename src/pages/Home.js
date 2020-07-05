import React, { Component } from "react";
import Form from "../components/Form";
import WalmartAPI from "../controllers/Walmart";
import AmazonAPI from "../controllers/Amazon";
import TargetAPI from "../controllers/Target"

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


        // WalmartAPI.WalmartFind(this.state.q).then(
        //     res => {
        //         this.setState({
        //         results: res
        //     })
        // }).catch(err => console.log(err));


        // TargetAPI.TargetFind(this.state.q)

        

        // AmazonAPI.AmazonFind(this.state.q).then(
        //     res => {
        //         this.setState({
        //         results: res
        //     })
        // }).catch(err => console.log(err));
            
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
