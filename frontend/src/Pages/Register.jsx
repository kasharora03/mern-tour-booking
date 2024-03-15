import React, { useState } from 'react'
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import logimg from '../assets/myimg/login.png'


const Register = () => {
  const [credentials, setCredentials] = useState({
    username:undefined,
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
                <h2 className='loghead'>Register</h2>
                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type='text' placeholder='Username' required id='username'  onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='email' placeholder='email' required id='email'  onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='password' required id='password'  onChange={handleChange}/>
                  </FormGroup>
                  <Button className='btn primary_btn auth_btn mt-2' type='submit'  onChange={handleClick}>Create Account</Button>
                </Form>
                <p className='lead pt-3'>Already have an account? <Link to='/login' className='create'>Login</Link></p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
        
      </Container>
    </section>
  )
}

export default Register
