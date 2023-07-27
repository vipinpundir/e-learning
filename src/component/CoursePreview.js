import React from 'react'
import { useSelector } from 'react-redux'
import "../component/CoursePreview.css"
import { Button, Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/slices/CartSlice'

const CoursePreview = () => {
  const coursePreview = useSelector(state => state.coursePreview);
  const isLoggedIn = useSelector(state => state.login);
  console.log(isLoggedIn)

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCart({
      name: coursePreview.name,
      author: coursePreview.author,
      price: coursePreview.price,
      img: coursePreview.img
    }))
  }
  let path = ""
  let btnType = "login is required for Enroll"
  let btnDis = true
  if (isLoggedIn === true) {
    path = "/cart"
    btnType = "Enroll in the Full Course"
    btnDis = false
  }

  return (
    <>

      <Container className="my-5">
        <h1 className="text-center mb-4">📹 Welcome to our Introduction Video! 🎥</h1>
        <Row className="mb-3">
          <Col>
            <p>
              Thank you for joining us for this introduction to the fascinating world of [Programming Language].
              In this brief video, we'll give you a glimpse of the exciting journey that lies ahead as you learn
              the fundamentals of [Programming Language].
            </p>
          </Col>
        </Row>
        <div class="container">
          <div class="row d-flex justify-content-center flex-wrap-reverse mt-3">
            <div class="col-lg-6">
              <p><span className='titleh2'>Title:</span> {coursePreview.name}</p>
              <p><span className='titleh2'>Author:</span> {coursePreview.author}</p>
              <p><span className='titleh2'>Price:</span> {coursePreview.price}</p>
              <p><span className='titleh2'>Description:</span> {coursePreview.desc}</p>
              <Link to={path} ><Button disabled={btnDis} onClick={handleClick} variant="outline-success">   {btnType}  </Button> </Link>
            </div>
            <div class="col-lg-6">
              <div class="ratio ratio-16x9">
                <iframe
                  class="shadow-1-strong rounded"
                  src={coursePreview.url}
                  title="YouTube video">
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <Row className="mb-3">
          <Col>
            <h3>What's Covered in the Introduction Video:</h3>
            <ul>
              <li>Overview of [Programming Language]</li>
              <li>Key concepts and features</li>
              <li>Importance and real-world applications</li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h3>Full Course Details:</h3>
            <p>
              This introduction only scratches the surface of the vast knowledge and skills waiting for you in
              the full [Programming Language] course.
              If you're ready to unlock your potential and become proficient in [Programming Language], consider
              enrolling in the complete course.
            </p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h3>Why Choose Our Course:</h3>
            <ul>
              <li>Experienced instructors who are passionate about [Programming Language]</li>
              <li>Hands-on projects and practical exercises</li>
              <li>Step-by-step guidance for beginners and advanced learners alike</li>
              <li>Lifetime access to course materials</li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h3>Take Action Today:</h3>
            <p>
              Don't miss this opportunity to dive deep into the world of programming with [Programming Language].
            </p>
            <p>
              Whether you're looking to launch a career in tech or enhance your existing skills,
              our [Programming Language] course is designed to help you succeed.
            </p>
            <p>If you have any questions or need support, our dedicated team is here to assist you on your learning journey.</p>

          </Col>
        </Row>
      </Container>

    </>
  )
}

export default CoursePreview