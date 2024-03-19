import React, { useRef } from 'react';
import '../shared/SearchBar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const locRef = useRef('');
    const dateref = useRef(null);
    const maxpeople = useRef(0);
    const navigate = useNavigate();

    const SearchHandler = async () => {
        const location = locRef.current.value;
        // const date = dateref.current.valueAsDate;  //converts string to Date object
        // const maxGroupSize = maxpeople.current.value;

        if (location === '') { //|| date === '' || people === ''
            return alert('All fields Are Required');
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}`)

        if (!res.ok) alert('something went wrong');
        const result = await res.json();

        navigate('/search-result-list', { state: { city: location, data: result.data } });
    }

    return (
        <>
            <Col lg='12'>
                <div className='search_bar'>
                    <Form className='d-flex align-items-center gap-4'>
                        <FormGroup className='d-flex gap-3 form_group form_group_fast mb-0'>
                            <span><i class="ri-map-pin-line"></i></span>
                            <div>
                                <h6 className='pt-2'>Location</h6>
                                <input type='text' placeholder='where you want to go?' ref={locRef} />
                            </div>
                        </FormGroup>
                        <FormGroup className='d-flex gap-3 form_group form_group_fast mb-0'>
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
                        </FormGroup>
                        <span className='search_icon' type='submit' onClick={SearchHandler}>
                            <i class="ri-search-line"></i>
                        </span>

                    </Form>
                </div>
            </Col>
        </>
    )
}

export default SearchBar;
