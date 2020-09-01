import React from 'react';
import logo from '../../../assets/logo.svg';
import './App.css';
import PagesRouter from '../../../router/PagesRouter';
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import { Footer } from '../../components/Footer';

function App() {
  return (
    <Container className="text-center">
      <Image src={logo} className="App-logo"/>
      <hr/>
      <PagesRouter/>
      <hr/>
      <Footer />
    </Container>
  );
}

export default App;
