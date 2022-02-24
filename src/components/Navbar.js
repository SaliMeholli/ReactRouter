import project from './images/project-management.png'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom';
function Navigation() {
  return (
    <div className="Navbar">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
            <img src={project} width="30px" height="30px" color="white"/>
          SM-Tech
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/about">About</Link></li>
            <li><Link style={{ textDecoration: 'none', color: 'white' }} to="/phones">Phones</Link></li>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
    </div>
  );
}

export default Navigation;