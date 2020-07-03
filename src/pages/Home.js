import React, { Component } from "react";
import Form from "../components/Form";
import { render } from "@testing-library/react";
import Hero from "../components/Hero";

class Home extends Component {
  state = {
    saved: [],
    q: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew-625x300.png">
          <h1>Shopalooza</h1>
          <h2>Compare tons of different products!</h2>
        </Hero>
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.q}
        />
      </div>
    );
  }
}

export default Home;
