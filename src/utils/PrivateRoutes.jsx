import React, { Children } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { setLoginStatus } from '../store/actions/userActions';

const PrivateRoutes = ({children}) => {
     
    const isLogin = useSelector((state)=>state.userLoginStatus.isLogin);
    const dispatch = useDispatch();

    if(!isLogin && localStorage.getItem('authtoken')){
        isLogin = dispatch(setLoginStatus(true));
    }
    if(!isLogin){
        return <Navigate to='login' replace />
    }
    return children ? children : <Outlet />;
}

export default PrivateRoutes
