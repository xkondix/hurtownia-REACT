import './App.css';
import React from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Products from './components/Products';
import Wholesalers from './components/Wholesalers';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Login from './components/Login';




function App() {
  return (
    <div className="App">
    <NavBar/>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/informations/about_me" component={AboutMe} />
      <Route exact path="/informations/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/wholesalers" component={Wholesalers} />
  </Router>

    </div>
  );
}

export default App;
