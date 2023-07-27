import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button'
import "./Login.css"
import { Link } from 'react-router-dom';

const Signup = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const newUser = {
        name: fullName,
        email: email,
        password: password
    };

    const handleSubmit = () => {
        fetch('http://localhost:3000/users', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => console.log('New User created:', data))
            .catch(error => console.error('Error creating User:', error));
            
    };

    return (
        <div className="container Signup">
            <div className="form ">
                <h2 className='mb-5'>Signup</h2>
                <div className="mb-3 ">
                    <input className="form-control" onChange={handleFullNameChange} value={fullName}  type="text" placeholder="Full name" />
                </div>
                <div className="mb-3 ">
                    <input className="form-control" onChange={handleEmailChange} value={email}  type="email" placeholder="Email" />
                </div>
                <div className="mb-3 ">
                    <input className="form-control" onChange={handlePasswordChange} value={password}  type="password" placeholder="Password" />
                </div>
                <Button onClick={handleSubmit}>Signup</Button>
                <p className='mt-3'>Already have an account?</p><Link to="/login" >Login</Link>
            </div>
        </div>
    );
};

export default Signup;