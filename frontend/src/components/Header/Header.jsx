import React, { useRef, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/myimg/mainlogo.png';

import './Header.css';
import { AuthContext } from './../../context/AuthContext'

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
        display: 'Tours',
        dropdown: [
            { path: '/tour1', display: 'Featured Tours' },
            { path: '/tour2', display: 'All Tours' }
        ]
    },
    {
        path: '/blog',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Connect'
    }
]
const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/')
    }
    const stickheaderFunc = () => {
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                headerRef.current.classList.add('sticky_header');
            } else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(() => {
        stickheaderFunc()
        return window.removeEventListener('scroll', stickheaderFunc)
    })
    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className='nav_wrapper d-flex align-items-center tw-justify-between'>
                        {/* logo */}
                        <div className='logo'>
                            <p className='tw-text-2xl md:tw-text-4xl blue tw-font-bold tw-pt-4'>EasyGo</p>
                        </div>
                        {/* menu */}
                        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                            <i className="ri-close-line close-icon"></i> 
                            <ul className='menu d-flex align-items-center tw-gap-5 md:tw-gap-4 lg:tw-gap-8'>
                                {
                                    NavLinks.map((item, index) => (
                                        <li className='nav_item blue lead closeicon' key={index}>
                                            {item.dropdown ? (
                                                <div className="dropdown tw-font-bold tw-cursor-pointer">
                                                    <span>{item.display}</span>
                                                    <div className="dropdown-content">
                                                        {item.dropdown.map((subItem, subIndex) => (
                                                            <NavLink key={subIndex} to={subItem.path} className={navClass => navClass.isActive ? 'active_link' : ' '}>
                                                                {subItem.display}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ' '}>
                                                    {item.display}
                                                </NavLink>
                                            )}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='nav_right d-flex align-items-center gap-4'>
                            <div className='nav_btns d-flex align-items-center gap-4'>
                                {
                                    user ? <>
                                        <h5 className='mb-0'>{user.username}</h5>
                                        <Button color="warning" className='btn text-white fw-bold' onClick={logout}>Logout</Button>
                                    </> :
                                        <>
                                            <Button color="warning" outline className='headerbtn'><Link to='/login' className='yellow navbtn'>Login</Link></Button>
                                            <Button color="warning" outline className='headerbtn'><Link to='/register' className='yellow navbtn'>Register</Link></Button>
                                        </>
                                }
                            </div>
                            <span className='mobile_menu' onClick={toggleMenu}>
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
