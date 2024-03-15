import React from 'react';
import './Service_card.css'

const ServiceCard = ({item}) => {
const {imgUrl, title,desc}=item;
  return (
    <div className='service_item'>
      <div className='service_img'>
        <img src={imgUrl} alt='no img'/>
      </div>
      <h5 className='service_title'>{title}</h5>
      <h6  className="service_description">{desc}</h6>
    </div>
  )
}

export default ServiceCard;
