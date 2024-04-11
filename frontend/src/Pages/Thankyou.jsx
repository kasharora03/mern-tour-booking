import React, { useRef } from 'react';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Thankyou = () => {
  const location = useLocation();
  const { state } = location || {};
  const { totalAmt, updatedPrice, serviceCharge, guestSize } = state || {};
  const pdfref = useRef();
  const currentDate = new Date().toLocaleDateString('en-GB');
  const downloadBill = () => {
    const input = pdfref.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfwidth = pdf.internal.pageSize.getWidth();
      const pdfheight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfwidth / imgWidth, pdfheight / imgHeight);
      const imgx = (pdfwidth - imgWidth * ratio) / 2;
      const imgy = 30;
      pdf.addImage(imgData, 'PNG', imgx, imgy, imgWidth * ratio, imgHeight * ratio);
      pdf.save('bookingdetail.pdf');
    })
  }
  return (
    <section className='thanku' >
      <Container>
        <Row >

          <Col lg='12' className='align-items-center justify-content-center text-center'>
            <div ref={pdfref}>
              {/* <p className='tw-text-2xl md:tw-text-4xl blue tw-font-bold tw-pt-4 tw-my-3' style={{display:'none'}}>EasyGo</p> */}
              <Col className='tw-flex tw-gap-3 tw-ml-4'>
                <div className='tw-flex'><p className='tw-font-bold'>Invoice Number:</p><p>12345</p></div>
                <div className='tw-flex'> <p className='tw-font-bold'>Invoice Date:</p>
                  <p>{currentDate}</p></div>
              </Col>
              <i className="ri-checkbox-circle-fill yellow tick"></i>
              <h4>
                Thank You
              </h4>
              <span>for booking your trip with <p className='tw-text-2xl md:tw-text-4xl blue tw-font-bold tw-pt-4'>EasyGo</p></span><br />
              <div className='tw-flex tw-justify-center pt-3'>
                <Table bordered className='w-50 '>
                  <tbody>

                    {updatedPrice && <tr><td className='tw-font-medium tw-text-xl'>Base Price:</td><td>₹{updatedPrice} per person</td></tr>}
                    {guestSize && <tr><td className='tw-font-medium tw-text-xl'>Guest Size:</td><td>{guestSize}</td></tr>}
                    {serviceCharge && <tr><td className='tw-font-medium tw-text-xl'>Service Charge:</td><td>₹{serviceCharge}</td></tr>}
                    {totalAmt && <tr><td className='tw-font-medium tw-text-xl'>Total Amount:</td><td>₹{totalAmt}</td></tr>}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='tw-flex tw-justify-center tw-overflow-hidden tw-gap-3'>
          <Button className='btn primary_btn mt-4 w-25' onClick={downloadBill}>Download Bill</Button>
          <Button className='btn primary_btn mt-4 w-25'><Link to='/home' className='btntext'>Back To Home</Link></Button>
        </Row>
      </Container>
    </section>
  );
};

export default Thankyou;
