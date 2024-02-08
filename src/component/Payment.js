import React from 'react'
import "./Payment.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const apiUrl = process.env.REACT_APP_API_URL;


const Payment = () => {
  const { id, name, author, price } = useParams();
  const lodinDetails = JSON.parse(localStorage.getItem('loginDetails'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lodinDetails !=null) {
      const formData = { userEmail: lodinDetails.email, courseId: id }

      fetch(`${apiUrl}/enroll/course`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res) => {
        return res.json()
      })
        .then((data) => {
          toast.success(data.message)
        }).catch((err) => {
          console.log(err)
        })
    } else {
      toast.warning("Login is required")
    }

  }

  return (

    <div className="Payment-from">
      <div className="Payment shadow pt-5">
        <Form onSubmit={handleSubmit}>
          <h1>Course Payment</h1>
          <p><strong>Purchasing</strong> "{name}"</p>
          <p><strong>Instructor</strong> "{author}"</p>

          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>UPI ID</Form.Label>
            <Form.Control type="text" placeholder="Enter your UPI ID" required />
          </Form.Group>

          <Form.Group className="mb-3 d-flex justify-content-between" >
            <Form.Label><strong>Total Amount:  {price}Rs </strong></Form.Label>
          </Form.Group>
          <Button variant="primary" type="submit">Pay Now</Button>

        </Form>
      </div>
    </div>
  );
}
export default Payment
