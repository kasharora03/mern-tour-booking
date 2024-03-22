import React, { useRef, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/myimg/mainlogo.png';

import './Header.css';

const NavLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
]
const Header = () => {
    const headerRef = useRef(null);
    const stickheaderFunc = () => {
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                headerRef.current.classList.add('sticky_header' );
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(()=>{
        stickheaderFunc()
        return window.removeEventListener('scroll',stickheaderFunc)
    })
    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className='nav_wrapper d-flex align-items-center justify-content-between'>
                        {/* logo */}
                        <div className='logo'>
                            <img src={logo} alt='no logo' />
                        </div>
                        {/* menu */}
                        <div className='navigation'>
                            <ul className='menu d-flex align-items-center gap-5'>
                                {
                                    NavLinks.map((item, index) => (
                                        <li className='nav_item blue lead' key={index}><NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ' '}>{item.display}</NavLink></li>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className='nav_right d-flex align-items-center gap-4'>
                            <div className='nav_btns d-flex align-items-center gap-4'>
                                <Button color="warning" outline className='headerbtn'><Link to='/login' className='yellow navbtn'>Login</Link></Button>
                                <Button color="warning" outline className='headerbtn'><Link to='/register' className='yellow navbtn'>Register</Link></Button>
                                {/* <Button ><Link to='/login' className='buttonname'>Login</Link></Button>
                                <Button><Link to='/register' className='buttonname'>Register</Link></Button> */}
                            </div>
                            <span className='mobile_menu'>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
