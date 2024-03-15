import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
// import people from '../assets/myimg/ypeople.png';
// const money = require('../assets/myimg/ymoney.png');
// const custom = require('../assets/myimg/ynote.png');

const  serrviceData=[
    {
        imgUrl:require('../assets/myimg/ynotee.png'),
        title:"Customization",
        desc:"a standard placeholder text often used in design and typesetting, you can use the "
    },
    {
        imgUrl: require('../assets/myimg/ymoney.png'),
        title:"Transparency",
        desc:"a standard placeholder text often used in design and typesetting, you can use the "
    },
    {
        imgUrl: require('../assets/myimg/ypeople.png'),
        title:"Trusted Guides",
        desc:"a standard placeholder text often used in design and typesetting, you can use the "
    }
]

const ServiceList = () => {
  return (
    <>
    {
        serrviceData.map((item,index)=>
            <Col lg='3' key={index}>
                <ServiceCard item={item}/>
            </Col>
        )
    }
    </>
  )
}
;
export default ServiceList
