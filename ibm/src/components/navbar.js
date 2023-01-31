import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css';

import logo from '../img/mp.png'

function nav() {
  return (
    <>
      <Navbar id="nav" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} style={{height:"80px"}} alt='logo' /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Solution</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default nav;