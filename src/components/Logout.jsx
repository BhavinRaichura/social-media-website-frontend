import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setLoginStatus } from '../store/actions/userActions';


const Logout = () => {
  localStorage.clear();
  const dispatch = useDispatch();
  dispatch(setLoginStatus(false));
  return <Navigate to='/login' replace={true} />
}

export default Logout
