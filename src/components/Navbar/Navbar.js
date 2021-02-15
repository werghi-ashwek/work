import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './Navbar.styles.css'


export default function NavBar(){
    return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">clothes store</Navbar.Brand>
    <Nav >
      <Nav.Link className="topnav" href="/">Home</Nav.Link>
      <Nav.Link  className="topnav"href="men">Men</Nav.Link>
      <Nav.Link  className="topnav"href="women">Women</Nav.Link>
    </Nav>
    </Navbar> 

    );
}