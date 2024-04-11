import React, { useState, useRef, useEffect } from 'react'
import '../styles/Home.css';
import './tour.css'
// import CommonSection from '../shared/CommonSection'
// import img1 from '../../src/assets/myimg/tourbanner.png'
import banner from '../../src/assets/myimg/banner.PNG'
import SearchBar from '../shared/SearchBar';
import { Container, Row, Col, Spinner } from 'reactstrap';
import TourCard from '../../src/shared/TourCard';
// import tourData from '../../src/assets/data/tours';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCounts`)

  useEffect(() => {
    const page = Math.ceil(tourCount / 8)
    setPageCount(page);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);
  return (
    <div className='cardcont'>
      {/* <img src={banner} className='ab' alt='no' /> */}
      {/* <img src="https://www.sotc.in/images/Emailers/2019/april/travel-insurance/buy-travel-insurance-new.jpg" className='ab' alt='no'/> */}
      <section className='tw-flex tw-justify-centermx-auto'>
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* <SearchBar /> */}
      <section className='text-center py-2'>
        <Container >
          {loading && <Spinner color="warning">
            Loading...
          </Spinner>}
          {error && <h4 className='text-center'>{error}</h4>}
          {
            !loading && !error && <Row>
              {
                tours?.map(tour => (<Col lg='3' md='4' sm='6' key={tour._id} className='mb-4'><TourCard tours={tour} /></Col>))
              }
              <Col lg='12' className='b'>
                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                  {[...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)} className={page === number ? "active_page" : ""}>{number + 1}</span>
                  ))}
                </div>
              </Col>
            </Row>
          }
        </Container>
      </section>

    </div>
  )
}

export default Tours
