import React, { PureComponent } from 'react'
import './index.css';
import Navbar from './Navbar'

export class CodeFusion extends PureComponent {
  render() {
    return (
      <>
        <Navbar/>
        <div className='codediv'>
        </div>
      </>
    )
  }
}

export default CodeFusion
