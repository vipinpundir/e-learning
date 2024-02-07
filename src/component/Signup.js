import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../component/Login.css"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        fullName: fullName,
        email: email,
        password: password
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName.length === 0 && email.length === 0 && password.length === 0) {
            toast.warning("Details are required")
        } else {

            fetch('/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Internal Server Error')
                    } else {
                        return res.json();
                    }
                }).then((data) => { toast.success(data.message) })
                .catch(error => console.error('Error creating User:', error)
            );
        }

    };

    return (
        <div className="Signup">
            <form>
                <h2 className='mb-5'>Signup</h2>
                <div className="mb-3 ">
                    <input className="form-control" onChange={handleFullNameChange} value={fullName} type="text" placeholder="Enter your name" />
                </div>
                <div className="mb-3 ">
                    <input className="form-control" onChange={handleEmailChange} value={email} type="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3 ">
                    <input className="form-control" onChange={handlePasswordChange} value={password} type="password" placeholder="Enter your password" />
                </div>
                <Button onClick={handleSubmit} type='submit'>Signup</Button>
                <p className='mt-3'>Already have an account?</p><Link className='btn' to="/login" >Login</Link>

            </form>
        </div>
    );
};

export default Signup;