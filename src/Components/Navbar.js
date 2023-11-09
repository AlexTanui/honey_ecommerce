import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Navbar({ totalItemsInCart }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/">
          <img id="logo" src="https://lh3.googleusercontent.com/pw/ADCreHe7KA2H-AE9c4UByAQyzrOCUKVqFn81LvZ5uGjcSIqGwhAtsiEqQ3PL1t32qZB-KTVTkdpfMSj_2kK4HOmjSxP48XCo95AzTaAXxHF_jHSa3kmx3Cz0Xci5uV8P7TrjcM0dlZC1IW7QFpbcIXsvth6S=w1137-h611-s-no-gm?authuser=0" alt="logo.png" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/products" className="nav-link">Shop</Link>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link to="/login" id="login-logout" className="nav-link">
                <FontAwesomeIcon icon={faUser} />
              </Link>
              
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Login</a></li>
                <li><a className="dropdown-item" href="#">Sign up</a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link to="/cart" id="shopping-basket" className="nav-link position-relative">
                <FontAwesomeIcon icon={faShoppingBasket} /> 
                <span id="badge" className="badge rounded-pill text-bg-secondary position-absolute top-0 start-100 translate-middle">{totalItemsInCart}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
