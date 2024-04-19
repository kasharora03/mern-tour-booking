import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Tours from '../Pages/Tours';
import TourDetails from '../Pages/TourDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';
import Thankyou from '../Pages/Thankyou';
import Blog from '../components/Blog/Blog';
import NewsLetter from '../shared/NewsLetter';
// import BlogDetail from '../components/Blog/BlogDetail';
import BlogPost from '../components/Blog/BlogPost';
// import AdminDashboard from '../components/Admin/AdminDashboard';
import AdminLayout from '../components/Layout/AdminLayout';
import AdminUser from '../Pages/Admin/AdminUser';
import AdminContact from '../Pages/Admin/AdminContact';
import AdminReview from '../Pages/Admin/AdminReview';

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Navigate to='/home' />} />
                <Route exact  path='/home' element={<Home />} />
                {/* <Route exact  path='/about' element={<About />} /> */}
                <Route exact  path='/tours' element={<Tours />} />
                <Route exact  path='/tours/:id' element={<TourDetails />} />
                <Route exact  path='/login' element={<Login />} />
                <Route exact  path='/blog' element={<Blog />} />
                <Route path='/blog/:id' element={<BlogPost/>} />
                <Route exact  path='/register' element={<Register />} />
                <Route exact  path='/contact' element={<NewsLetter />} />
                <Route exact  path='/tours/search' element={<SearchResultList />} />
                <Route exact  path='/thankyou' element={<Thankyou />} />
                <Route path="/search-result-list" element={<SearchResultList />} />
                {/* <Route path='/admindash' element={<AdminDashboard/>}/> */}
                {/* <Route path ='*' render={() => <Redirect to='/'/>}/> */}

                {/* nested routed for admin */}
                <Route path='/admin' element={<AdminLayout/>}>
                <Route path='users' element={<AdminUser/>}/>
                <Route path='contacts' element={<AdminContact/>}/>
                <Route path='reviews' element={<AdminReview/>}/>
                </Route>
            </Routes>

        </div>
    )
}

export default Routers;

