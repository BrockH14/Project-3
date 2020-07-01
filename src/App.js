import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Cards />
    </div>
  );
}

export default App;
