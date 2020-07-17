import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Profile from "./pages/Profile";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}></Route>
      </div>
    </Router>
  );
}

export default App;
