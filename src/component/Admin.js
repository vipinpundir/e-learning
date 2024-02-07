import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AdminPage = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    author: '',
    categories: '',
    price: 0,
    desc: '',
    img: '',
    videourl: ''
  });

  const apiUrl = 'http://localhost:3000/courses';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new course data to the API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Reset the form after successful submission
        setCourseData({
          title: '',
          author: '',
          categories: '',
          price: 0,
          desc: '',
          img: '',
          videourl: ''
        });
      })
      .catch((error) => console.error('Error adding course:', error));
  };

  return (
    <Container className="my-5">
      <h1 className="text-center">Admin Page - Add New Course</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Control type="text" name="title" value={courseData.title} onChange={handleChange} placeholder="Course Title" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control type="text" name="author" value={courseData.instructor} onChange={handleChange} placeholder="Instructor Name" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control type="text" name="img" value={courseData.img} onChange={handleChange} placeholder="Img url" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control type="text" name="videourl" value={courseData.videourl} onChange={handleChange} placeholder="Video url" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control type="text" name="categories" value={courseData.categories} onChange={handleChange} placeholder="categories" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control type="number" name="price" value={courseData.price} onChange={handleChange} placeholder="Course Price" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control as="textarea" rows={5} name="desc" value={courseData.description} onChange={handleChange} placeholder="Course Description" required
            />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center">
            <Button type="submit" variant="primary">Add Course</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AdminPage;
