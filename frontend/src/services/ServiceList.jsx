import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

const serrviceData = [
  {
    imgUrl: "ri-edit-2-line yellow icons",
    title: "Customization",
    points: [
      "Tailor your journey to perfection with personalized itineraries.",
      "Ensure every moment reflects your unique travel style.",
    ],
  },
  {
    imgUrl: "ri-hand-coin-line yellow icons",
    title: "Transparency",
    points: [
      "Enjoy peace of mind with our transparent pricing policy.",
      "Stay informed at every step with no hidden costs or surprises.",
    ],
  },
  {
    imgUrl: "ri-user-6-line yellow icons",
    title: "Trusted Guides",
    points: [
      "Embark on your adventure with confidence.",
      "Guided by our seasoned experts who bring local knowledge.",
      "Professionalism to every tour.",
    ],
  },
];

const ServiceList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {serrviceData.map((item, index) => (
        <Col lg='3' md='5' key={index} className="mb-4">
          <ServiceCard item={item} />
        </Col>
      ))}
    </div>
  );
};

export default ServiceList;
