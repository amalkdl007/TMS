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
import ErrorPage from "./component/pages/errorpage";
import Footer from "./component/pages/footer";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"; 

function App() {
  return (
    <>
    
    <div className="App">
     
      <Router>
      
      <Navbar/>

      <Routes>
        <Route exact path= "/" element= {<Home /> }/>
        <Route exact path= "/about" element= {<About/>}/>
        <Route exact path= "/contact" element= {<Contact />}/>
        <Route exact path= "/login" element= {<Login />}/>
        <Route exact path= "/signup" element= {<Signup />}/>
        <Route exact path= "*" element= {<ErrorPage />}/>
      </Routes>    

    
    </Router>
  
   <Footer/>
   </div>
   </>
  );
}

export default App;

  