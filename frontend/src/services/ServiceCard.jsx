import React from 'react';
import './Service_card.css';

const ServiceCard = ({ item }) => {
  const { imgUrl, title, points } = item;

  return (
    <div className='service_item d-flex flex-column h-100'>
      <div className='service_img'>
        <i className={imgUrl}></i>
      </div>
      <h5 className='service_title blue tw-text-xl md:tw-text-3xl'>{title}</h5>
      <ul className="service_points flex-grow-1" style={{ overflowY: 'auto' }}>
        {points.map((point, index) => (
          <li key={index} className="service_point yellow"><span className='pr-2 tw-mr-3'><i class="ri-star-fill"></i></span>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
