import React, { useState } from 'react';
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "ex@gmail.com",
    fullNAme: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const getMaxxValues = () => {
    const maxxThreshold = 5;
    const { guestSize } = credentials;
    
    const maxx = guestSize < maxxThreshold ? guestSize : maxxThreshold;
    const serviceCharge = maxx < 5 ? 20 : 10;
    const updatedPrice = maxx < 5 ? 110 : 99;
    return { serviceCharge, updatedPrice };
  };
  

  const { serviceCharge, updatedPrice } = getMaxxValues();

  const totalAmt =
    Number(updatedPrice) * Number(credentials.guestSize) + Number(serviceCharge);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/thankyou');
  };

  return (
    <div className='booking'>
      <div className='booking_top d-flex justify-content-between align-items-center'>
        <h3>${price}<span>per person</span></h3>
        <span className='tour_rating d-flex align-items-center gap-1'>
          <i className='ri-star-fill '></i>
          {avgRating === 0 ? null : avgRating}
          ({reviews?.length})
        </span>
      </div>
      {/* booking form */}
      <div className='booking_form'>
        <h5>Information</h5>
        <Form className='info-form' onSubmit={handleClick}>
          <FormGroup>
            <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type='number' placeholder='Phone Number' id='phone' required onChange={handleChange} />
          </FormGroup>
          <FormGroup className='d-flex  gap-3'>
            <input type='date' placeholder='' id='bookAt' required onChange={handleChange} />
            <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange} />
          </FormGroup>
        </Form>
      </div>
      {/* booking form end */}
      {/* price calculation */}
      <div className='booking_bottom'>
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>
              ${updatedPrice} <i className="ri-close-line"></i> 1 person
            </h5>
            <h5>${updatedPrice}</h5>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5>Service Charges</h5>
            <h5>${serviceCharge} </h5>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='total'>Total</h5>
            <h5 className='total'>${totalAmt}</h5>
          </ListGroupItem>
        </ListGroup>
        <Button className='btn primary_btn w-100 mt-4' onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
