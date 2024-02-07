import React, { useEffect, useState } from 'react'
import Course from './Course.js';
import "./FetchCourses.css"
import Footer from '../component/Footer.js'

const FetchCourses = () => {
    const [data, setdata] = useState([])

    async function fetchCourses() {
        const res = await fetch('/courses', {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setdata(data.CoursesDetails)
    }
    useEffect(() => {
        //Runs only on the first render
        fetchCourses()
    }, []);


    return (
        <>
            <div className="container mt-5">
                <h1 className='text-center' style={{color: "#181d38"}}>Popular Courses</h1>
                <div className='FetchCourses'>
                    {data.map((course) => {
                        return <div key={course.id} >
                            <Course img={course.img_url}
                                id={course.id}
                                title={course.title}
                                description={course.description}
                                author={course.author}
                                categories={course.categories}
                                price={course.price} />
                        </div>
                    })}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default FetchCourses;