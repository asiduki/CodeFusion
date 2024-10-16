import React from 'react';
import './components/index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import CodeFusion from './components/CodeFusion';
import SignIn from './components/SignIn';


const App = () => {
  return (
    <div>
      {/* <SignIn /> */}
         <Navbar />  
       <Main />   
       {/* <CodeFusion/>  */}
    </div>
  );
};

export default App;
