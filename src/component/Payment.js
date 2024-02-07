import React from 'react'
import "./Payment.css"
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const Payment = () => {
  const { id, name, author, price } = useParams();
  const lodinDetails = JSON.parse(localStorage.getItem('loginDetails'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lodinDetails !=null) {
      const formData = { userEmail: lodinDetails.email, courseId: id }

      fetch('/enroll/course', {
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
=======

const Payment = () => {
    return (
    <>
            <div class="Payment">
                <h2>Payment Page</h2>
                <div class="payment-form">
                    <label for="payment-type">Payment Method</label>
                    <select id="payment-type" name="payment-type" required>
                        <option value="">Select Payment Method</option>
                        <option value="card">Card</option>
                        <option value="upi">UPI</option>
                    </select>

                    <label for="name">Name on Card</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required />

                        <label for="card-number">Card Number</label>
                        <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required />

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{flex: '1', marginLeft: '10px'}}>
                                    <label for="expiry">Expiry Date</label>
                                    <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required />
                                </div>
                                <div style={{flex: '1', marginLeft: '10px'}}>
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="123" required />
                                </div>
                            </div>

                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" required />

                                <label for="phone">Phone</label>
                                <input type="text" id="phone" name="phone" placeholder="123-456-7890" required />

                                    <input type="submit" value="Pay Now" />
                                    </div>
                                </div>
                            </>
                            )
}

                            export default Payment
>>>>>>> origin/master
