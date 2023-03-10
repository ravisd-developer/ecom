import { Col, Container, Button } from "react-bootstrap";
import './Exclusive.scss'
function Exclusive() {
    return ( 
        <Container fluid>
            <Col>
                <div className="exclusive-deals">
                    <p className="heading">Just hurry up limited offer! </p>
                    <p className="desc">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <a className="button button-dark">Shop Now</a>
                </div>
            </Col>
        </Container>
     );
}

export default Exclusive;