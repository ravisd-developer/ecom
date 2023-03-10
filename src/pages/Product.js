import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import useGetdata from "../customHooks/useGetdata";
import Pheader from "../components/ProductHeaders/Pheader";
import {Row, Col, Button} from "react-bootstrap";
import './Product.scss'
import { BsFillStarFill } from "react-icons/bs";
function Product() {
    const { id } = useParams();
    const { loading, data } = useGetdata(`products/${id}`);
    if (loading) {
        return <>
            <Layout>
                <Container >
                    <h3>Loading......</h3>
                </Container>
            </Layout>
        </>
    }
    else {
        return (
            <Layout>
                <Pheader data={data} />
                <Container >
                    <Row >
                        <Col>
                            <div className="pdp pdp-image-section">
                                <img src={data.image} />
                            </div>
                        </Col>
                        <Col>
                            <div className="pdp product-details">
                                <p className="pdp--badge`">{data.category}</p>
                                <h1 className="pdp--heading">{data.title}</h1>
                                <p className="pdp--rating"><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /> {data.rating.rate}</p>
                                <p className="pdp--price">₹{data.price}</p>
                                <div className="pdp--buying-controls">
                                <Button variant="outline-secondary">Buy Now</Button>
                                <Button variant="outline-secondary">Add To cart</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="pdp-dec-section">
                        <p className="pdp--desc">{data.description}</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default Product;