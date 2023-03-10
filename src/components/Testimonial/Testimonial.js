import { Container } from "react-bootstrap";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Person1 from '../../assets/images/person1.png'
import Person2 from '../../assets/images/person2.png'
import Person3 from '../../assets/images/person3.png'
import './Testimonial.scss'
function Testimonial() {
    return (
        <>
            <Container className="testimonial-section">

                <p className="testimonial-header">OUR SATISFIED CUSTOMER SAYS</p>

                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                    
                >
                    <div>
                        <img className='testimonial-img' src={Person1} />
                        <div className="myCarousel">
                            <h3>Shirley Fultz</h3>
                            <h4>Athens, Greece</h4>
                            <p>
                                It's freeing to be able to catch up on customized news and not be
                                distracted by a social media element on the same site
                            </p>
                        </div>
                    </div>

                    <div>
                        <img className='testimonial-img' src={Person2} />
                        <div className="myCarousel">
                            <h3>Daniel Keystone</h3>
                            <h4>Florida</h4>
                            <p>
                                The simple and intuitive design makes it easy for me use. I highly
                                recommend Fetch to my peers.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img className='testimonial-img' src={Person3} />
                        <div className="myCarousel">
                            <h3>Theo Sorel</h3>
                            <h4>USa</h4>
                            <p>
                                I enjoy catching up with Fetch on my laptop, or on my phone when
                                I'm on the go!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </Container>
        </>
    );
}

export default Testimonial;