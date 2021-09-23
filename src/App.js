import './App.css';
import React from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Products from './components/Products';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
  </Router>

    </div>
  );
}

export default App;
