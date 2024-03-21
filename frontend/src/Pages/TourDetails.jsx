import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import '../styles/TourDetail.css'
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import calculate from '../utils/AvgRating';
import avtar from '../assets/images/avatar.jpg';
import Booking from '../components/Bookings/Booking';

const TourDetails = () => {
    const { id } = useParams();
    const reviewmsgRef = useRef('');
    const [tourRating, setTourRating] = useState(null);

    // Fetch tour data from the server
    const { data: tour, isLoading, error } = useFetch(`${BASE_URL}/tours/${id}`);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (!tour) return <p>Tour not found</p>;

    const { photo, title, desc, address, price, reviews, city, distance, maxGroupSize } = tour;
    const { totalRating, avgRating } = calculate(reviews || []); // Ensure reviews is an array

    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewtext = reviewmsgRef.current.value;
        // Here you can submit the review text and rating to the server
    };

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
                                    <span><i className="ri-map-pin-line"></i>{address}</span>
                                </div>
                                <div className='tour_extra_details'>
                                    <span><i className="ri-map-pin-user-fill"></i>{city}</span>
                                    <span><i className="ri-wallet-2-line"></i>{price} per person</span>
                                    <span><i className="ri-user-fill"></i>group size:{maxGroupSize}</span>
                                </div>
                                <h5>Description</h5>
                                <p>{desc}</p>
                            </div>
                            <div className='tour_reviews'>
                                <h4>Reviews ({reviews?.length} reviews)</h4>
                                {/* ... (rating and review input sections) ... */}
                                <ListGroup className='user_reviews'>
                                    {reviews?.map((review, index) => (
                                        <div key={index} className='reviews_item'>
                                            <img src={avtar} alt='' />
                                            <div className='w-100'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <h5>{review.username}</h5>
                                                        <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                                                    </div>
                                                    <span className='d-flex align-items-center justify-content-between'>{review.rating} <i class="ri-star-fill yellow"></i></span>
                                                </div>
                                                <p>{review.reviewText}</p> {/* Use reviewText instead of msg */}
                                            </div>
                                        </div>
                                    ))}
                                </ListGroup>
                            </div>

                        </div>
                    </Col>
                    <Col lg='4'>
                        <Booking tour={tour} avgRating={avgRating} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TourDetails;
