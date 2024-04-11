import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import noblog from '../../assets/myimg/noblog.png'
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Blogpost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const selectedBlog = BlogDetail.find((blog) => blog.id === parseInt(id));
        if (selectedBlog) {
            setBlog(selectedBlog);
        }
    }, [id]);

    return (
        <div>
            <div className='row my-0'>
            </div>
            {blog ? (
                <div>
                    <Container>
                        <Row>
                            <Col md='6'>
                                <img src={blog.image} alt='no blog' className=' tw-w-full tw-object-cover tw-h-full tw-rounded-md' />
                            </Col>
                            <Col md='6' className='tw-flex tw-flex-col tw-align-middle'>
                                <p className='tw-text-5xl'>{blog.head}</p>
                                <Row className='pt-2'>
                                    <Col xl='5' lg='5' md='5' sm='5' xs='5' className='tag tw-m-1'>
                                        <span><i class="ri-user-line"></i> &nbsp; {blog.author}</span>
                                    </Col>
                                    <Col xl='5' lg='5' md='5' sm='5' xs='5' className='tag tw-m-1'>
                                        <p><i class="ri-calendar-line"></i> &nbsp; {blog.date}</p>
                                    </Col>
                                    <Col xl='5' lg='5' md='5' sm='5' xs='5' className='tag tw-m-1'>
                                        <p><i class="ri-time-line"></i> &nbsp; {blog.readtime}</p>
                                    </Col>
                                </Row>
                                <p className='pt-5 text-muted'>{blog.subhead}</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            {blog.maincontent.map((paragraph, index) => (
                                <p key={index}>{paragraph} <br /><br /></p>
                            ))}
                        </Row>
                    </Container>
                </div>
            ) : (
                <>
                    <div className='tw-flex tw-justify-center md:tw-pt-20 tw-pt-5 tw-align-middle'>
                        <img src={noblog} alt='not found' />
                    </div>
                    <div className='tw-flex tw-justify-center md:tw-pt-20 tw-pt-5 tw-align-middle'>
                        <span className='tw-flex tw-justify-center py-2'>
                            <Button className='btn primary_btn tw-rounded-none '><Link to='/blog' className='tw-text-white tw-no-underline'>Explore More Blogs <i class="ri-arrow-right-line tw"></i></Link></Button>
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Blogpost;
