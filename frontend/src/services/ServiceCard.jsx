import React from 'react';
import './Service_card.css'

const ServiceCard = ({item}) => {
const {imgUrl, title,desc}=item;
  return (
    <div className='service_item'>
      <div className='service_img'>
      <i class={imgUrl}></i>
      </div>
      <h5 className='service_title blue tw-text-xl md:tw-text-3xl'>{title}</h5>
      <h6  className="service_description tw-italic tw-font-normal">{desc}</h6>
    </div>
  )
}

export default ServiceCard;
