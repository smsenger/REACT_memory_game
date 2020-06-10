import React from 'react';
import MemoryCard from './components/MemoryCard.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const projects = [

  ];
  return (
    <div className="App">
      <div className="App-header">
        <h1>Memory Game</h1>
        <h2>Match Cards to Win</h2>
      </div>
            {/* <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard /> */}
      <div>
      <Container>
          <Row>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
            <Col xs={12} sm={6} md={4}><MemoryCard /></Col>
           
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;