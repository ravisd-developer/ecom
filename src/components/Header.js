import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle, BsFillBagHeartFill } from 'react-icons/bs'
import Menus from '../Data/MenuData';
import  './Header.scss'
function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="m-auto justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
              Menus.map((menu) => {
                return <Nav.Link className="menu-item" key={menu.name} href={menu.href}>{menu.name}</Nav.Link>
              })
            }
          </Nav>
          <div>
            <BsPersonCircle />
            <BsFillBagHeartFill />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;