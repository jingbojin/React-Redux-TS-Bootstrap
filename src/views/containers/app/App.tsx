import React from 'react';
import logo from '../../../assets/logo.svg';
import './App.css';
import PagesRouter from '../../../router/PagesRouter';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="text-center">
      <Image src={logo} className="App-logo"/>
      <hr/>
      <PagesRouter/>
    </Container>
  );
}

export default App;
