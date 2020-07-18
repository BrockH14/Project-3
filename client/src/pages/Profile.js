import React, {Component} from "react";
import Card from "../components/Card";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer"


class Profile extends Component {
    state = {
        savedItem: [],
        results: [],
    }
    componentDidMount() {
        this.load();
      }
    load = () => {
        API.getSaved()
        .then(res =>
            this.setState({results: res.data})
            )
    }
    handleFormDel = data => {
        API.delete(data._id)
        .then(res => this.load())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                <h1 className="display-4">Shopalooza</h1>
                <br />
                <p className="lead">All your saved items!</p>
                </Jumbotron>
                <Card
                results={this.state.results}
                handleFormDel={this.handleFormDel}
                />
            </div>
        )
    }

}

export default Profile;