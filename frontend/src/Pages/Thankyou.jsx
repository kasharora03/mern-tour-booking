import React from 'react'
import { Container,Row,Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/Home.css';
// import './Booking.css';

const Thankyou = () => {
  return (
    <section  className='thanku'>
        <Container>
            <Row>
                <Col lg='12' className=' align-items-center justify-content-center text-center'>
                <i class="ri-checkbox-circle-fill yellow tick"></i>
                <h4>
                    ThankYou 
                </h4>
                <span>for booking your trip with Us</span><br/>
               
                <Link to='/home' className='btntext'><Button className='btn primary_btn mt-4 w-25'>Back To Home</Button></Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Thankyou
