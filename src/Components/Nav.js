import React from 'react'
import { Link } from 'react-router-dom';
import Carticon from './Carticon';
const Nav = () => {
    
    
    
    return (
        
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">React URL</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">Contact Us</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/Products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Cart">Cart</Link>
      </li>
     
      
    </ul>
   
  </div>
  <Carticon/>
</nav>  
        
    )
}

export default Nav
