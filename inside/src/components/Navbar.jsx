import React from 'react'
import SignIn from './SignIn.jsx';
import fusionlogo from '../Image/fusion.png';


function Navbar() {
  return (
    <>
       <div className="navbardiv">
        <img src={fusionlogo} width="40px" alt="CodeFusion Logo" />
        <span style={{ fontSize: 'large' }} className="mainstyle">
          CodeFusion
        </span>
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
      </div>
    </>
  )
}

export default Navbar
