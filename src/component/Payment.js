import React from 'react'
import "./Payment.css"

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