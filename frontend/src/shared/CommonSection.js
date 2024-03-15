import React from 'react'
import './common.css';
import { Container,Row, Col } from 'reactstrap'
import img1 from '../../src/assets/myimg/tourban.png'

const CommonSection = ({title}) => {
  return (
    <section className='common_sec'>
        <Container>
            <Row>
                <Col lg='12'>   
                    <img src={img1} className='ab'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection
