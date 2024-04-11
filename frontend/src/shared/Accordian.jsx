import React, { useState, useRef } from "react";
// import ReactDOM from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import './Acc.css';
const faqs = [
  {
      id: 1,
      header: "What regions of India do your tours cover?",
      text: `Our tours cover diverse regions of India, including popular destinations like Rajasthan, Kerala, Himachal Pradesh, Goa, and more. We also offer tours to lesser-known but equally enchanting places.`,
  },
  {
      id: 2,
      header: "Are your guides knowledgeable about Indian history and culture?",
      text: `Yes, our guides are highly knowledgeable about Indian history, culture, and traditions. They are passionate about sharing insights into the rich heritage of India with our travelers.`,
  },
  {
      id: 3,
      header: "What measures are in place to ensure the safety of travelers?",
      text: `Safety is our utmost priority. We adhere to strict safety standards and closely monitor travel advisories. Our guides are trained in first aid and emergency response procedures to ensure a secure journey.`,
  },
  {
      id: 4,
      header: "Do you offer specialized tours for wildlife enthusiasts?",
      text: `Absolutely! We offer specialized wildlife tours to national parks and sanctuaries across India. Experience the thrill of spotting tigers, elephants, and other exotic wildlife in their natural habitats.`,
  }
];

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
                <div className="rc-accordion-card">
            <div className="rc-accordion-header bb">
            
                <div className={`rc-accordion-toggle bb p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <i class="ri-arrow-down-s-line plus"></i>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>

        
    )
}

const Accordian = () => {
    const [active, setActive] = useState(null);
  
    const handleToggle = (index) => {
      if (active === index) {
        setActive(null);
      } else {
        setActive(index);
      }
    }
  
    return (
      <Container fluid className="d-flex align-items-center justify-content-center mb-0">
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg='7' >
            <div className="card1 text-center">
              <div className="card-body">
                <h4 className=" tw-justify-start mb-4 mt-3 tw-text-2xl md:tw-text-4xl yellow tw-italic">Frequently Asked Questions</h4>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Accordian;