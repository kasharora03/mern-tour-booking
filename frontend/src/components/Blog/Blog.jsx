// Blog.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import BlogDetail from './BlogDetail';
import './blog.css';

const Blog = () => {
  const [Bitems] = useState(BlogDetail);
  return (
    <>
    {/* <div className='tw-flex tw-justify-center bghead tw-text-white'>
      <p className='md:tw-text-8xl p-4'>EasyGo's Travel Blogs</p>
    </div> */}
    <Container>
    {/* <div className='tw-flex tw-justify-end px-3'>
    <button className='btn btn-warning text-white tw-font-extrabold'><Link to='/'> Back To Home</Link></button>
    </div> */}
    

      {Bitems.map((blog) => {
        const { id, head, subhead, image, date, author, readtime } = blog;
        return (
          <Link to={`/blog/${blog.id}`} state={{ blog: blog }} key={id} className="blog-link">
            <Row className='blogrow my-5'>
              <Col md='6'>
                <img src={image} alt='no blog' className=' tw-w-full tw-object-cover tw-h-full tw-rounded-md' />
                
              </Col>
              <Col md='6' className='second'>
                <p className='textdec tw-text-2xl py-1'>{head}</p>
                <p className='textdec my-3 text-muted  tw-text-sm'>{subhead}</p>
               <Row className='pt-2'>
                <Col xl='5' lg='5' md='5' sm='5' xs='5' className='tag tw-m-1'>
                <span><i class="ri-user-line"></i> &nbsp; {author}</span>
                </Col>
                <Col xl='5' lg='5' md='5' sm='5' xs='5'  className='tag tw-m-1'>
                <p><i class="ri-calendar-line"></i> &nbsp; {date}</p>
                </Col>
                <Col xl='5' lg='5' md='5' sm='5' xs='5' className='tag tw-m-1'>
                <p><i class="ri-time-line"></i> &nbsp; {readtime}</p>
                </Col>
          
               </Row>
              </Col>
            </Row>
          </Link>
        );
      })}
    </Container>
    </>
  );
};

export default Blog;
