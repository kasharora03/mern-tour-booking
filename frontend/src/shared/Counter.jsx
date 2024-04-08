import React from 'react';
import '../styles/Home.css';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import { CountUp } from 'use-count-up';

const countersData = [
    { value: 100, label: "Successful Trips" },
    { value: 12, label: "Trusted Guides" },
    { value: 20, label: "Locations" },
    { value: 500, label: "Travelers" }
];

const Counter = () => {
    return (
        <div className='ex-sec tw-w-screen'>
            <Container>
                <Row>
                    <Col lg='5'>
                        <div className='exp_content tw-text-center tw-flex tw-align-middle tw-justify-center'>
                            <h5 className='tw-text-2xl md:tw-text-4xl tw-text-white tw-italic'>Our Experience</h5>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='counter-wrapper d-flex align-items-center gap-5 tw-justify-center'>
                        <Row>
                            {countersData.map((counter, index) => (
                                <Col md='3' className='tw-justify-center'>
                                <CountUp isCounting end={counter.value} duration={3.2}  />
                                    <span>+</span>
                                    
                                    <div className='tw-font-normal tw-text-lg py-2 tw-italic'>{counter.label}</div>
                                </Col>
                            ))}
                        </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Counter;
