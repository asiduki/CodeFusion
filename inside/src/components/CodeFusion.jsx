import React from 'react'
import './index.css';
import Navbar from './Navbar'
import html from '../Image/html.png'

function light() {
  const a = document.querySelectorAll('body');
  const b = document.querySelectorAll('.codebtnforlight');
  const c = document.querySelectorAll('.codebtnforlight1');

  c.forEach((c)=>
  {
    c.style.display = "flex";
  })

  b.forEach((b)=>
  {
  b.style.display = "none" ;
  }
  )

  a.forEach((a)=>{
  a.style.backgroundColor = "white" ;
  a.style.color = "black" ;
  })

}

function dark(){
  const a = document.querySelectorAll('body');
  const c = document.querySelectorAll('.codebtnforlight');
  const b = document.querySelectorAll('.codebtnforlight1');
  a.forEach((a) => {
    a.style.backgroundColor = "rgb(1, 19, 1)";
    a.style.color = "white";
  });
  c.forEach((c)=>
    {
      c.style.display = "flex";
    })
  
    b.forEach((b)=>
    {
    b.style.display = "none" ; 
    }
    )
}

function CodeFusion() {
  return (
    <>
       <Navbar />
        <div className='codewhererun'>
          <button>Run Code</button>
          <button className='codebtnforlight' onClick={light}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M492-280q83 0 141.5-58.5T692-480q0-83-58.5-141.5T492-680q-22 0-43 4.5T408-662q54 25 85.5 74T525-480q0 59-31.5 108T408-298q20 9 41 13.5t43 4.5ZM480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/></svg>
          </button>
          <button className='codebtnforlight1' onClick={dark}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M492-280q83 0 141.5-58.5T692-480q0-83-58.5-141.5T492-680q-22 0-43 4.5T408-662q54 25 85.5 74T525-480q0 59-31.5 108T408-298q20 9 41 13.5t43 4.5ZM480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/></svg>
          </button>
        </div>
        <div className='codediv'>

          <div className="codeslidebar">
            <ul className='codeul'>
              <li className='codeulli'><svg xmlns="http://www.w3.org/2000/svg" width="86" height="98" viewBox="0 0 86 98" fill="none" class="change-lang-btn-icon svg replaced-svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L7.81641 87.668L42.8914 97.4047L78.0625 87.6547L85.8875 0H0ZM42.9624 39.9803H28.7717L27.7889 28.9693H42.9624H42.9998H68.9343L69.1499 26.5537L69.6405 21.1021L69.8976 18.2178H42.9998H42.9624H16.0381L16.2959 21.1021L18.9381 50.7326H42.9624H42.9998H56.2022L54.9546 64.6772L42.9624 67.9139V67.9149L42.9521 67.9178L30.9779 64.6834L30.2131 56.1092H19.4186L20.9248 72.9912L42.9506 79.1053L42.9998 79.092V79.0902L65.0054 72.9912L65.1671 71.1748L67.6936 42.8678L67.9554 39.9803H65.0585H42.9998H42.9624Z" fill="#F9F7F7"></path>
              </svg>
              </li>
              <li className='codeulli'>
              </li>
              <li className='codeulli'>
              </li>
              <li className='codeulli'></li>
              <li className='codeulli'></li>
              <li className='codeulli'></li>
              <li className='codeulli'></li>
              <li className='codeulli'></li>
              <li className='codeulli'></li>
              <li className='codeulli'></li>
            </ul>
          </div>
          <div className="codearea">
            <textarea className='codeinput' />
          </div>
          <div className="codeoutput">

          </div>
        </div>

    </>
  )
}

export default CodeFusion
