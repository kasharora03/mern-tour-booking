import React, { useState, useContext } from 'react';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import logimg from '../assets/myimg/login.png';
// import user from '../assets/myimg/user.png'
import swal from 'sweetalert';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';


const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added state variable

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify(credentials)
      })

      const result = await res.json();
      if (!res.ok) {
        swal({
          icon: "error",
          title: "Oops...",
          text: result.message,
          buttons: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "bgyellow", // Apply the class to the confirm button
              closeModal: true
            }
          }
        });
        
        // alert(result.message);
        setIsLoggedIn(false); // Set flag to indicate failed login
      } else {
        console.log(result.data);
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        setIsLoggedIn(true); // Set flag to indicate successful login
        navigate('/')
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" ,payload:error.message})
    }

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

                  <h2 className='loghead'>Login</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type='email' placeholder='email' required id='email' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type='password' placeholder='password' required id='password' onChange={handleChange} />
                    </FormGroup>
                    <Button className='btn primary_btn auth_btn mt-2' type='submit' disabled={isLoggedIn}>Login</Button> {/* Disable button if login failed */}
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

export default Login;
