import React from "react";
import './css/header.css';
import {Link} from 'react-router-dom';


const Header = ()=>{
  return(
    <>
    {/********************************************************Header */}
<header>
  <div className="header-bar"></div>
  <div className="header-div">
    <div className="header-text">
      <div className="header-upper-text">Happy Shopping</div>
      <div className="header-sub-text">All IS HERE YOU WANT</div>
    </div>
    <div className="header-search-bar">

      <input type="text" placeholder="Search Happpy Shopping" name="search" form="my-happyshopping-form" />
      <button type="submit"><i className="fa fa-search"></i></button>
    </div>
    <div id="login-link" className="header-login-link">
    <Link to="/Login">Login</Link>
    </div>
    <div className="clear-float-effect"></div>
  </div>
</header>
</>
)
}
export default Header;