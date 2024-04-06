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

    if (loading) return <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>;
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
                                        <span onClick={() => setTourRating(1)}><i class="ri-star-line"></i></span>
                                        <span onClick={() => setTourRating(2)}><i class="ri-star-line"></i></span>
                                        <span onClick={() => setTourRating(3)}><i class="ri-star-line"></i></span>
                                        <span onClick={() => setTourRating(4)}><i class="ri-star-line"></i></span>
                                        <span onClick={() => setTourRating(5)}><i class="ri-star-line"></i></span>
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
