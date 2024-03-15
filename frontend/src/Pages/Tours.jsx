import React,{useState, useRef, useEffect} from 'react'
import '../styles/Home.css';
import './tour.css'
// import CommonSection from '../shared/CommonSection'
import img1 from '../../src/assets/myimg/tourbanner.png'
import banner from '../../src/assets/myimg/banner.PNG'
import SearchBar from '../shared/SearchBar';
import { Container, Row, Col } from 'reactstrap';
import TourCard from '../../src/shared/TourCard';
import tourData from '../../src/assets/data/tours';

const Tours = () => {
  const [pageCount, setPageCount]= useState(0);
  const [page,setpage]=useState(0);

  useEffect(()=>{
    const pages=Math.ceil(5/4) //later backend
    setPageCount(pages);
  },[page]);
  return (
    <div>
      <img src={banner} className='ab' alt='no'/>
      {/* <img src="https://www.sotc.in/images/Emailers/2019/april/travel-insurance/buy-travel-insurance-new.jpg" className='ab' alt='no'/> */}
      <section className='text-center'>
      <Container>
  <Row className='d-flex justify-content-center align-items-center'>
    <SearchBar />
  </Row>
</Container>

      </section>
      <section className='text-center'>
        <Container>
          <Row>
            {
              tourData?.map(tour => (<Col lg='3' md='4' key={tour.id} className='mb-4'><TourCard tours={tour} /></Col>))
            }
            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number} onClick={()=>setpage(number)} className={page===number? "active_page":""}>{number+1}</span>
              ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default Tours
