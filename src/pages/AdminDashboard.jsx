import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import editIcone from "../assets/edit-svgrepo-com.svg"
import deleteIcone from "../assets/delete-svgrepo-com.svg"
import { toast } from 'react-toastify';
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const apiUrl = process.env.REACT_APP_API_URL;

const AdminDashboard = () => {
    const courseData = useSelector((state) => state.getCourse)

    const [addCourse, setAddCourse] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        categories: '',
        price: '',
        description: '',
        video_url: '',
        img_url: ''
    })

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleAddCourseSubmit = (e) => {
        e.preventDefault()
        fetch(`${apiUrl}/add/course`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((res)=>{return res.json()})
        .then((data)=>{
            toast.success(data.message)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleCouresDeletion = (id) => {
        const courseID = id
        fetch(`${apiUrl}/delete/course`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ courseID })
        }).then((res) => res.json())
            .then((data) => {
                toast.success(data.message)
            }).catch((error) => {
                toast.error("Internal server error!")
            })

    }






    return (
        <div className='AdminDashboard container pt-5'>
            <div className="pt-4 mb-2 d-flex justify-content-between ">
                <h1>Admin Deshboard</h1>
                <button onClick={()=>setAddCourse(true)} title='Add New Course' >+</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Instructor Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courseData ?
                        courseData.map((course) => {
                            return <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.title}</td>
                                <td>{course.author}</td>
                                <td> <button className="btn bg-primary m-1"><img src={editIcone} alt="" /></button> <button onClick={() => handleCouresDeletion(course.id)} className="btn bg-danger m-1"><img src={deleteIcone} alt="" /></button> </td>
                            </tr>
                        })
                        : <><h1>No course available</h1></>}

                </tbody>
            </Table>
            {addCourse ? <> <div className='AddCourse'>
                <form onSubmit={handleAddCourseSubmit}>
                    <div onClick={()=>setAddCourse(false)} className='btn-wrong' >✖</div>
                    <h2 className='mb-5'>Add New Course</h2>
                    <input className="form-control" name='title' onChange={handleChange} value={formData.title} type="text" placeholder="Enter course title" required />
                    <input className="form-control" name='author' onChange={handleChange} value={formData.author} type="text" placeholder="Enter instructor name" required />
                    <input className="form-control" name='categories' onChange={handleChange} value={formData.categories} type="text" placeholder="Enter course category" required />
                    <input className="form-control" name='video_url' onChange={handleChange} value={formData.video_url} type="url" placeholder="Enter video_url" required />
                    <input className="form-control" name='img_url' onChange={handleChange} value={formData.img_url} type="url" placeholder="Enter thumbnail_url" required />
                    <input className="form-control" name='price' onChange={handleChange} value={formData.price} type="text" placeholder="Enter course price" required />
                    <input className="form-control" name='description' onChange={handleChange} value={formData.description} type="text" placeholder="Enter course description" required />

                    <Button type='submit' >Submit</Button>
                </form>
            </div></> : <></>}
        </div>
    )
}

export default AdminDashboard