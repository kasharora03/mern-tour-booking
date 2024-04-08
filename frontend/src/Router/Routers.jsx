import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom";
import Home from '../Pages/Home';
import Tours from '../Pages/Tours';
import TourDetails from '../Pages/TourDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';
import Thankyou from '../Pages/Thankyou';
import Blog from '../components/Blog/Blog';
import NewsLetter from '../shared/NewsLetter';

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Navigate to='/home' />} />
                <Route exact  path='/home' element={<Home />} />
                <Route exact  path='/tours' element={<Tours />} />
                <Route exact  path='/tours/:id' element={<TourDetails />} />
                <Route exact  path='/login' element={<Login />} />
                <Route exact  path='/blog' element={<Blog />} />
                <Route exact  path='/register' element={<Register />} />
                <Route exact  path='/contact' element={<NewsLetter />} />
                <Route exact  path='/tours/search' element={<SearchResultList />} />
                <Route exact  path='/thankyou' element={<Thankyou />} />
                <Route path="/search-result-list" element={<SearchResultList />} />
                {/* <Route path ='*' render={() => <Redirect to='/'/>}/> */}
            </Routes>

        </div>
    )
}

export default Routers;

