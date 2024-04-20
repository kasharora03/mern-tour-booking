import React, { useState, useContext,useEffect } from 'react'
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import logimg from '../assets/myimg/login.png';
import swal from 'sweetalert';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const result = await res.json();
  
      if (!res.ok) {
        if (res.status === 400 && result.message === "User already exists") {
          swal({
            icon: "warning",
            text: "User already exists",
            buttons: {
              confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "bgyellow",
                closeModal: true
              }
            }
          });
        } else {
          swal({
            icon: "error",
            title: "Oops...",
            text: result.message,
            buttons: {
              confirm: {
                text: "OK",
                value: true,
                visible: true,
                className: "bgyellow",
                closeModal: true
              }
            }
          });
        }
        return;
      }
  
      dispatch({ type: 'REGISTER_SUCCESS' });
      swal({
        icon: "success",
        text: 'Account Created Successfully',
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "bgyellow",
            closeModal: true
          }
        }
      });
      navigate('/login');
    } catch (error) {
      swal({
        icon: "error",
        title: "Oops...",
        text: error.message,
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "bgyellow",
            closeModal: true
          }
        }
      });
    }
  };
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(true);
    setTimeout(() => {
      setPasswordVisible(false);
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='login_cont d-flex justify-content-space-between m-auto'>
            <Row className='tw-px-5 '>
              <Col lg='5' md='5' className=''>
                <img src={logimg} alt='' className='img-fluid' />
              </Col>
              <Col lg='7' md='7'>
                <div className='login_form pt-5'>
                  <h2 className='loghead'>Register</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type='text' placeholder='Username' required id='username' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type='email' placeholder='Email' required id='email' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <div className='relative'>
                        <input type={passwordVisible ? 'text' : 'password'} placeholder='Password' required id='password' onChange={handleChange} />
                        <span className='password-toggle absolute inset-y-0 right-0 flex items-center mr-2 cursor-pointer' onClick={togglePasswordVisibility} style={{ color: 'gray' }}>
                          {passwordVisible ? <i className="ri-eye-fill"></i> : <i className="ri-eye-off-line"></i>}
                        </span>
                      </div>
                    </FormGroup>
                    <Button className='btn primary_btn auth_btn mt-2' type='submit'>Create Account</Button>
                  </Form>
                  <p className='lead pt-3'>Already have an account? <Link to='/login' className='create'>Login</Link></p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
