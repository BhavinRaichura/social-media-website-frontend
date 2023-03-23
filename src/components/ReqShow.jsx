import React from 'react'
import { IoAdd } from 'react-icons/io5'
import { CiCircleRemove } from 'react-icons/ci'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateRequestedUserTrue } from '../store/actions/userActions';

const ReqShow = (props) => {

    const dispatch = useDispatch();

    const handleAcceptRequest = () => {
        axios.get(`http://127.0.0.1:5000//api/user/follow-requests-accept/${props.data.user_id}`, { headers: { 'Token': `${localStorage.getItem('authtoken')}` } })
            .then((response) => {
                console.log('follow request accept ', response.data.results);
                dispatch(updateRequestedUserTrue(props.data.user_id));
            })
            .catch((error) => console.log('error to accept follow req ', error.response));
    }
    return (
        <div>
            <div className="flex justify-between hover:bg-zinc-50">
                <div className="m-2 "><img src={props.data.image_url} alt={""} className="w-12 h-12 border-2 bg-slate-800 overflow-hidden rounded-full" /></div>
                <div className="m-2">
                    <Link to={`/user/${props.data.user_id}` } >
                        <p className="font-medium text-lg">{props.data.name}</p>
                    </Link>
                </div>
                <div className='m-2 flex'>
                    <div className='w-10 h-10 rounded-full overflow-hidden border-2 text-zinc-900 border-zinc-900 hover:bg-zinc-900 hover:text-white mx-1' onClick={handleAcceptRequest}><IoAdd style={{ fontSize: "2rem" }} /></div>
                    <div className='w-10 h-10 rounded-full overflow-hidden border-2 text-red-400 border-red-400 hover:bg-red-400 hover:text-white text-2xl text-center mx-1'>X</div>
                </div>
            </div>
        </div>
    )
}

export default ReqShow
