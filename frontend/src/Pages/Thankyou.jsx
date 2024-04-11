import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Thankyou = () => {
  const location = useLocation();
  const { state } = location || {};
  const { totalAmt, updatedPrice, serviceCharge, guestSize } = state || {};
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadBill = async () => {
    try {
      const canvas = await html2canvas(ref.current);
      const imgData = canvas.toDataURL('image/png');

      // Simulate PDF generation (enhanced)
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = "booking.pdf"; // Simulate PDF extension
      downloadLink.click(); // Simulate click (no actual download)

      // Display success message
      alert('Your tour receipt has been generated (simulated).');
    } catch (error) {
      console.error('Error generating simulated PDF:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <section className='thanku'>
      <Container>
        <Row ref={ref}>
          <Col lg='12' className='align-items-center justify-content-center text-center'>
            <i className="ri-checkbox-circle-fill yellow tick"></i>
            <h4>
              Thank You
            </h4>
            <span>for booking your trip with Us</span><br />
            <div>
              {totalAmt && <h5>Total Amount: ₹{totalAmt}</h5>}
              {updatedPrice && <p>Base Price: ₹{updatedPrice} per person</p>}
              {guestSize && <p>Guest Size: {guestSize}</p>}
              {serviceCharge && <p>Service Charge: ₹{serviceCharge}</p>}
            </div>
          </Col>
        </Row>
        <Row className='tw-flex tw-justify-center'>
          <Button className='btn primary_btn mt-4 w-25' onClick={downloadBill}>Download Bill</Button>
          <Button className='btn primary_btn mt-4 w-25'><Link to='/home' className='btntext'>Back To Home</Link></Button>
        </Row>
      </Container>
    </section>
  );
};

export default Thankyou;
