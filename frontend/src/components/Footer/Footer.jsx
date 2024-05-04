import React, {useEffect} from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const quickLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/contact',
    display: 'Connect'
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
  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, []);
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='bgy footer'>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className='logo'>
            <Link to='/'><p className='tw-text-2xl md:tw-text-4xl blue tw-font-bold tw-pt-2 nounder'>EasyGo</p></Link>
            </div>
            <div className='social d-flex align-items-center gap-4 5'>
              <Link to='#' className='sociallink'><i className="ri-youtube-fill footericon"></i></Link>
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
                  <Link to={item.path} onClick={scrollToTop}>{item.display}</Link>
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
                  <Link to={item.path} onClick={scrollToTop}>{item.display}</Link>
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
