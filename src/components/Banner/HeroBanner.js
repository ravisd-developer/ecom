import { Col, Container, Row, Button } from "react-bootstrap";
import React from "react";
import BannerImg from '../../assets/images/banner-shoes.png'
import BannerImg1 from '../../assets/images/banner2.png'
import './HeroBanner.scss'
function HeroBanner() {
    return (
        <Container fluid className='banner'>
            <Container >
                <Row className="justify-content-center">
                    <Col style={{ minHeight: '550px', display:'flex', alignItems:'center' }}>
                        <div className="py-5 mt-5 mb-5">
                            <div className="banner--pre-content my-3">
                                Now Available Online!
                            </div>
                            <div className="banner--heading mb-5">
                                large Collection and Variety
                            </div>
                            <a href="/shop" className="button button-dark">Shop Now</a>
                        </div>
                    </Col>
                    <Col className="d-none d-lg-flex justify-content-center align-items-center" lg='4' >
                        <img className="banner-img" src={BannerImg1}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HeroBanner;