import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Menu.css'





export default class Menu extends Component {
    render() {
        return (
            <div>
      
   
      <Navbar className="menu bg-dark ml-auto " fixed="top" >
  <Container>
    <Navbar.Brand href="/accueil">PMA AUTO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/accueil">Accueil</Nav.Link>
        <Nav.Link href="/peugeot">Peugeot</Nav.Link>
        <Nav.Link href="/audi">Audi</Nav.Link>
        <Nav.Link href="/mercedes">Mercedes</Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
            </div>
        ) 
    }
}

