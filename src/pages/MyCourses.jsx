import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const apiUrl = process.env.REACT_APP_API_URL;

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([])

  useEffect(() => {
    const userEmail = (JSON.parse(localStorage.getItem('loginDetails'))).email
    fetch(`${apiUrl}/enrolled/courses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: userEmail })
    }).then((res) => { return res.json() })
      .then((data) => {
        setEnrolledCourses(data.EnrolledCourses)
      }).catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className='MyCourses'>
      <Container>
        <Row >
          <h1>My Courses</h1>
          <p>Access your enrolled courses below. Click on a course to start learning.</p>
          {enrolledCourses.map((course, index) => {
            return (
              <>
                <Col key={index} className='p-4' md={8}>
                  <h1>{course.title}</h1>
                  <p>{course.description}</p>
                  <Row>
                    <Col><p><strong>Instructor:</strong> {course.author}</p></Col>
                    <Col><p><strong>Category:</strong> {course.categories}</p></Col>
                    <Col><p><strong>Duration:</strong> 10 hourse</p></Col>
                  </Row>
                </Col>
                <Col key={index} className='p-4' md={4}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={course.video_url+'?controls=1'}
                    title="YouTube Video Player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </Col>
              </>
            )
          })}


        </Row>
      </Container>
    </div>
  )
}

export default MyCourses