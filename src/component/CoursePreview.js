import React from 'react'
import "../component/CoursePreview.css"
import {  Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const CoursePreview = () => {
  // Retrieving data from sessionStorage
  const coursePreview = JSON.parse(sessionStorage.getItem('coursePreviewDetails'));

  return (
    <>

      <Container className='CoursePreview'>
        <Row className=''>

          <Col className='p-4' md={6}>
            <img src={coursePreview.img} alt="" />
          </Col>

          <Col className='p-4' md={6}>
            <h1>{coursePreview.name}</h1>
            <p>{coursePreview.description}</p>
            <Row>
              <Col><p><strong>Instructor:</strong> {coursePreview.author}</p></Col>
              <Col><p><strong>Category:</strong> {coursePreview.categories}</p></Col>
              <Col><p><strong>Duration:</strong> 10 hourse</p></Col>
              <Col><p><strong>Price:</strong> {coursePreview.price}Rs</p></Col>
            </Row>
            <Link to={`/payment/${coursePreview.id}/${coursePreview.name}/${coursePreview.author}/${coursePreview.price}`}>
              <div className="btn">Buy Course</div>
            </Link>
          </Col>

        </Row>
      </Container>

    </>
  )
}

export default React.memo(CoursePreview)
