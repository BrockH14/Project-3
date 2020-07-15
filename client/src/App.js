import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
<<<<<<< HEAD:src/App.js

=======
>>>>>>> 6a3fba54ddf0404fd483d1f25c75dc6f05638723:client/src/App.js
import Profile from "./pages/Profile";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
<<<<<<< HEAD:src/App.js
       
=======
>>>>>>> 6a3fba54ddf0404fd483d1f25c75dc6f05638723:client/src/App.js
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
