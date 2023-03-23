import React, { useEffect, useState } from 'react'
import axios from 'axios';


import ShowLoading from './ShowLoading';
import ReqShow from './ReqShow';
import { useDispatch, useSelector } from 'react-redux';
import { setRequestedUser, getRequestedUser } from '../store/actions/userActions';

const ShowFollowRequests = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(1);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/user/show-follow-requests', { headers: { 'Token': `${localStorage.getItem('authtoken')}` } })
            .then((response) => {
                dispatch(setRequestedUser(response.data.results));
                setLoading(0);
            })
            .catch((error) => console.log('error to login ', error.response));
    }, [])

    if (loading)
        return <ShowLoading />

    return (
        <>
            <h1 className='text-center p-2 text-xl  rounded-lg '>
                Follow Requests
            </h1>
            
            <RenderRequestList/>

        </>
    )
}



const RenderRequestList = () => {
    const reqList = useSelector((state) => state.userFollowRequest);
    return (
        <div className=" border-b flex flex-col   ">
            {reqList.map((data, key) => {
                return (
                    <ReqShow key={key} data={data} />
                    )
                })}
        </div>
    )
}

export default ShowFollowRequests