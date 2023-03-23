import axios from 'axios';
import React, { useState } from 'react'


const FollowBtn = (props) => {
    const [followReqStatus, setFollowReqStatus] = useState(props.data.reqStatus);

    const handleFollowReq = () => {
        axios.get(`http://127.0.0.1:5000/api/user/request-to-follow/${props.data.user_id}`, { headers: { 'Token': `${localStorage.getItem('authtoken')}` } })
            .then((response) => {
                //console.log(response.data);
                if (response.data.status === 1) {
                    setFollowReqStatus(1);
                }
            })
            .catch((error) => console.log(error.data));
    }

    const handleDeleteFollowReq = () => {
        axios.get(`http://127.0.0.1:5000/api/user/follow-requests-delete/${props.data.user_id}`, { headers: { 'Token': `${localStorage.getItem('authtoken')}` } })
            .then((response) => {
                //console.log(response.data);
                if (response.data.status === 1) {
                    setFollowReqStatus(0);
                }
            })
            .catch((error) => console.log(error.data));
    }
  return (
    <div className='m-3'>
        {followReqStatus === 1 ? <button
                        className=" border-zinc-900 text-zinc-900 px-4 py-1 border hover:bg-zinc-700 hover:text-white "
                        onClick={handleDeleteFollowReq}>Requested</button>
                        : <button
                            className=" border-zinc-900 text-white px-4 py-1 bg-zinc-900 border hover:bg-zinc-700 "
                            onClick={handleFollowReq}>Follow</button>}
    </div>
  )
}

export default FollowBtn
