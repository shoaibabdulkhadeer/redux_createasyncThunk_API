import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




const Head = () => {

  const cartLength: any = useSelector<any>(state => state.cart)

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary mainnav " style={{ zIndex: 100 }}>
        <Container>
          <Navbar.Brand >STORE APP😎</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to='/' className="links">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/add' className="links">Add Items</Link>
              </Nav.Link>
              <Nav.Link >
                <Link to='/cart' className="links">
                  <Badge pill bg="warning" text="dark" className="px-3">
                    Cart 🛒 {cartLength.length}
                  </Badge>
                </Link>
              </Nav.Link>

              <NavDropdown title={<span className="bold-title">Categories</span>}   id="basic-nav-dropdown" style={{ zIndex: 200 }}>
              <NavDropdown.Item>
              <Link to='/mens' className="links">
                Mens Wear
                </Link>
                </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to='/womens' className="links">
                Womens Wear
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to='/electronics' className="links">
              Electronics
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <Link to='/jewelery' className="links">
              Jewelery
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Head