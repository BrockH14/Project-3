import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" />
        <Route exact path="/profile" component={Profile} />
        <Jumbotron />
        <Cards />
      </div>
    </Router>
  );
}

export default App;
