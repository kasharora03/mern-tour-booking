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


const Home = () => {

  return (
    <>
      <section className='justify-content-md-center'>
        <Container>
          <Row className='d-flex align-items-center h-100 homerow' id="topsec">
            <Col lg='6'>
              <div className='her_content'>
                <div className='hero_subtitle d-flex align-items-center'>
                  {/* <Subtitle subtitle={"Beyond Boundaries: Where Extraordinary Journeys Converge with Timeless Memories"} /> */}
                  <p className='blue heropara'>
                    Beyond Boundaries: Where Extraordinary Journeys Converge with Timeless Memories
                  </p>
                </div>
                <h2 className='para'>Break free from the ordinary as <span className='yellow fw-bolder'>EasyGo</span> invites you to explore local treasures through well-curated itineraries and introduces a world where managing tour packages is an art of <span className='yellow fw-bolder'>creating unforgettable memories</span></h2>
              </div>
            </Col>
            <Col lg='6'>
              <img src={heroimg} alt='no img' />

            </Col>
          </Row>
          <SearchBar />
        </Container>
      </section>
      {/* services list */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services_subtitle'>what we offer</h5>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* tours cards */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle subtitle={"Featured Tours"} />

            </Col>
          </Row>
          <Row>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* tours cards end*/}
      {/* exp sec start*/}
      <section>
        <Counter/>
      </section>
      {/* exp sec end*/}
      {/* gallry start */}
      <Gallery/>
      {/* galley end */}
      {/* testimonial sec start */}
      <section>
      
      <Container>
      <Accordion/>
      </Container>
        
      </section>
      <section>
        <NewsLetter/>
      </section>
      <section>
        <Testimonial/>
      </section>
      
      {/* footer called in layout */}
    </>
  )
}
export default Home;
