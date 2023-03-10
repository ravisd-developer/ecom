
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import './FilterTab.scss'
function FilterTab() {
  const [key, setKey] = useState('home');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
      }
      )
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return (
    <Container>

      <div className='filters'>
        <Row>
          <Col>
         <h3 className='filter-heading'>OUR PRODUCTS </h3> 
         <p className='filter-desc'>
We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
         </p>
          </Col>
        </Row>
        <Row className=''>
          <Col>
            <p className='heading'> </p>
          </Col>
          <Col className='d-flex justify-content-end'>
            <div className='filter-items'>
              
            </div>

          </Col>
        </Row>
        <Row>
          <Col className='product-cards'>
            {
              products.map((product, index ) => {
                  return <ProductCard key={product.id} data={product} />
              })
            }
          </Col>
        </Row>

      </div>
    </Container>
  );
}

export default FilterTab;
