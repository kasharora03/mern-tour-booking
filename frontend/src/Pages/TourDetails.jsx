import React, { useEffect, useRef, useState, useContext } from 'react';
import { Container, Row, Col, Form, ListGroup, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';
import '../styles/TourDetail.css';
import useFetch from '../hooks/useFetch';
import calculate from '../utils/AvgRating';
import avtar from '../assets/images/avatar.jpg';
import Booking from '../components/Bookings/Booking';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import errorimg from '../assets/myimg/errorimg.jpg';
import swal from 'sweetalert';

// Star component
function Star(props) {
    return (
        <span
            className={`rating-icon ${(props.position <= props.hoverRating || props.position <= props.tourRating) ? 'active' : ''}`}
            onMouseEnter={() => props.handleHover(props.position)}
            onMouseLeave={() => props.handleHover(null)}
            onClick={() => props.handleClick(props.position)}
        >
            {props.position <= props.hoverRating || props.position <= props.tourRating ? <i className="ri-star-fill"></i> : <i className="ri-star-line"></i>}
        </span>
    );
}

const TourDetails = () => {
    const { id } = useParams();
    const reviewmsgRef = useRef('');
    const [tourRating, setTourRating] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);
    const { user } = useContext(AuthContext);

    // Fetch tour data from the server
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [tour]);

    if (loading) return <Spinner color="warning" />;
    if (error) return <p>Error: {error.message}</p>;
    if (!tour) return <p>Tour not found</p>;

    const { photo, title, desc, address, price, reviews, city, distance, maxGroupSize } = tour;
    const { totalRating, avgRating } = calculate(reviews || []);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    const handleHover = (rating) => {
        setHoverRating(rating);
    };

    const handleClick = (rating) => {
        setTourRating(rating);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewText = reviewmsgRef.current.value;
        reviewmsgRef.current.value = '';
        setTourRating(null);
    
        try {
            if (!user || user === undefined || user === null) {
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Login Required',
                    buttons: {
                        confirm: {
                            text: 'OK',
                            value: true,
                            visible: true,
                            className: 'bgyellow',
                            closeModal: true,
                        },
                    },
                });
            }
            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: tourRating,
            };
            const res = await fetch(`${BASE_URL}/review/${id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(reviewObj),
            });
            const result = await res.json();
            
            if (!res.ok) {
                return swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: result.message,
                    buttons: {
                        confirm: {
                            text: 'OK',
                            value: true,
                            visible: true,
                            className: 'bgyellow', // Apply the class to the confirm button
                            closeModal: true,
                        },
                    },
                });
            }
            swal({
                icon: 'success',
                // title: 'Oops...',
                text: result.message,
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'bgyellow',
                        closeModal: true,
                    },
                },
            });
            // Reload the page only when review is submitted successfully
            window.location.reload();
        } catch (error) {
            swal({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
                buttons: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'bgyellow', // Apply the class to the confirm button
                        closeModal: true,
                    },
                },
            });
        }
    };
    

    return (
        <section>
            <Container>
                <Row className="rowclass">
                    <Col lg="7">
                        <div className="tour_content">
                            <img
                                src={photo ? photo : errorimg}
                                alt="tour img"
                                className=" imgtour tw-w-full"
                                onError={(e) => {
                                    e.target.src = errorimg; // Set error image on error
                                }}
                            />
                            <div className="tour_info">
                                <h2>{city}</h2>
                                <div className="tour_extra_details d-flex align-items-center">
                                    <span>
                                        <i className="ri-map-pin-line"></i>
                                        {address}
                                    </span>
                                    <span>

                                    ₹{price} per person
                                    </span>
                                </div>
                                {/* <div className="tour_extra_details">
                                    <span>
                                        <i className="ri-wallet-2-line"></i>
                                        {price} per person
                                    </span>
                                    <span>
                                        <i className="ri-user-fill"></i>
                                        group size:{maxGroupSize}
                                    </span>
                                </div> */}
                                <h5>Description</h5>
                                <p>{desc}</p>
                            </div>
                            <div className="tour_reviews">
                                <h4>Reviews ({reviews?.length} reviews)</h4>
                                <Form onSubmit={handleSubmit}>
                                    <div className="d-flex align-items-center gap-3 mb-4 rating_grp">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                position={star}
                                                tourRating={tourRating}
                                                hoverRating={hoverRating}
                                                handleHover={handleHover}
                                                handleClick={handleClick}
                                            />
                                        ))}
                                    </div>
                                    <div className="review-input">
                                        <input type="text" ref={reviewmsgRef} placeholder="share reviews" required />
                                        <button className="btn primary_btn" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                                <ListGroup className="user_reviews">
                                    {reviews?.map((review, index) => (
                                        <div key={index} className="reviews_item">
                                            <img src={avtar} alt="" />
                                            <div className="w-100">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <h5>{review.username}</h5>
                                                        <p className="mb-0">{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                                                    </div>
                                                    <span className="d-flex align-items-center justify-content-between">
                                                        {review.rating} <i className="ri-star-fill yellow"></i>
                                                    </span>
                                                </div>
                                                <p className="fw-bold">{review.reviewText}</p>
                                            </div>
                                        </div>
                                    ))}
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <Booking tour={tour} avgRating={avgRating} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TourDetails;
