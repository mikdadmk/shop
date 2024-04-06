// import Button from 'react-bootstrap/Button';
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Home from "./homepage/home";
import cart from "./assets/cart-plus-fill.svg";
import logo from "./assets/logo.jpg";
import Slide from "./sliderpage/slide";
import Trendingproducts from "./trendingproducts/trendingproducts";

function TypesExample() {
  return (
    <>
      <div className="header">
        <div className="search"></div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <input placeholder="  search...." className="input" type="text" />
        <div className="links">
          <li>
            <Link to="">Home</Link>
            <Link to="">Updates</Link>
            <Link to="">About us</Link>
            <Link to="">Contact</Link>
          </li>
        </div>
        <div className="filter">
          <div className="img-box">
            
            <img src={cart} alt="" />
          </div>
        </div>
        <div className="menu-bar"></div>
      </div>
      <Home />
      <Slide/>
      <Trendingproducts/>
    </>
  );
}

export default TypesExample;
