// import logo from './logo.svg';
import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/home";
import About from "./component/pages/about";
import Contact from "./component/pages/contact";
import Login from './component/pages/login';
import Signup from "./component/pages/signup";
import Navbar from "./component/layout/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path= "/" component= {Home}/>
        <Route exact path= "/about" component= {About}/>
        <Route exact path= "/contact" component= {Contact}/>
        <Route exact path= "/login" component= {Login}/>
        <Route exact path= "/signup" component= {Signup}/>
      </Routes>    
    </div>
    </Router>
  );
}

export default App;

  