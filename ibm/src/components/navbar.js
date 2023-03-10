import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {LinkContainer} from 'react-router-bootstrap';
import { Outlet} from "react-router-dom";
import '../css/navbar.css';

import logo from '../img/mp.png'

function nav() {
  return (
    <>
      <Navbar id="nav" bg="light" variant="light">
        <Container>
        <LinkContainer to="/Home">
        <Navbar.Brand><img src={logo} style={{height:"80px"}} alt='logo' /></Navbar.Brand>

            </LinkContainer>
   

          <Nav className="me-auto">
          <LinkContainer to="/Home">
                <Nav.Link id='hline'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
                <Nav.Link id='hline'>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Solution">
                <Nav.Link id='hline'>Solution</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default nav;