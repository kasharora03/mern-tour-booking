import React,{ useRef, useState } from 'react'
import '../styles/TourDetail.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { Router, useParams } from 'react-router-dom'
import tourData from '../../src/assets/data/tours';
import calculate from '../utils/AvgRating';
import avtar from '../assets/images/avatar.jpg';
import Booking from '../components/Bookings/Booking';

const TourDetails = () => {
    const { id } = useParams();
    const reviewmsgRef =useRef('');
    const [tourRating, setTourRating] = useState(null);
    // laterwill call from api database
    const tour = tourData.find(tour => tour.id === id)
    // destructure
    const { photo, title, desc, address, price, reviews, city, distance, maxGroupSize } = tour;
    const { totalRating, avgRating } = calculate(reviews);
    // format date
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    // submit req to server
    const submiHandler = e=>{
        e.preventDefault();
        const reviewtext = reviewmsgRef.current.value;
        // alert(`${reviewtext},${tourRating}`)
    }

    return (
        <section>
            <Container>
                <Row className='rowclass'>
                    <Col lg='7'>
                        <div className='tour_content'>
                            <img src={photo} alt='' />
                            <div className='tour_info'>
                                <h2>{title}</h2>
                                <div className='tour_extra_details d-flex align-items-center'>
                                    <span className='tour_rating d-flex align-items-center gap-1'>
                                        <i className='ri-star-fill '></i>
                                        {avgRating === 0 ? null : avgRating}
                                        {totalRating === 0 ? (
                                            'Not Rated'
                                        ) : (
                                            <span>{reviews.length}</span>
                                        )}
                                    </span>
                                    <span><i class="ri-map-pin-line"></i>{address}</span>
                                </div>
                                <div className='tour_extra_details'>
                                    <span><i class="ri-map-pin-user-fill"></i>{city}</span>
                                    <span><i class="ri-wallet-2-line"></i>{price} per person</span>
                                    <span><i class="ri-user-fill"></i>group size:{maxGroupSize}</span>
                                </div>
                                <h5>Description</h5>
                                <p>{desc}</p>
                            </div>
                            {/* tour review sec start */}
                            <div className='tour_reviews mt-4'>
                                <h4>Reviews  ({reviews?.length} reviews)</h4>
                                <Form onSubmit={submiHandler}>
                                    <div className='d-flex align-items-center gap-3 mb-4 rating_grp'>
                                        <span onClick={()=>setTourRating(1)}>1 <i class="ri-star-fill"></i></span>
                                        <span onClick={()=>setTourRating(2)}>2 <i class="ri-star-fill"></i></span>
                                        <span onClick={()=>setTourRating(3)}>3 <i class="ri-star-fill"></i></span>
                                        <span onClick={()=>setTourRating(4)}>4 <i class="ri-star-fill"></i></span>
                                        <span onClick={()=>setTourRating(5)}>5 <i class="ri-star-fill"></i></span>
                                    </div>
                                    <div className='review-input'>
                                        <input type='text' ref={reviewmsgRef} placeholder='share reviews' required/>
                                        <button className='btn primary_btn' type='submit'>Submit</button>
                                    </div>
                                </Form>
                                <ListGroup className='user_reviews'>
                                    {reviews?.map(reviews => (
                                        <div className='reviews_item'>
                                            <img src={avtar} alt='' />
                                            <div className='w-100'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <h5>{reviews.name}</h5>
                                                        <p>{new Date("01-02-2024").toLocaleDateString("en-Us", options)}</p>
                                                    </div>
                                                    <span className='d-flex align-items-center justify-content-between'>{reviews.rating} <i class="ri-star-fill yellow"></i></span>
                                                </div>
                                                <p>{reviews.msg}</p>
                                            </div>
                                        </div>
                                    ))}
                                </ListGroup>
                            </div>
                            {/* tour review sec end */}
                        </div>
                    </Col>
                    <Col lg='4'>
                    <Booking tour={tour} avgRating={avgRating}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TourDetails