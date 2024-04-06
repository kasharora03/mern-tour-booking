// Thankyou.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

const Thankyou = () => {
  const location = useLocation();
  const { state } = location || {};
  const { totalAmt, updatedPrice, serviceCharge, guestSize } = state || {};
  return (
    <section className='thanku'>
      <Container>
        <Row>
          <Col lg='12' className=' align-items-center justify-content-center text-center'>
            <i className="ri-checkbox-circle-fill yellow tick"></i>
            <h4>
              Thank You
            </h4>
            <span>for booking your trip with Us</span><br />
            <div>
              {totalAmt && <h5>Total Amount: ${totalAmt}</h5>}
              {updatedPrice && <p>Base Price: ${updatedPrice} per person</p>}
              {guestSize && <p>Guest Size: {guestSize}</p>}
              {serviceCharge && <p>Service Charge: ${serviceCharge}</p>}
            </div>
            <Link to='/home' className='btntext'><Button className='btn primary_btn mt-4 w-25'>Back To Home</Button></Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Thankyou;
