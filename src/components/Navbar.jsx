import React from 'react'
import SignIn from './SignIn.jsx';
// import Second from './Second.jsx';
import fusionlogo from '../Image/fusion.png';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
       <div className="navbardiv">
        <img src={fusionlogo} width="40px" alt="CodeFusion Logo" />
        <span style={{ fontSize: 'large' }} className="mainstyle">
          CodeFusion
        </span>
        <Router>
        <ul className="navbarul">
          <li><a href="#" className="indexa">Product</a></li>
          <li><a href="#" className="indexa">Explore</a></li>
          <li><a href="#" className="indexa">Resource</a></li>
          <li><a href="#" className="indexa">Support</a></li>
          <li><a href="#" className="indexa">Pricing</a></li>
          <li><a href="#" className="indexa">Jobs</a></li>
          <li><a href={SignIn} className="indexa">Sign In</a></li>
        </ul>
        <button className="btnforcrt">Create CodeFusion</button>
        </Router>
      </div>
    </>
  )
}

export default Navbar
