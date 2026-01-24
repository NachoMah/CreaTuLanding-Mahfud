import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from './CartWidgetRI';
import "../css/NavBarBS.css"
import { NavLink } from 'react-router-dom';

function NavBarBS() {
  return (
    <Navbar expand="lg" className="navbar-sw navbar-dark">
      <Container> 
        
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-sw">
          <img src="../img/star-wars-logo.png" alt="logo" className="navbar-logo" />
          Star Wars Store
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links-sw">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>

            <NavDropdown title="Prodcutos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/sables">Sables</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to ="/category/funkopop">Funko Pop</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/naves">Naves</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <CartWidgetRI/>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBS;