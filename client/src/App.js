import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Profile from "./pages/Profile";
import Home from './pages/Home';
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
    <Footer />
    </div>

  );
}

export default App;
