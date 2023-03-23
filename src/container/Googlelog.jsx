import React, { useState, useEffect } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginStatus } from '../store/actions/userActions';
import { userLoginStatus } from '../store/reducers/userReducer';


const Googlelog = () => {

    const [userDetails, setUserDetails] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (name, email, image) => {
        console.log(userDetails)
        axios.get(`http://127.0.0.1:5000/api/login?email=${email}&image=${image}&name=${name}`)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('authtoken', response.data.authtoken)
                localStorage.setItem('userid', response.data.userid)
                localStorage.setItem('name', name)
                localStorage.setItem('image', image)


                if (response.data.status === 1){
                    console.log(dispatch( setLoginStatus(true)));
                    navigate('/')
                }
            }).catch((error) => {
                console.log(error.data)
            });
    }

    





    return (
        <div className='flex justify-center bg-slate-900 h-screen'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-center p-3 text-7xl font-thin text-white border-2 rounded-lg'>LinkedMe</h1>
                <div className=" flex justify-center m-2">
                    <GoogleOAuthProvider clientId='570279697870-k5ht5a348o3o33vhijdt67e5tsr6aiut.apps.googleusercontent.com' >

                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                const details = jwt_decode(credentialResponse.credential);
                                console.log(details.sub);
                                setUserDetails({ email: details.email, name: details.name, image: details.picture })
                                handleLogin(details.name, details.email, details.picture);
                            }}
                            onError={() => {
                                console.log('login failed');
                            }}

                        />

                    </GoogleOAuthProvider>
                </div>
            </div>

        </div>
    )
}

export default Googlelog
