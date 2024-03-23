import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/myimg/logoeasy.png';
// import Subtitle from '../shared/Subtitle';
const quickLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]
const otherLinks = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='bgy footer'>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <img src={logo} alt='no logo' className='flogo' />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400466074!2d77.04417434001834!3d28.527252739872903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710348244490!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className='social d-flex align-items-center gap-4'>
              <Link to='#' className='sociallink'><i className="ri-youtube-fill footericon"></i></Link>
              <Link to='#' className='sociallink'><i className="ri-github-fill footericon"></i></Link>
              <Link to='#' className='sociallink'><i className="ri-instagram-fill footericon"></i></Link>
              <Link to='#' className='sociallink'><i className="ri-facebook-fill footericon"></i></Link>
              <Link to='#' className='sociallink'><i className="ri-linkedin-fill footericon"></i></Link>
            </div>

          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5 className='footer_link_title'>Discover</h5>
            <ListGroup className='footer_quick_links'>
              {
                quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }

            </ListGroup>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5 className='footer_link_title'>Quick Links</h5>
            <ListGroup className='footer_quick_links'>
              {
                otherLinks.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }

            </ListGroup>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5 className='footer_link_title'>Contact</h5>
            <ListGroup className='footer_quick_links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>
                <h6 className='mb-0 d-flex align-items-center gap-2 '>
                  <span><i class="ri-map-pin-line footericon"></i></span>
                  Location: Delhi,Inida
                </h6>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>
                <h6 className='mb-0 d-flex align-items-center gap-2 '>
                  <span><i class="ri-phone-line footericon"></i></span>
                  Phone:98xxxxxxxx
                </h6>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center'>
                <h6 className='mb-0 d-flex align-items-center gap-2 '>
                  <span><i class="ri-mail-line footericon"></i></span>
                  Email:info.easygosample@gmail.com
                </h6>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>Copyright {year},designed and developed by kashish arora.All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;
