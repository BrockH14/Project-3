import React, { Component } from "react";
import Form from "../components/Form";
import Cards from "../components/Cards";
import WalmartAPI from "../controllers/Walmart";
import WalmartAPI2 from "../controllers/Walmart2";
import AmazonAPI from "../controllers/Amazon";
import TargetAPI from "../controllers/Target";
<<<<<<< HEAD:src/pages/Home.js
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

class Home extends Component {
  state = {
    saved: [],
    q: "",
    wq: [],
    results: [],
    amazonResults: [],
    walmartResults: [],
  };
  getResults() {
    // console.log(this.state.results);
    // console.log(this.state.amazonResults);
    // console.log(this.state.walmartResults);
  }

  getWalmart() {
    var key = 0;
    const walmartArr = [];
    for (var i = 0; i < 15; i++) {
      WalmartAPI2.WalmartFind(this.state.wq[i])
        .then(
          // eslint-disable-next-line no-loop-func
          (response) => {
            let product = {
              title: response.data.productTitle,
              image: response.data.imageUrlList[0],
              price: "$" + response.data.price,
              link: "https://www.walmart.com" + this.state.wq[i],
              store: "Walmart",
              uniqueKey: key++,
            };
            walmartArr.push(product);
            this.setState({
              walmartResults: walmartArr,
            });
          }
        )
        .catch((err) => console.log(err));
=======
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
    state = {
        saved: [],
        q: "",
        wq: [],
        results: [],
        amazonResults: [],
        walmartResults: [],
        uniqueKey: 0,
    }
    getResults(){
        // console.log(this.state.results);
        // console.log(this.state.amazonResults);
        // console.log(this.state.walmartResults);
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
                                uniqueKey: this.state.uniqueKey++
                                }
                            walmartArr.push(product);
                            this.setState({
                                walmartResults: walmartArr
                            })
                }).catch(err => console.log(err));
        }
        this.getResults();
>>>>>>> 6a3fba54ddf0404fd483d1f25c75dc6f05638723:client/src/pages/Home.js
    }
    this.getResults();
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

<<<<<<< HEAD:src/pages/Home.js
    TargetAPI.TargetFind(this.state.q)
      .then((response) => {
        for (var i = 0; i < 15; i++) {
          let product = {
            title: response.data.products[i].title,
            image:
              response.data.products[i].images[0].base_url +
              response.data.products[i].images[0].primary,
            price: response.data.products[i].price.formatted_current_price,
            link: "https://www.target.com" + response.data.products[i].url,
            storeName: "Target",
            uniqueKey: i,
          };
          itemArr.push(product);
          //console.log(product)
          this.setState({
            results: itemArr,
          });
          this.getResults();
        }
      })
      .catch((err) => console.log(err));

    const amazonItemArr = [];
    let key = 0;
    AmazonAPI.AmazonFind(this.state.q)
      .then((response) => {
        console.log(response);
        for (var i = 0; i < 15; i++) {
          if (response.data.search_results[i].prices) {
            let amazonItem = {
              title: response.data.search_results[i].title,
              image: response.data.search_results[i].image,
              price: response.data.search_results[i].prices[0].raw,
              link: response.data.search_results[i].link,
              store: "Amazon",
              uniqueKey: key++,
            };
            amazonItemArr.push(amazonItem);
            this.setState({
              amazonResults: amazonItemArr,
            });
          } else {
            console.log("no price");
          }
          //console.log(this.state.amazonResults)
        }
        this.getResults();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew-625x300.png">
          <h1>Shopalooza</h1>
        </Hero>
        <br></br>
        <About></About>
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
        <br></br>
        <br></br>
        <Footer></Footer>
      </div>
    );
  }
=======
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
                            uniqueKey: this.state.uniqueKey++
                            }
                        itemArr.push(product);
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
                    if (response.data.search_results[i].prices){
                        let amazonItem = {
                            title: response.data.search_results[i].title,
                            image: response.data.search_results[i].image,
                            price: response.data.search_results[i].prices[0].raw,
                            link: response.data.search_results[i].link,
                            store: "Amazon",
                            storeLogo: "fab fa-amazon amazon-logo",
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
                this.getResults();
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
}

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-4">Shopalooza</h1>
                    <hr className="my-4"></hr>
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
            </div>
    )
    }
>>>>>>> 6a3fba54ddf0404fd483d1f25c75dc6f05638723:client/src/pages/Home.js
}

export default Home;
