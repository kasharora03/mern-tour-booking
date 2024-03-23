import React from 'react';
import TourCard from '../../shared/TourCard';
// import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';

import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const FeaturedTourList = () => {
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);

  return (
    <>
      {
        loading && <h4>loadingggggggggggg</h4>
      }
      {
        error && <h4>{error}</h4>
      }
      {
        !loading && !error && featuredTours?.map(tours => (
          <Col md='4' lg='3' sm='6' className='mb-4 justify-content-center d-flex align-items-center justify-content-space-between' key={tours._id}>
            <TourCard tours={tours} />
          </Col>
        ))
      }
    </>
  )
}

export default FeaturedTourList;