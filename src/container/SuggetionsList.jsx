import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ShowSuggetions from '../components/ShowSuggetions';
import ShowFollowRequests from '../components/ShowFollowRequests';
import { useLocation } from 'react-router-dom';

const SuggetionsList = () => {
  const location = useLocation();

  const [suggetions, setSuggetions] = useState({});
  const [loading, setLoading] = useState(1);

  const handleSuggetionsListData = async () => {
    axios.get(`http://127.0.0.1:5000/api/suggetion`, { headers: { 'Token': `${localStorage.getItem('authtoken')}` } })
      .then((response) => {
        console.log('success ', response.data.results);
        setSuggetions(response.data.results);
        setLoading(0);
      })
      .catch((error) => console.log('error to login ', error.data));
  }

  useEffect(() => {
    setLoading(1);
    handleSuggetionsListData()
  }, []);

  if (loading)
    return (
      <div>loading...</div>
    )

  return (
    <div className={location.pathname==='/friend-suggetions'?' lg:w-2/5 m-auto' :""}>
      <div className='bg-white shadow-lg rounded-md border my-2 p-2'>

        <h1 className='text-center p-2 text-xl  rounded-lg '>
          Suggetions
        </h1>
        <hr />
        {suggetions.map((data, key) =>

          <ShowSuggetions key={data.user_id} data={data} />

        )}
      </div>

      <div className=' bg-white shadow-lg rounded-md border my-2 p-2'>

        <ShowFollowRequests />
      </div>

    </div>
  )
}

export default SuggetionsList

/*
https://play.tailwindcss.com/vsFjWJek9P
      copy css from this
*/