import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCheck } from '../redux/slices/LoginSlice';

const Login = () => {
    const dispatch = useDispatch();
    const redirect = useNavigate()
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
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

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const isButtonDisabled = !Email || !Password;


    const handleLogin = () => {

        // Make a GET request to the API
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(data => {
                const userExist = data.find(user => user.email === Email);

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
    };
    // Disable the button when at least one field is empty

    return (
        <>
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
        </>
    )
}

export default Login