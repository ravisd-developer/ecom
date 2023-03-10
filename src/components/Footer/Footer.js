import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Footer.scss';
import Menus from '../../Data/MenuData';
import { BsCheck, BsFillTelephoneForwardFill, BsFillEnvelopeAtFill, BsGeoFill, BsInstagram, BsYoutube } from 'react-icons/bs';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png'
function Footer() {
    const QuickItems = Menus.map((menu) => <Nav.Link className="footer--links" key={menu.name} href={menu.href}><BsCheck />{menu.name}</Nav.Link>);
    return (
        <div className='footer'>
            <Container  >
                <Row >
                    <Col sm='12' md='4'>
                        <p className='footer--heading'>About Us</p>
                        <img className='footer--logo' src={Logo} />
                        <p className='footer--about'>Would you want to buy from a brick-and-mortar store that had broken windows, a messy storefront and cobwebs on the shelves? Probably not. And you would likely leave without even looking at their products.</p>
                    </Col>
                    <Col sm='12' md='4'>
                        <div className='quick-links'>
                            <p className='footer--heading'>Quick Links</p>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                {QuickItems}
                            </Nav>
                        </div>
                    </Col>
                    <Col sm='12' md='4'>
                        <p className='footer--heading'>Contact Us</p>
                        <div>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link className="footer--links" href='#'><BsFillTelephoneForwardFill />Phone : 923673412937 </Nav.Link>
                                <Nav.Link className="footer--links" href='#'><TbDeviceLandlinePhone />Tel : 342-1231-2313 </Nav.Link>
                                <Nav.Link className="footer--links" href='#'><BsFillEnvelopeAtFill />Email : contact@shoping.com </Nav.Link>
                                <Nav.Link className="footer--links" href='#'><BsGeoFill />Address : No # 60 USA, florida, street'  </Nav.Link>
                            </Nav>
                            <Nav className="flex-row">
                                <Nav.Link className="footer--social-links" href='#'><BsInstagram /></Nav.Link>
                                <Nav.Link className="footer--social-links" href='#'><FaFacebookSquare /> </Nav.Link>
                                <Nav.Link className="footer--social-links" href='#'><BsYoutube /> </Nav.Link>
                                <Nav.Link className="footer--social-links" href='#'><FaTwitterSquare /></Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Col className='copyright'>
                <p className=''>Copyright © 2023</p>
            </Col>
        </div>
    );
}

export default Footer;