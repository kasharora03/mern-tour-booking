import React, { useRef } from 'react';
import '../shared/SearchBar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const SearchBar = () => {
    const locRef = useRef('');
    // const dateref = useRef('');
    // const maxpeople = useRef('');
    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            SearchHandler();
        }
    };

    const SearchHandler = async () => {
        const location = locRef.current.value;

        if (location === '') {
            return swal({
                icon: "error",
                title: "Oops...",
                text: "Location is Required!",
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

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}`)

        if (!res.ok) swal({
            icon: "error",
            title: "Oops...",
            text: "Something Went Wrong",
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
        const result = await res.json();

        navigate('/search-result-list', { state: { city: location, data: result.data } });
    }

    return (
        <>
            <Col lg='12' className='pb-4 tw-flex tw-justify-center'>
                <div className='search_bar tw-px-6'>
                    <Form className='d-flex align-items-center gap-4 tw-justify-between'>
                        <FormGroup className='d-flex gap-3 form_group form_group_fast mb-0'>
                            <span><i className="ri-map-pin-line"></i></span>
                            <div>
                                <h6 className='pt-2'>Location</h6>
                                <input type='text' placeholder='where you want to go?' ref={locRef} onKeyPress={handleKeyPress} />
                            </div>
                        </FormGroup>
                          {/* <FormGroup className='d-flex gap-3 form_group form_group_fast mb-0'>
                            <span><i class="ri-time-line"></i></span>
                            <div>
                                <h6 className='pt-2'>When</h6>
                                <input type='date' placeholder='where you want to go?' ref={dateref} />
                            </div>
                        </FormGroup>
                        <FormGroup className='d-flex gap-3 form_group form_group_last mb-0'>
                            <span><i class="ri-team-line"></i></span>
                            <div>
                                <h6 className='pt-2'>Max people</h6>
                                <input type='number' placeholder='0' ref={maxpeople} />
                            </div>
                        </FormGroup> */}
                        <span className='search_icon' onClick={SearchHandler}>
                            <i className="ri-search-line"></i>
                        </span>
                    </Form>
                </div>
            </Col>
        </>
    )
}

export default SearchBar;
