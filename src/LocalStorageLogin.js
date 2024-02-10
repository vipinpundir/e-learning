import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginCheck } from "./redux/slices/LoginSlice";
import { adminStatus } from "./redux/slices/AdminSlice";
const apiUrl = process.env.REACT_APP_API_URL;


const LocalStorageLogin = () => {

    const dispatch = useDispatch();

    const localLoginDetails = JSON.parse(localStorage.getItem('loginDetails'));

    useEffect(() => {
        if (localLoginDetails != null) {
            const loginData = { email: localLoginDetails.email, password: localLoginDetails.password }
            fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            }).then(response => response.json())
                .then(data => {
                    if (data.loginStatus === true) {
                        dispatch(loginCheck(true));
                    }
                    if (data.loginDetails[0].role === 'admin') {
                        dispatch(adminStatus(true));
                    }

                });
        }

    }, [dispatch, localLoginDetails]);

};

export default LocalStorageLogin;
