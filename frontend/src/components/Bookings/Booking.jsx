import React, { useState, useContext } from 'react';
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';
import swal from 'sweetalert';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    pickUp: "", // Store address instead of latitude and longitude
    time: "",
    custom: "",
    bookAt: "", // Add bookAt field for date
    guestSize: 1,
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Function to get the minimum date for the input date field
  const getMinimumDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  const getMaxxValues = () => {
    const maxxThreshold = 5;
    const { guestSize } = booking;

    const maxx = guestSize < maxxThreshold ? guestSize : maxxThreshold;
    const serviceCharge = Math.floor(maxx < 5 ? price / 100 : price / 150);
    const updatedPrice = maxx < 5 ? price : price - 200;
    return { serviceCharge, updatedPrice };
  };

  const { serviceCharge, updatedPrice } = getMaxxValues();

  const totalAmt = Math.floor(
    Number(updatedPrice) * Number(booking.guestSize) + Number(serviceCharge)
  );

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getAddress(latitude, longitude);
        },
        (error) => {
          console.error('Error occurred while getting current position:', error);
          // Handle error
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser');
      // Handle unsupported browser
    }
  };

  const getAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      if (!response.ok) {
        throw new Error('Failed to fetch address data');
      }
      const data = await response.json();
      const address = data.display_name;
      setBooking((prev) => ({
        ...prev,
        pickUp: address,
      }));
    } catch (error) {
      console.error('Error occurred while fetching address:', error);
      // Handle error
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (!user || user === undefined || user === null) {
        swal({
          icon: "error",
          text: 'Please Sign In!',
          buttons: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "bgyellow",
              closeModal: true
            }
          }
        });
        // Return from function if user is not logged in
        return;
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(booking)
      });
      const result = await res.json();
      if (!res.ok) {
        swal({
          icon: "error",
          text: result.message,
          buttons: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "bgyellow",
              closeModal: true
            }
          }
        });
      }
    } catch (error) {
      swal({
        icon: "error",
        text: error.message,
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "bgyellow",
            closeModal: true
          }
        }
      });
    }
    navigate('/thankyou', {
      state: {
        totalAmt,
        updatedPrice,
        serviceCharge,
        guestSize: booking.guestSize
      }
    });
  };
  

  return (
    <div className='booking'>
    
      <div className='booking_top d-flex justify-content-between align-items-center'>
        <h3>₹{price}<span>/per person</span></h3>
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
          <FormGroup className='tw-flex-col tw-justify-between'>
            <input type='text' placeholder='Pickup Location' id='pickUp' value={booking.pickUp} required onChange={handleChange} />
            <span><Button className="btn primary_btn tw-mt-2 tw-text-left" onClick={getCurrentLocation}>Use Current Location</Button></span>
          </FormGroup>
          <FormGroup>
            <input type='time' placeholder='Pickup Time' id='time' required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type='text' placeholder='Add customization details' id='custom' required onChange={handleChange} />
          </FormGroup>
          <FormGroup className='d-flex  gap-3'>
            {/* Set the min attribute to the minimum date */}
            <input type='date' placeholder='Book At' id='bookAt' required onChange={handleChange} min={getMinimumDate()} />
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
              ₹{updatedPrice} <i className="ri-close-line"></i> 1 person
            </h5>
            <h5>₹{updatedPrice}</h5>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5>Service Charges</h5>
            <h5>₹{serviceCharge} </h5>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='total'>Total</h5>
            <h5 className='total'>₹{totalAmt}</h5>
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
