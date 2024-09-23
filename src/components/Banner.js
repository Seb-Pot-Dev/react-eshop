import React from 'react';
import '../styles/Banner.css';
import logo from '../logo.png'

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="shop-title">Le skateshop</h1>
      <img src={logo} alt="logo" className="shop-logo" />
    </div>
  )
}

export default Banner