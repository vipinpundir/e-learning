import React, { useEffect, useState } from 'react'
import Course from './Course.js';
import "./FetchCourses.css"
import { useDispatch } from 'react-redux';
import { getCourses } from '../redux/slices/CoursesSlice.js';


const apiUrl = process.env.REACT_APP_API_URL;


const FetchCourses = () => {
    const dispatch = useDispatch()
    const [data, setdata] = useState('')

    useEffect(() => {
        async function fetchCourses() {
            await fetch(`${apiUrl}/courses`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }).then((res) => {
                return res.json();
            }).then((data) => {
                setdata(data.CoursesDetails)
                dispatch(getCourses(data.CoursesDetails))
            }).catch((err) => {
                console.log(err, 'Error')
            })
        }

        //Runs only on the first render
        fetchCourses()
    }, [dispatch]);


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
            
        </>
    )
}

export default FetchCourses;