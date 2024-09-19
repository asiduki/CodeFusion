import React from 'react';
import './components/index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import CodeFusion from './components/CodeFusion';


const App = () => {
  return (
    <div>
        <Navbar />  
       <Main />  
      {/* <CodeFusion/> */}
    </div>
  );
};

export default App;
