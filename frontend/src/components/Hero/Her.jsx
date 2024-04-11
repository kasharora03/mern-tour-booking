import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import heroimg from '../../assets/myimg/heroimg.png'
import SearchBar from '../../shared/SearchBar';
import '../../styles/Home.css';

const Her = () => {
  return (
    <Container>
      <Row className='justify-content-center align-items-center h-100 homerow' id="topsec">
        <Col lg='6' className='tw-flex tw-justify-center'>
          <div className='her_content'>
            <div className='hero_subtitle d-flex align-items-center'>
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
      {/* <section className='text-center'>
        <Container className='tw-flex tw-justify-center py-2'>
          <Row className='d-flex justify-content-center align-items-center '>
            <SearchBar />
          </Row>
        </Container>

      </section> */}
      <SearchBar />
    </Container>
  )
}

export default Her;
