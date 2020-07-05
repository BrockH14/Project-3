import React, { Component } from "react";
import Form from "../components/Form";
import Cards from "../components/Cards";
import WalmartAPI from "../controllers/Walmart";
import AmazonAPI from "../controllers/Amazon";
import TargetAPI from "../controllers/Target"

class Home extends Component {
    state = {
        saved: [],
        q: "",
        results: []
    }
    getResults(){
        console.log(this.state.results);
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

        const itemArr = [];

        TargetAPI.TargetFind(this.state.q).then(
                response => {
                    for (var i = 0; i < 15; i++) {
                
                        let product = 
                            {
                            title: response.data.products[i].title,
                            image: response.data.products[i].images[0].base_url + response.data.products[i].images[0].primary,
                            price: response.data.products[i].price.formatted_current_price,
                            link: "target.com" + response.data.products[i].url,
                            storeName: "Target"
                            }
                        itemArr.push(product);
                        //console.log(product)
                        this.setState({
                            results: itemArr
                        })
                        this.getResults();
                      }
            }).catch(err => console.log(err));

        

        // AmazonAPI.AmazonFind(this.state.q).then(
        //     res => {
        //         this.setState({
        //         results: res
        //     })
        // }).catch(err => console.log(err));
            
        
    }
    
    render() {
        return (
            <div>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
                <Cards 
                results={this.state.results}
                />
            </div>
    )
    }
}

export default Home;
