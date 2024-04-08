import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
// import people from '../assets/myimg/ypeople.png';
// const money = require('../assets/myimg/ymoney.png');
// const custom = require('../assets/myimg/ynote.png');

const  serrviceData=[
    {
        imgUrl:"ri-edit-2-line yellow icons",
        title:"Customization",
        desc:"Tailor your journey to perfection with personalized itineraries, ensuring every moment reflects your unique travel style."
    },
    {
        imgUrl: "ri-hand-coin-line yellow icons",
        title:"Transparency",
        desc:"Enjoy peace of mind knowing that our transparent pricing policy keeps you informed at every step, with no hidden costs or surprises."
    },
    {
        imgUrl: "ri-user-6-line yellow icons",
        title:"Trusted Guides",
        desc:"Embark on your adventure with confidence, guided by our seasoned experts who bring local knowledge and professionalism to every tour."
    }
]

const ServiceList = () => {
  return (
    <>
    {
        serrviceData.map((item,index)=>
            <Col lg='3' md='5' key={index}>
                <ServiceCard item={item}/>
            </Col>
        )
    }
    </>
  )
}
;
export default ServiceList
