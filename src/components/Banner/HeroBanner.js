import { Col, Container, Row, Button } from "react-bootstrap";
import React, { Fragment } from "react";
import './HeroBanner.scss'
function HeroBanner() {
    return (
        <Container fluid className='banner' style={{ background: '#c4c4c48a'}}>
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
                            <Button variant="primary">Shop Now</Button>
                        </div>
                    </Col>
                    <Col className="d-none d-lg-block" lg='4' >

                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HeroBanner;