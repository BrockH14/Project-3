import React, { Component } from "react";
import Form from "../components/Form";
import Cards from "../components/Cards";
import WalmartAPI from "../controllers/Walmart";
import WalmartAPI2 from "../controllers/Walmart2";
import AmazonAPI from "../controllers/Amazon";
import TargetAPI from "../controllers/Target"

class Home extends Component {
    state = {
        saved: [],
        q: "",
        wq: [],
        results: [],
        amazonResults: [],
        walmartResults: []
    }
    getResults(){
        console.log(this.state.results);
        console.log(this.state.amazonResults);
        console.log(this.state.walmartResults);
    }

    getWalmart(){
        //console.log(this.state.wq);
        
            const walmartArr = [];

            WalmartAPI2.WalmartFind(this.state.wq).then(
                response => {
                    console.log(response);
                    var key = 0;
                    for (var i = 0; i < 15; i++) {
                        let product = 
                            {
                            title: response.data.productTitle,
                            image: response.data.imageUrlList[0],
                            price: response.data.price,
                            link: "https://www.walmart.com" + this.state.wq,
                            store: "Walmart",
                            uniqueKey: key++
                            }
                        walmartArr.push(product);
                        this.setState({
                            walmartResults: walmartArr
                        })
                        this.getResults();
                    }
            }).catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ q: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();

        WalmartAPI.WalmartFindURL(this.state.q)
        .then(
            res => {
                console.log(res);
                const urlArr = [];
                for (var i = 0; i < 15; i++) {
                    let url = res.data.foundProducts[i]
                    urlArr.push(url);
                    this.setState({
                        wq: urlArr
                    })
                    this.getWalmart();
            }
        }).catch(err => console.log(err));

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
                            storeName: "Target",
                            uniqueKey: i
                            }
                        itemArr.push(product);
                        //console.log(product)
                        this.setState({
                            results: itemArr
                        })
                        this.getResults();
                      }
            }).catch(err => console.log(err));
        
        const amazonItemArr = [];

        AmazonAPI.AmazonFind(this.state.q).then(
            response => {
                for (var i = 0; i < 15; i++) {
                    let amazonItem = {
                        title: response.data.search_results[i].title,
                        image: response.data.search_results[i].image,
                        price: response.data.search_results[i].prices[0].raw,
                        link: response.data.search_results[i].link,
                        store: "Amazon",
                        uniqueKey: i
                      }
                      amazonItemArr.push(amazonItem);
                      this.setState({
                          amazonResults: amazonItemArr
                      })
                      this.getResults();
                }
            }).catch(err => console.log(err));
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
                amazonResults={this.state.amazonResults}
                walmartResults={this.state.walmartResults}
                />
            </div>
    )
    }
}

export default Home;
