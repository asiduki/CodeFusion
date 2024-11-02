import React from 'react';
import './components/index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import CodeFusion from './components/CodeFusion';
import SignIn from './components/SignIn';
// import Interface from './components/Interface';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <SignIn /> */}
      <Navbar />
      <Main />
      {/* <Interface /> */}
      {/* <CodeFusion/>  */}
    </div>
  );
};

export default App;
