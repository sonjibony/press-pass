import React, { useContext } from 'react';
//importing navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//importing button
import Button from 'react-bootstrap/Button';

import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'
import LeftNav from '../LeftNav/LeftNav';
const Header = () => {

    //using context to share props
    const {user, logOut} = useContext(AuthContext)

// logout function onClick
const onLogOut = () => {
    logOut()
    .then( () => {

    })
    .catch(error => console.error(error));
}

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand> <Link to= '/'>Press Pass</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

{/* show user name and log out button if logged in if not show login and register option */}
             <Nav.Link href="#deets">
             {
                
                user?.uid ? 
                <>
                
                <span>{user?.displayName}</span>
                <Button variant="light" onClick={onLogOut}> Log Out</Button>
                </>
                :
                <>
                <Link to= '/login'> Login</Link>
                <Link to= '/register'> Register</Link>
                </>
             }                
                </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? 
              <Image
               style={{height:'30px'}} roundedCircle src={user?.photoURL} ></Image>
              : <FaUserAlt></FaUserAlt>
            }
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftNav></LeftNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;