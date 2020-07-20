import React, { Component } from "react";
import Form from "../components/Form";
import Cards from "../components/Cards";
import WalmartAPI from "../controllers/Walmart";
import WalmartAPI2 from "../controllers/Walmart2";
import AmazonAPI from "../controllers/Amazon";
import TargetAPI from "../controllers/Target";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

class Home extends Component {
    state = {
        saved: [],
        q: "",
        wq: [],
        results: [],
        amazonResults: [],
        walmartResults: [],
        uniqueKey: 0,
        isLoggedIn: false
    }

    getWalmart(){
            const walmartArr = [];
            for (var i = 0; i < 15; i++) {
                WalmartAPI2.WalmartFind(this.state.wq[i]).then(
                    // eslint-disable-next-line no-loop-func
                    response => {
                            let product = 
                                {
                                title: response.data.productTitle,
                                image: response.data.imageUrlList[0],
                                price: "$" + response.data.price,
                                link: "https://www.walmart.com" + this.state.wq[i],
                                store: "Walmart",
                                storeLogo: "fas fa-star-of-life walmart-name",
                                // eslint-disable-next-line
                                uniqueKey: this.state.uniqueKey++
                                }
                            walmartArr.push(product);
                            this.setState({
                                walmartResults: walmartArr
                            })
                }).catch(err => console.log(err));
        }
  }

  handleInputChange = (event) => {
    this.setState({ q: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    WalmartAPI.WalmartFindURL(this.state.q)
      .then((res) => {
        const urlArr = [];
        for (var i = 0; i < 15; i++) {
          let url = res.data.foundProducts[i];
          urlArr.push(url);
          this.setState({
            wq: urlArr,
          });
        }
        this.getWalmart();
      })
      .catch((err) => console.log(err));

    const itemArr = [];
        TargetAPI.TargetFind(this.state.q).then(
                response => {
                    for (var i = 0; i < 15; i++) {
                        let product = 
                            {
                            title: response.data.products[i].title,
                            image: response.data.products[i].images[0].base_url + response.data.products[i].images[0].primary,
                            price: response.data.products[i].price.formatted_current_price,
                            link: "https://www.target.com" + response.data.products[i].url,
                            store: "Target",
                            storeLogo: "fas fa-bullseye target-logo",
                            // eslint-disable-next-line
                            uniqueKey: this.state.uniqueKey++
                            }
                        itemArr.push(product);
                        this.setState({
                            results: itemArr
                        })
                      }
            }).catch(err => console.log(err));
        
        const amazonItemArr = [];
        AmazonAPI.AmazonFind(this.state.q).then(
            response => {
                for (var i = 0; i < 15; i++) {
                    if (response.data.search_results[i].prices){
                        let amazonItem = {
                            title: response.data.search_results[i].title,
                            image: response.data.search_results[i].image,
                            price: response.data.search_results[i].prices[0].raw,
                            link: response.data.search_results[i].link,
                            store: "Amazon",
                            storeLogo: "fab fa-amazon amazon-logo",
                            // eslint-disable-next-line
                            uniqueKey: this.state.uniqueKey++
                        }
                        amazonItemArr.push(amazonItem);
                        this.setState({
                            amazonResults: amazonItemArr
                        })
                    }
                    else{
                        console.log("no price");
                    }
                }
            }).catch(err => console.log(err));
    }
handleFormSaveA = data => {
    API.saveItem({
        id: data.uniqueKey,
        title: data.title,
        price: data.price,
        image: data.image,
        link: data.link,
        store: data.store,
        storeLogo: data.storeLogo
      })
        .catch(err => console.log(err));
        alert("You saved an item!");
}
handleFormSaveT = data => {
    API.saveItem({
        id: data.uniqueKey,
        title: data.title,
        price: data.price,
        image: data.image,
        link: data.link,
        store: data.store,
        storeLogo: data.storeLogo
      })
        .catch(err => console.log(err));
        alert("You saved an item!");
}
handleFormSaveW = data => {
    API.saveItem({
        id: data.uniqueKey,
        title: data.title,
        price: data.price,
        image: data.image,
        link: data.link,
        store: data.store,
        storeLogo: data.storeLogo
      })
        .catch(err => console.log(err));
        alert("You saved an item!");
}
    render() {
        return (
            <div>
                <Navbar>
                </Navbar>
                <Jumbotron>
                    <h1 className="display-4">Shopalooza</h1>
                    <br />
                    <p className="lead">Compare and Shop for all your favorite items!</p>
                </Jumbotron>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    q={this.state.q}
                />
                <Cards 
                results={this.state.results}
                amazonResults={this.state.amazonResults}
                walmartResults={this.state.walmartResults}
                handleFormSaveA={this.handleFormSaveA}
                handleFormSaveT={this.handleFormSaveT}
                handleFormSaveW={this.handleFormSaveW}
                />
                <br></br>
                <br></br>
            </div>
    )}
}

export default Home;
