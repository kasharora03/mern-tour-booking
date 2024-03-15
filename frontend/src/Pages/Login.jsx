import React, { useState } from 'react'
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import logimg from '../assets/myimg/login.png'
import user from '../assets/myimg/user.png'


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick= e=>{
    e.preventDefault();

  }
  return (
    <section>
      <Container>
      <Row>
        <Col lg='8' className='login_cont d-flex justify-content-space-between m-auto'>
          <Row className=''>
            <Col lg='5' className=''>
            <img src={logimg} alt='' className='img-fluid' />
            </Col>
            <Col lg='7'>
            <div className='login_form pt-5'>
              
              {/* <img src={user} alt=''  className='user'/> */}
                <h2 className='loghead'>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type='email' placeholder='email' required id='email'  onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='password' required id='password'  onChange={handleChange}/>
                  </FormGroup>
                  <Button className='btn primary_btn auth_btn mt-2' type='submit'  onChange={handleClick}>Login</Button>
                </Form>
                <p className='lead pt-3'>dont have an account? <Link to='/register' className='create'>Create Account</Link></p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
        
      </Container>
    </section>
  )
}

export default Login
