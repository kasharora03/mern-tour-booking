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
            <Col lg='12'>
            <h2 className='gallery_title tw-text-2xl md:tw-text-4xl yellow tw-italic'>Visitor's Gallery</h2>
            <MasonryGallry/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery
