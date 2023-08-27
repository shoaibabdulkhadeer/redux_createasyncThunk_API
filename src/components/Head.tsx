import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';  
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';



const Head = () => {

 const cartLength:any = useSelector<any>(state => state.cart)

  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary mainnav ">
      <Container>
        <Navbar.Brand >STORE APP😎</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <Link to='/' className="links">Home</Link>
              </Nav.Link>
            <Nav.Link >
              <Link to='/cart' className="links">
              <Badge pill bg="warning" text="dark" className="px-3">
              Cart 🛒 {cartLength.length}
         </Badge>
              </Link>
              </Nav.Link> 
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Head