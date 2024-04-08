import React from 'react';
import '../styles/Home.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import heroimg from '../assets/myimg/heroimg.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList';
import Counter from '../shared/Counter';
import Gallery from '../shared/Gallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer.jsx'
import Accordion from '../shared/Accordian';
import NewsLetter from '../shared/NewsLetter.jsx';
import { Link } from 'react-router-dom';
import Her from '../components/Hero/Her.jsx';


const Home = () => {

  return (
    <div className='tw-w-full'>
      <section className=' tw-flex tw-flex-col tw-justify-center'>
        <Her/>
      </section>
      {/* services list */}
      <section className='my-5'>
        <div className='tw-w-screen'>
          <Row className='tw-d-flex tw-items-center lg:tw-px-24 tw-px-5'>
            <Col lg='3' className=''>
              <h5 className='tw-text-2xl md:tw-text-4xl yellow tw-italic'>What We Offer</h5>
            </Col>
            <ServiceList />
          </Row>

        </div>
      </section>
      {/* tours cards */}
      <section className='mt-4'>
        <Container>
          <Row>
            <Col lg="12" className='mb-2'>
            <h5 className='tw-text-2xl md:tw-text-4xl yellow tw-italic '>Featured Tours</h5>
            </Col>
          </Row>
          <Row>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* tours cards end*/}
      {/* exp sec start*/}
      {/* <div>
        <Counter />
      </div> */}
      {/* exp sec end*/}
      {/* gallry start */}
      <section className='tw-mt-5 md:tw-mt-10'>
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
    </div>
  )
}
export default Home;
