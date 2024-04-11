import React, { useState, useEffect } from 'react';
// import CommonSection from '../shared/CommonSection';
import { Container, Row, Col, Button } from 'reactstrap';
import { useLocation, Link } from 'react-router-dom';
import TourCard from '../shared/TourCard';
// import NewsLetter from '../shared/NewsLetter';
import no from '../assets/myimg/notfound.png'

const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const searchedCity = location.state ? location.state.city : '';

  useEffect(() => {
    if (location.state && location.state.data) {
      setData(location.state.data);
    }
  }, [location.state]);

  return (
    <div className=''>
      
      <section >
        <Container>
          <Row className=' tw-pt-5'>
          <p className='tw-text-xl tw-font-medium tw-capitalize'>{`Results for ${searchedCity}`}</p>
            {data.length === 0 ? (
              <Col>
                <div className='tw-flex tw-justify-center md:tw-pt-20 tw-pt-5 tw-align-middle'>
                  <img src={no} alt='not found' />
                </div>
                {/* <span className='tw-flex tw-justify-center py-2'>
            <Button className='btn primary_btn tw-rounded-none '><Link to='/tours' className='tw-text-white tw-no-underline'>Explore More Tours <i class="ri-arrow-right-line tw"></i></Link></Button>
            </span> */}
              </Col>
            ) : (
              data.map((tour) => (
                <Col lg="3" md='6' className="mb-4" key={tour._id}>
                  <TourCard tours={tour} />
                </Col>
              ))
            )}
            <span className='tw-flex tw-justify-center py-2'>
              <Button className='btn primary_btn tw-rounded-none '><Link to='/tours' className='tw-text-white tw-no-underline'>Explore More Tours <i class="ri-arrow-right-line tw"></i></Link></Button>
            </span>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SearchResultList;
