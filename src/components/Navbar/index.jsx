
import { Navbar, Nav } from 'react-bootstrap';
import Cart from '../Cart';
import './Navbar.css'

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className='navmanga1'>
      <Navbar.Brand href="#home">Okami Manga Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navmanga">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#productos">Products</Nav.Link>
        </Nav>
        <Cart />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
