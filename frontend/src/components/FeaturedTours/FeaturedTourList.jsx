import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';

import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const FeaturedTourList = () => {
  const {data: featuredTours} = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);
  console.log(featuredTours)
  return (
    <>
      {
        tourData?.map(tours=>(
            <Col md='4' lg='3' sm='6' className='mb-4 justify-content-center d-flex align-items-center justify-content-space-between' key={tours._id}>
            <TourCard tours={tours}/>
            </Col>
        ))
      }
    </>
  )
}

export default FeaturedTourList;