import React, {useEffect} from 'react'
// import { Container, Row, Col, Button } from 'reactstrap'
import '../styles/Home.css';
// import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';


const NewsLetter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className='newsletter '>
      <section id="cont" className="Contact tw-my-5">
        <div class="containerr">
          <div class="contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul class="info">
                <li>
                  <span><i class="ri-map-pin-line contacti "></i></span>
                  <span>
                    New Delhi
                  </span>
                </li>
                <li>
                  <span><i class="ri-mail-line contacti"></i></span>
                  <span>info.easygosample@gmail.com</span>
                </li>
                <li>
                  <span><i class="ri-phone-line contacti"></i></span>
                  <span>+91 98xxxxxxxx</span>
                </li>
              </ul>
            </div>
            <ul className='sci'>
            <li><Link><i class="ri-youtube-fill text-white"></i></Link></li>
            <li><Link><i class="ri-github-fill text-white"></i></Link></li>
            <li><Link><i class="ri-instagram-fill text-white"></i></Link></li>
              <li><Link><i class="ri-facebook-circle-fill text-white "></i></Link></li>
              <li><Link><i class="ri-whatsapp-fill text-white"></i></Link></li>
              <li><Link><i class="ri-linkedin-fill text-white"></i></Link></li>
            </ul>
          </div>
          <div class="contactForm">
            <h2>Send a Message</h2>
            <form class="formBox" action='https://formspree.io/f/xgegzqpo' method='POST'>
              <div class="inputBox md:tw-w-[50%] tw-w-full ">
                <input type="text" required name="firstname" className='pr-10'/>
                <span>First Name</span>
              </div>
              <div class="inputBox md:tw-w-[50%] tw-w-full">
                <input type="text" required name="lastname" />
                <span>Last Name</span>
              </div>
              <div class="inputBox md:tw-w-[50%] tw-w-full">
                <input type="email" required name="email" />
                <span>Email Address</span>
              </div>
              <div class="inputBox md:tw-w-[50%] tw-w-full">
                <input type="text" required name="number" />
                <span>Mobile Number</span>
              </div>
              <div class="inputBox w100">
                <textarea name="message" required></textarea>
                <span>Write your Message here....</span>
              </div>
              <div class="inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsLetter;