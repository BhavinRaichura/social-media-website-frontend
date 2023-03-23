import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Post from '../../components/Post';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import FollowBtn from '../../components/FollowBtn';
import ShowSuggetions from '../../components/ShowSuggetions';
import ShowLoading from '../../components/ShowLoading';
import Navbar from '../../components/Navbar';


const activeStateCss = "text-zinc-900 border-b-zinc-900 p-3 text-sm border-b-2"
const deactiveStateCss = "p-3 text-sm border-b border-b-white text-zinc-500 hover:text-zinc-700  "


const Userprofile = (props) => {

  const location = useLocation();
  const { userid } = useParams();

  const [userData, setUserData] = useState();
  const [profileStatus, setProfileStatus] = useState();
  const [loading, setLoading] = useState(1);
  const [activeState, setActiveState] = useState(0);
  const [admin, setAdmin] = useState(0);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/api/user/private/profile/${userid}`, { headers: { 'Token': `${localStorage.getItem('authtoken')}` } })
      .then((response) => {
        console.log('profile : ', response.data.userDetails);
        setUserData(response.data.userDetails)
        setProfileStatus({ 'status': response.data.status, 'isFollowing': response.data.isFollowing, 'reqStatus': response.data.reqStatus })
        if (response.data.isUser)
          setAdmin(1);
        setLoading(0);
      })
      .catch((error) => {
        console.log('profile not found');
        <Navigate to='' replace />
      })
  }, [userid])

  if (loading)
    return (<ShowLoading />);


  const renderPost = () => {
    if (!profileStatus.isFollowing && !admin)
      return (<div> Please follow to see the details</div>)

    let cols = [];
    let c1 = [], c2 = [], c3 = [];
    for (let i = userData.post.length - 1; i >= 0; i--) {
      if (i % 3 === 0)
        c1.push(userData.post[i]);
      else if (i % 3 === 1)
        c2.push(userData.post[i])
      else
        c3.push(userData.post[i]);
    }
    cols.push(c1);
    cols.push(c2);
    cols.push(c3);

    return (
      <div className="flex flex-row flex-wrap justify-center">
        <div>
          {
            cols[0].map((data, key) => {
              return (<div className='max-md:w-full md:w-96'><Post key={data.post_id} data={data} /></div>)
            })
          }
        </div>
        <div>
          {
            cols[1].map((data, key) => {
              return (<div className='max-md:w-full md:w-96'><Post key={data.post_id} data={data} /></div>)
            })
          }
        </div>
        <div>
          {
            cols[2].map((data, key) => {
              return (<div className='max-md:w-full md:w-96'><Post key={data.post_id} data={data} /></div>)
            })
          }
        </div>
      </div>
    )
  }

  const renderFollower = () => {
    return (
      <div className='flex flex-col'>
        {
          profileStatus.isFollowing || admin ?
            userData.follower.map((data, key) => {
              return (<div key={key} className="my-1 w-96">
                <ShowSuggetions data={data} />
              </div>)
            }) : "0 follower"
        }
      </div>
    )
  }

  const renderFollowing = () => {
    return (
      <div className='flex flex-col '>
        {
          profileStatus.isFollowing || admin ?
            userData.following.map((data, key) => {
              return (
                <div key={key} className="my-1 w-96">
                  <ShowSuggetions key={key} data={data} />
                </div>)
            }) : "0 following"
        }
      </div>
    )
  }

  return (
    <div>
      <div className='bg-white'>
        <div className=" mt-10 mb-5 flex flex-wrap w-full justify-center p-10">
          <div className="overflow-hidden">
            <img src={userData.image_url} alt="dp" className="h-32 w-32 overflow-hidden rounded-full bg-slate-300 bg-center max-md:h-24 max-md:w-24 " />
          </div>
          <div className="min-w-min p-7">
            <div className="flex pb-2  justify-between max-sm:justify-evenly">
              <p className="text-lg font-medium max-md:text-md max-md:text-center">@{userData.name}</p>
              {
                !profileStatus.isFollowing && !admin ?
                  <FollowBtn data={{ 'reqStatus': profileStatus.reqStatus, 'user_id': userid }} /> : ""
              }
            </div>
            {
              profileStatus.isFollowing || admin ?
                <div className="flex">
                  <button onClick={() => setActiveState(0)} className={activeState === 0 ? activeStateCss : deactiveStateCss}>{userData.post.length} Post</button>
                  <button onClick={() => setActiveState(1)} className={activeState === 1 ? activeStateCss : deactiveStateCss}>{userData.follower.length}  Follower</button>
                  <button onClick={() => setActiveState(2)} className={activeState === 2 ? activeStateCss : deactiveStateCss}>{userData.following.length} Following</button>
                </div>
                : <div> Please follow to see the details</div>
            }
          </div>
        </div>
        <div className="flex justify-center w-full ">
          <div className='max-w-7xl border-t-2 py-3'>
            {activeState === 0 ? renderPost() : (activeState === 1 ? renderFollower() : renderFollowing())}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile
