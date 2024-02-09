import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import editIcone from "../assets/edit-svgrepo-com.svg"
import deleteIcone from "../assets/delete-svgrepo-com.svg"
import { toast } from 'react-toastify';
const apiUrl = process.env.REACT_APP_API_URL;

const AdminDashboard = () => {
    const courseData = useSelector((state) => state.getCourse)

    const handleCouresDeletion =(id)=>{
        const courseID = id 
        fetch(`${apiUrl}/delete/course`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({courseID})
        }).then((res)=>res.json())
        .then((data)=>{
            toast.success(data.message)
        }).catch((error)=>{
            toast.error("Internal server error!")
        })
        
    }






    return (
        <div className='AdminDashboard container pt-5'>
            <div className="pt-4 mb-2 d-flex justify-content-between ">
            <h1>Admin Deshboard</h1>
            <button title='Add New Course' >+</button>
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
                                <td> <button className="btn bg-primary m-1"><img src={editIcone} alt="" /></button> <button onClick={()=>handleCouresDeletion(course.id)} className="btn bg-danger m-1"><img src={deleteIcone} alt="" /></button> </td>
                            </tr>
                        })
                        : <><h1>No course available</h1></>}

                </tbody>
            </Table>
        </div>
    )
}

export default AdminDashboard