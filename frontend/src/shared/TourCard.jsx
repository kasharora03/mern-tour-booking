import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './TourCard.css';
import calculate from '../utils/AvgRating';


const TourCard = ({ tours }) => {
  const { id, title, city, photo, price, featured, reviews } = tours;
  const{totalRating,avgRating}= calculate(reviews)
  
  return (
    <div className='tour_card'>
      <Card className='h-100'>
        <div className='tour_img'>
          <img src={photo} alt='tour img' className='img-fluid imgtour' />
          {featured && <span>&nbsp;Featured</span>}
        </div>

        <CardBody className='d-flex flex-column'>
          <div className='card_top d-flex align-items-center justify-content-between'>
            <span className='tour_location d-flex align-items-center gap-1'>
              <i className='ri-map-pin-line'></i>
              {city}
            </span>
            <span className='tour_rating d-flex align-items-center gap-1'>
              <i className='ri-star-fill'></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                'Not Rated'
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className='tour_title '>
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>
          <div className='card_bottom d-flex align-items-center justify-content-between mt-3'>
            <h5>${price}<span>/pp</span></h5>
            <button className='booking_btn'>
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default TourCard;
