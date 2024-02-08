import React, { useEffect, useState } from 'react'
import Course from './Course.js';
import "./FetchCourses.css"
import Footer from '../component/Footer.js'
const apiUrl = process.env.REACT_APP_API_URL;


const FetchCourses = () => {
    const [data, setdata] = useState([])

    async function fetchCourses() {
        await fetch(`${apiUrl}/courses`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then((res)=>{
            return res.json();
        }).then((data)=>{

            setdata(data.CoursesDetails)
        }).catch((err)=>{
            console.log(err,'Error')
        })
    }

    useEffect(() => {
        //Runs only on the first render
        fetchCourses()
    }, []);


    return (
        <>
            <div className="container mt-5">
                <h1 className='text-center' style={{ color: "#181d38" }}>Popular Courses</h1>
                <div className='FetchCourses'>
                    {data.length !== 0 ? <> {data.map((course) => {
                        return <div key={course.id} >
                            <Course img={course.img_url}
                                id={course.id}
                                title={course.title}
                                description={course.description}
                                author={course.author}
                                categories={course.categories}
                                price={course.price} />
                        </div>
                    })} </> : <h1>courses not available..</h1>}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default FetchCourses;