import React from 'react';
import '../styles/Home.css';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import MasonryGallry from '../components/ImageGallery/MasonryGallry';

const Gallery = () => {
  return (
    <div>
      <Container>
        <Row>
        <Subtitle subtitle={"gallery"}/>
            <Col lg='12'>
            <h2 className='gallery_title'>visitors gallery</h2>
            <MasonryGallry/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery
