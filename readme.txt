import React from 'react';
import SignIn from './SignIn.jsx';
import fusionlogo from '../Image/fusion.png';
// import './Navbar.js';

function showsidebar() {
  let navLinks = document.querySelector('.sidebar');
  navLinks.style.display= 'flex'
}
function showsidebar1(){
  let navLinks = document.querySelector('.sidebar');
  navLinks.style.display= 'none'
}


function Navbar() {
  return (
    <>
      <div className="navbardiv">
        <img src={fusionlogo} width="40px" alt="CodeFusion Logo" />
        <span style={{ fontSize: 'large' }} className="mainstyle">
          CodeFusion
        </span>
        <ul className="navbarul" id="tobehide">
          {/* <li className="hideonmobile"><a href="#" className="indexa">Product</a></li>
          <li className="hideonmobile"><a href="#" className="indexa">Explore</a></li>
          <li className="hideonmobile"><a href="#" className="indexa">Resource</a></li>
          <li className="hideonmobile"><a href="#" className="indexa">Support</a></li>
          <li className="hideonmobile"><a href="#" className="indexa">Pricing</a></li>
          <li className="hideonmobile"><a href="#" className="indexa">Jobs</a></li> */}
          <li className="hideonmobile"><a href="#" className="indexa">Sign In</a></li>
          <li onClick={showsidebar} className="hideonmobile1" style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </li>
        </ul>
        <ul className="navbarul sidebar" id="sidebar">
          <li onClick={showsidebar1} style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px"  fill="#e8eaed">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          {/* <li><a href="#" className="indexa">Product</a></li>
          <li><a href="#" className="indexa">Explore</a></li>
          <li><a href="#" className="indexa">Resource</a></li>
          <li><a href="#" className="indexa">Support</a></li>
          <li><a href="#" className="indexa">Pricing</a></li>
          <li><a href="#" className="indexa">Jobs</a></li> */}
          <li><a href="#" className="indexa">Sign In</a></li>
          <button className="btnforcrt">Create CodeFusion</button>
        </ul>
        <button className="btnforcrt">Create CodeFusion</button>
      </div>
    </>
  );
}

export default Navbar
