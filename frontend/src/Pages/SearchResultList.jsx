import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard';
import NewsLetter from '../shared/NewsLetter';

const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (location.state && location.state.data) {
      setData(location.state.data);
    }
  }, [location.state]);

  return (
    <div>
      <CommonSection title="Search Result" />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <Col>
                <h4 className="text-center">No data found</h4>
              </Col>
            ) : (
              data.map((tour) => (
                <Col lg="3" md='6' className="mb-4" key={tour._id}>
                  <TourCard tours={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
        <NewsLetter/>
      </section>
    </div>
  );
};

export default SearchResultList;
