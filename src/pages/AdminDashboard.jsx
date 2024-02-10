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

    const [editCourse, setEditCourse] = useState(false)
    const [addCourse, setAddCourse] = useState(false)


    const [addFormData, setAddFormData] = useState({
        title: '',
        author: '',
        categories: '',
        price: '',
        description: '',
        video_url: '',
        img_url: ''
    })
    const [editFormData, setEditFormData] = useState({
        title: '',
        author: '',
        categories: '',
        price: '',
        description: '',
        video_url: '',
        img_url: ''
    })


    const handleAddChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setAddFormData({
            ...addFormData,
            [name]: value
        })
    }
    const handleEditChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setEditFormData({
            ...editFormData,
            [name]: value
        })
    }


    // Handle Course Adding operation
    const handleAddCourseSubmit = (e) => {
        e.preventDefault()
        fetch(`${apiUrl}/add/course`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addFormData)
        }).then((res) => { return res.json() })
            .then((data) => {
                toast.success(data.message)
                setAddCourse(false)
            }).catch((error) => {
                console.log(error)
            })
    }

    // Handle Course Deleting operation
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

    // Handle Course Edit operation
    const handleEditCourseSubmit = (e) => {
        e.preventDefault();
        fetch(`${apiUrl}/edit/course/${editFormData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editFormData)
        }).then((res) => res.json())
            .then((data) => {
                toast.success(data.message)
                setEditCourse(false)
            }).catch((error) => {
                toast.error("Internal server error!")
            })
}




    return (
        <div className='AdminDashboard container pt-5'>
            <div className="pt-4 mb-2 d-flex justify-content-between ">
                <h1>Admin Deshboard</h1>
                <button onClick={() => setAddCourse(true)} title='Add New Course' >+</button>
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
                                <td> <button onClick={() => {
                                    setEditCourse(true)
                                    setEditFormData(course)
                                }} className="btn bg-primary m-1"><img src={editIcone} alt="" /></button> <button onClick={() => handleCouresDeletion(course.id)} className="btn bg-danger m-1"><img src={deleteIcone} alt="" /></button> </td>
                            </tr>
                        })
                        : <><h1>No course available</h1></>}

                </tbody>
            </Table>
            {addCourse ? <> <div className='AddCourse'>
                <form onSubmit={handleAddCourseSubmit}>
                    <div onClick={() => setAddCourse(false)} className='btn-wrong' >✖</div>
                    <h2 className='mb-5'>Add New Course</h2>
                    <input className="form-control" name='title' onChange={handleAddChange} value={editFormData.title} type="text" placeholder="Enter course title" required />
                    <input className="form-control" name='author' onChange={handleAddChange} value={editFormData.author} type="text" placeholder="Enter instructor name" required />
                    <input className="form-control" name='categories' onChange={handleAddChange} value={editFormData.categories} type="text" placeholder="Enter course category" required />
                    <input className="form-control" name='video_url' onChange={handleAddChange} value={editFormData.video_url} type="url" placeholder="Enter video_url" required />
                    <input className="form-control" name='img_url' onChange={handleAddChange} value={editFormData.img_url} type="url" placeholder="Enter thumbnail_url" required />
                    <input className="form-control" name='price' onChange={handleAddChange} value={editFormData.price} type="text" placeholder="Enter course price" required />
                    <input className="form-control" name='description' onChange={handleAddChange} value={editFormData.description} type="text" placeholder="Enter course description" required />

                    <Button type='submit' >Submit</Button>
                </form>
            </div></> : <></>}

            {editCourse ? <> <div className='EditCourse'>
                <form onSubmit={handleEditCourseSubmit}>
                    <div onClick={() => setEditCourse(false)} className='btn-wrong' >✖</div>
                    <h2 className='mb-5'>Edit Course Details</h2>
                    <input className="form-control" name='title' onChange={handleEditChange} value={editFormData.title} type="text" placeholder="Enter course title" required />
                    <input className="form-control" name='author' onChange={handleEditChange} value={editFormData.author} type="text" placeholder="Enter instructor name" required />
                    <input className="form-control" name='categories' onChange={handleEditChange} value={editFormData.categories} type="text" placeholder="Enter course category" required />
                    <input className="form-control" name='video_url' onChange={handleEditChange} value={editFormData.video_url} type="url" placeholder="Enter video_url" required />
                    <input className="form-control" name='img_url' onChange={handleEditChange} value={editFormData.img_url} type="url" placeholder="Enter thumbnail_url" required />
                    <input className="form-control" name='price' onChange={handleEditChange} value={editFormData.price} type="text" placeholder="Enter course price" required />
                    <textarea className="form-control" name='description' onChange={handleEditChange} value={editFormData.description} type="text" placeholder="Enter course description" required />

                    <Button type='submit' className='mt-3'>Edit Done</Button>
                </form>
            </div></> : <></>}
        </div>
    )
}

export default AdminDashboard