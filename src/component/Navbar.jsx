import { Link } from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav} from 'reactstrap';

const NavbarMenu = () => (
<div>
  <Navbar 
    color="light"
    expand="md"
    light
    container
    header
  >
        <NavbarBrand href="/">
            <img src='image/logo.png'/>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
            <Nav
            className="ms-auto"
            navbar-nav
            >
            <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <a className="nav-link text-dark" href="#ourServ">Our Services</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link text-dark" href="#why">Why Us</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link text-dark" href="#testi">Testimonial</a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link text-dark" href="#faq">FAQ</a>
            </li>
            <Link to="/SignUp">
          <button type="button" className="btn tombol">Register</button>
            </Link>
          </ul>
            </Nav>
        </Collapse>
        </Navbar>
</div>
)

export default NavbarMenu