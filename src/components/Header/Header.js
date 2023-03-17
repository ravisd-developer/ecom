import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { BsPersonCircle, BsFillBagHeartFill } from 'react-icons/bs'
import Menus from '../../Data/MenuData';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  './Header.scss'
import Logo from '../../assets/images/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';
function Header() {
  const expand = 'lg';
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartItemsCount = useSelector((state) =>  state.allCartItems);
  return (
    <Navbar key={expand} bg="light" expand={expand} className="">
          <Container >
            <Navbar.Brand href="/">
              <img src={Logo} alt="" className='main-logo' />
            </Navbar.Brand>
            <RxHamburgerMenu  className='hamburger lg-none' onClick={handleShow}></RxHamburgerMenu >
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                {
              Menus.map((menu) => {
                return <Nav.Link className="menu-item" key={menu.name} href={menu.href}>{menu.name}</Nav.Link>
              })
            }
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default Header;