<<<<<<< HEAD
import React, { useState} from 'react';
import "../component/Login.css"
import Button from 'react-bootstrap/esm/Button'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCheck } from '../redux/slices/LoginSlice';
import { toast } from 'react-toastify';
=======
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCheck } from '../redux/slices/LoginSlice';
import { adminCheck } from '../redux/slices/AdminSlice';
>>>>>>> origin/master

const Login = () => {
    const dispatch = useDispatch();
    const redirect = useNavigate()
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
<<<<<<< HEAD
=======
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const closeModal = () => {
        setShowModal(false);
    };
    if (isLoggedIn && showModal) {
        setTimeout(() => {
            closeModal();
        }, 2000);
    }
>>>>>>> origin/master

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
<<<<<<< HEAD

    const loginData = {
        email: Email,
        password: Password
    }

    const handleLogin = () => {
        if (Email.length === 0 && Password.length === 0) {
            toast.warning("Email and password is required")
        } else {

            // Make a POST request to the API
            fetch('/login', {
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
                        setTimeout(() => {
                            redirect("/");
                        }, 1000);
                    } else {
                        toast.error("User note found");
                    }
                });

        }

=======
    const isButtonDisabled = !Email || !Password;


    const handleLogin = () => {

        // Make a GET request to the API
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(data => {
                const userExist = data.find(user => user.email === Email);
                if (userExist.role==="admin"){
                    dispatch(adminCheck(true))
                }
                if (userExist) {
                    if (userExist.password === Password) {
                        dispatch(loginCheck(true));
                        setIsLoggedIn(true)
                        setShowModal(true)
                        setTimeout(() => {
                            redirect("/");
                        }, 2000);
                    }
                    else {
                        alert("User not exist..")
                    }
                } else {
                    alert("User Emai not  registered..")
                }
            })
            .catch(error => console.error('Error fetching data:', error));
>>>>>>> origin/master
    };
    // Disable the button when at least one field is empty

    return (
        <>
<<<<<<< HEAD
            <div className="Login">
                <form>
                    <h2 className='mb-5'>Login</h2>
                    <div className="mb-3 ">
                        <input className="form-control" onChange={handleEmailChange} value={Email} type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3 ">
                        <input className="form-control" onChange={handlePasswordChange} value={Password} type="password" placeholder="Enter your password" required />
                    </div>
                    <Button onClick={handleLogin} >Login</Button>
                    <p className='mt-3'>Have not account yet?</p><Link className='btn' to="/signup" >Signup</Link>
                </form>
            </div>

=======
            <div className="container Login">
                <div className="form">
                    <h2 className='mb-5'>Login</h2>
                    <div className="mb-3 ">
                        <input className="form-control" onChange={handleEmailChange} value={Email} type="text" placeholder="User email" />
                    </div>
                    <div className="mb-3 ">
                        <input className="form-control" onChange={handlePasswordChange} value={Password} type="password" placeholder="Password" />
                    </div>
                    <Button disabled={isButtonDisabled} onClick={handleLogin} >Login</Button>
                    <p className='mt-3'>Have not account yet?</p><Link to="/signup" >Signup</Link>
                </div>
            </div>
            <div className={`modal ${showModal ? 'show' : ''}`}>
                <div className="modal-content">
                    <h2>Login Successful!</h2>
                </div>
            </div>
>>>>>>> origin/master
        </>
    )
}

export default Login