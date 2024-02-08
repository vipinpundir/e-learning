import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../component/Login';
import Signup from '../component/Signup';
import Payment from '../component/Payment';
import AdminPage from '../component/Admin';
import Home from '../pages/Home';
import CoursePreview from '../component/CoursePreview'
import MyCourses from '../pages/MyCourses';
import About from '../component/About';

const AllRoutes = () => {
    return (
        <div className='AllRoutes'>
            <Routes>
                <Route path="*" element={<Home></Home>} />
                <Route exact path="/" element={<Home></Home>} />
                <Route exact path="/login" element={<Login></Login>} />
                <Route exact path="/signup" element={<Signup></Signup>} />
                <Route exact path="/about" element={<About></About>} />
                <Route exact path="/payment/:id/:name/:author/:price" element={<Payment></Payment>} />
                <Route exact path='/admin' element={<AdminPage></AdminPage>} />
                <Route exact path="/coursepreview" element={<CoursePreview></CoursePreview>} />
                <Route exact path="/enrolled/courses" element={<MyCourses></MyCourses>} />
            </Routes>
        </div>
    )
}

export default AllRoutes