import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Profile from "./pages/Profile";
import Home from './pages/Home';
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
