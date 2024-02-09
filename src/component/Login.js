import React, { useState } from 'react';
import "../component/Login.css"
import Button from 'react-bootstrap/esm/Button'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCheck } from '../redux/slices/LoginSlice';
import { adminStatus } from '../redux/slices/AdminSlice';
import { toast } from 'react-toastify';
const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
    const dispatch = useDispatch();
    const redirect = useNavigate()
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const loginData = {
        email: Email.trim(),
        password: Password
    }

    const handleLogin = () => {
        if (Email.length === 0 && Password.length === 0) {
            toast.warning("Email and password is required")
        } else {

            // Make a POST request to the API
            fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            }).then(response => response.json())
                .then(data => {
                    if (data.loginStatus === true) {
                        toast.success("Successfully login...");
                        localStorage.setItem('loginDetails', JSON.stringify(data.loginDetails[0]));
                        dispatch(loginCheck(true));

                        // Check is Admin or not 
                        if (data.loginDetails[0].role === 'admin') {
                            dispatch(adminStatus(true));
                            redirect("/admin/dashboard");
                        } else {
                            setTimeout(() => {
                                redirect("/");
                            }, 1000);
                        }
                    } else {
                        toast.error("User note found");
                    }
                }).catch((err) => {
                    toast.error("Internal Server Error");
                    console.log(err)
                })

        }

    };

    return (
        <>
            <div className="Login">
                <form>
                    <h2 className='mb-5'>Login</h2>
                    <div className="mb-3 ">
                        <input className="form-control" onChange={handleEmailChange} value={Email} type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3 ">
                        <input className="form-control" onChange={handlePasswordChange} value={Password} type="current-password" placeholder="Enter your password" required />
                    </div>
                    <Button onClick={handleLogin} >Login</Button>
                    <p className='mt-3'>Have not account yet?</p><Link className='btn' to="/signup" >Signup</Link>
                </form>
            </div>

        </>
    )
}

export default Login