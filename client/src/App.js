import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
