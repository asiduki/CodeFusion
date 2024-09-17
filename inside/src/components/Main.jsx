import React from 'react'
import react from '../Image/react.png';
import js from '../Image/java-script.png';
import html from '../Image/html.png';
import vue from '../Image/vue.png';
import more from '../Image/more.png';

function Main() {
  return (
    <>
      <div className="indexbox">
      <ul className="indexforlogo">
        <li>
          <img width="150px" src={react} alt="React" />
          <img width="150px" src={js} alt="JavaScript" />
          <img width="150px" src={html} alt="HTML" />
          <img width="150px" src={vue} alt="Vue" />
          <img width="150px" src={more} alt="More" />
        </li>
      </ul>
      <h1>Where teams build faster, together</h1>
      <p style={{ color: 'gray' }}>
        Create, share, and get feedback with collaborative CodeFusion for rapid web development
      </p>
      <button className="indexbtnfusion"><pre>Create CodeFusion -></pre></button>
    </div>
    </>
  )
}

export default Main
