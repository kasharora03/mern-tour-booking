import React, { useEffect, useRef, useState, useContext } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import '../styles/TourDetail.css'
import useFetch from '../hooks/useFetch';
import calculate from '../utils/AvgRating';
import avtar from '../assets/images/avatar.jpg';
import Booking from '../components/Bookings/Booking';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {

    const { id } = useParams();
    const reviewmsgRef = useRef('');
    const [tourRating, setTourRating] = useState(null);
    const { user } = useContext(AuthContext)

    // Fetch tour data from the server
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [tour])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (!tour) return <p>Tour not found</p>;

    const { photo, title, desc, address, price, reviews, city, distance, maxGroupSize } = tour;
    const { totalRating, avgRating } = calculate(reviews || []); // Ensure reviews is an array

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewText = reviewmsgRef.current.value;

        try {
            if (!user || user === undefined || user === null) {
                alert('Login Required')
            }
            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: tourRating
            }
            const res = await fetch(`${BASE_URL}/review/${id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(reviewObj)
            })
            const result = await res.json()
            if (!res.ok){
                return alert(result.message);
            }
            alert(result.message);
            
        } catch (error) {
            alert(error.message)
        }
    };



    return (
        <section>
            <Container>
                {loading && <h4 className='text-center'>loading</h4>}
                {error && <h4 className='text-center'>{error}</h4>}
                {!loading && !error && <Row className='rowclass'>
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
                                <Form onSubmit={handleSubmit}>
                                    <div className='d-flex align-items-center gap-3 mb-4 rating_grp'>
                                        <span onClick={() => setTourRating(1)}>1 <i class="ri-star-fill"></i></span>
                                        <span onClick={() => setTourRating(2)}>2 <i class="ri-star-fill"></i></span>
                                        <span onClick={() => setTourRating(3)}>3 <i class="ri-star-fill"></i></span>
                                        <span onClick={() => setTourRating(4)}>4 <i class="ri-star-fill"></i></span>
                                        <span onClick={() => setTourRating(5)}>5 <i class="ri-star-fill"></i></span>
                                    </div>
                                    <div className='review-input'>
                                        <input type='text' ref={reviewmsgRef} placeholder='share reviews' required />
                                        <button className='btn primary_btn' type='submit'>Submit</button>
                                    </div>
                                </Form>
                                <ListGroup className='user_reviews'>
                                    {reviews?.map((review, index) => (
                                        <div key={index} className='reviews_item'>
                                            <img src={avtar} alt='' />
                                            <div className='w-100'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <h5>{review.username}</h5>
                                                        <p className='mb-0'>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                                                    </div>
                                                    <span className='d-flex align-items-center justify-content-between'>{review.rating} <i class="ri-star-fill yellow"></i></span>
                                                </div>
                                                <p className='fw-bold'>{review.reviewText}</p> {/* Use reviewText instead of msg */}
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
                </Row>}
            </Container>
        </section>
    );
};

export default TourDetails;
