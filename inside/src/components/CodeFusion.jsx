import React, { PureComponent } from 'react'
import './index.css';
import Navbar from './Navbar'
import html from '../Image/html.png'

export class CodeFusion extends PureComponent {
  render() {
    return (
      <>
        <Navbar/>
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
            <textarea  rows={40} className='codeinput' />
          </div>
          <div className="codeoutput">

          </div>
        </div>
      </>
    )
  }
}

export default CodeFusion
