import React from 'react';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Home from './component/pages/home';

function App() {
  return (
   
    
    <Router>
      
      <Sidebar/> 
      <Navbar/>
      
      {/* <Routes>
        <Route path='/' element={<Home/>}/>

    
    </Routes> */}
  
    </Router>
   
  );
}

export default App;
