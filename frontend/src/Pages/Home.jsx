import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList';
import Gallery from '../shared/Gallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Accordion from '../shared/Accordian';
import NewsLetter from '../shared/NewsLetter.jsx';
import { Link } from 'react-router-dom';
import Her from '../components/Hero/Her.jsx';

const Home = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='tw-w-full'>
      <section className=' tw-flex tw-flex-col tw-justify-center'>
        <Her />
      </section>
      {/* services list */}
      {/* <section>
        <Container className='service'>
          <Row className='tw-flex tw-justify-around'>
            <ServiceList/>
          </Row>
        </Container>
      </section> */}
      
      {/* tours cards */}
      <section className='mt-4'>
        <Container>
          <Row>
            <Col lg="12" className='mb-2'>
              <h5 className='tw-text-2xl md:tw-text-4xl yellow tw-italic '>Featured Tours</h5>
            </Col>
          </Row>
          <Row className=''>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section className='explore tw-mx-auto tw-flex tw-justify-center pt-0 mt-0 tw-overflow-hidden'>
        <span>
          <Container>
            <Button className='btn primary_btn tw-rounded-none'><Link to='/tours'>Explore More Tours <i className="ri-arrow-right-line tw"></i></Link></Button>
          </Container>
        </span>

      </section>
      {/* tours cards end*/}
      {/* exp sec start*/}
      {/* <div>
        <Counter />
      </div> */}
      {/* exp sec end*/}
      {/* gallry start */}
      <section className='tw-mt-5 tw-mb-10 md:tw-mt-10'>
        <Gallery />
      </section>

      {/* galley end */}
      {/* testimonial sec start */}
      <section>

        <Container>
          <Accordion />
        </Container>

      </section>
      <section className='tw-px-5'>
        <NewsLetter />
      </section>
      <section>
        <Testimonial />
      </section>

      {/* footer called in layout */}
      
      {/* Go to Top button */}
      <div className='tw-flex tw-justify-center'>
      {showGoToTop && (
        <Button className='go-to-top-btn primary_btn' onClick={handleGoToTop}>
          <i className='ri-arrow-up-line'></i> Go to Top
        </Button>
      )}
      </div>
    </div>
  )
}

export default Home;
