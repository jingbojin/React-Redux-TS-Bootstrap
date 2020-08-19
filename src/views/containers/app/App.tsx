import React from 'react';
import logo from '../../../assets/logo.svg';
import './App.css';
import PagesRouter from '../../../router/PagesRouter';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <Image src={logo} className="App-logo"/>
      </div>
      <hr/>
      <PagesRouter/>
    </div>
  );
}

export default App;
