import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';

const FeaturedTourList = () => {
  return (
    <>
      {
        tourData?.map(tours=>(
            <Col md='4' lg='3' sm='6' className='mb-4 justify-content-center d-flex align-items-center justify-content-space-between' key={tours.id}>
            <TourCard tours={tours}/>
            </Col>
        ))
      }
    </>
  )
}

export default FeaturedTourList;