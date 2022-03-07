import React from "react";

const navbar = () => {    
    return (
    <nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
    <div class="container-fluid">
      {/* <a class="navbar-brand" href="#">Navbar</a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" >

      <ul class="logo1">
   <h2 class="logo1"></h2>
  
 </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <a class="navbar-brand" href="#"><img src="logo.jpg" alt="logo"></img></a> */}
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">Signup</a>
          </li>
          <li class="nav-item dropdown">
            {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a> */}
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li> */}
              {/* <li><hr class="dropdown-divider"></li> */}
              {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>
          
        </ul>
       
      </div>
    </div>
    
{/* 
    <div className="top">
      <div className="topRight">
      <i class="fa-brands fa-facebook-square"></i>
      </div>
    </div> */}
  </nav>
    );
};
export default navbar;