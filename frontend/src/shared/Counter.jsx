import React from 'react';
import '../styles/Home.css';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import { CountUp } from 'use-count-up'

const Counter = () => {
    return (
        <div className='ex-sec'>
            <Container >
                <Row>
                    <Col lg='6'>
                        <div className='exp_content'>
                            <Subtitle subtitle={"Our Experience"} />
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='counter-wrapper d-flex align-items-center gap-5'>
                            <div className='counter_box'>
                            <CountUp isCounting end={100} duration={3.2} />
                                <span>+</span>
                                <div>sucessful trip</div>
                            </div>
                            <div className='counter_box'>
                            <CountUp isCounting end={12} duration={3.2} />
                                <span>+</span>
                                <div>sucessful trip</div>
                            </div>
                            <div className='counter_box'>
                            <CountUp isCounting end={12} duration={3.2} />
                                <span>+</span>
                                <div>sucessful trip</div>
                            </div>
                            <div className='counter_box'>
                            <CountUp isCounting end={12} duration={3.2} />
                                <span>+</span>
                                <div>sucessful trip</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Counter
