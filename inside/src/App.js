import React from 'react';
import './components/index.css';
import fusionlogo from './Image/fusion.png';
import react from './Image/react.png';
import js from './Image/java-script.png';
import html from './Image/html.png';
import vue from './Image/vue.png';
import more from './Image/more.png';
import SignIn from './components/SignIn.jsx';

const Navbar = () => {
  return (
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
        <li><a href="./components/SignIn" className="indexa">Sign In</a></li>
      </ul>
      <button className="btnforcrt">Create CodeFusion</button>
    </div>
    
  );
};

const MainContent = () => {
  return (
    <div className="indexbox">
      <h1>Where teams build faster, together</h1>
      <p style={{ color: 'gray' }}>
        Create, share, and get feedback with collaborative CodeFusion for rapid web development
      </p>
      <ul className="indexforlogo">
        <li>
          <img width="150px" src={react} alt="React" />
          <img width="150px" src={js} alt="JavaScript" />
          <img width="150px" src={html} alt="HTML" />
          <img width="150px" src={vue} alt="Vue" />
          <img width="150px" src={more} alt="More" />
        </li>
      </ul>
      <button className="indexbtnfusion"><pre>Create CodeFusion -></pre></button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
