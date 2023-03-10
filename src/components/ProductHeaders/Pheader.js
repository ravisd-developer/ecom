import { Col, Container, Row, Button, Breadcrumb } from "react-bootstrap";
import './Pheader.scss';
import { BsArrowLeft } from 'react-icons/bs'
function Pheader(props) {
    const { title, id, category} = props.data;
    return (
        <>
            <Container>
                <div className="plp pdp header">
                    <Row>
                        <Col>
                            <Button variant="outline-secondary"><BsArrowLeft />Back</Button>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <div className="breadcrumbs">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">
                                        {category}
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>
                                        {title.substring(0, 30)}
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Pheader;