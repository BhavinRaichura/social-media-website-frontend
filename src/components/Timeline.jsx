import React, { useState,useEffect } from 'react'
import Post from './Post'
import axios from 'axios'

const Timeline = () => {
  const arr =[1,2,3,4,5,6,8]
  const [timelinePost, setTimelinePost] = useState();
  const [loading,setLoading] = useState(1);

  const handleDataFatching = async ()=>{
    setLoading(1);
    axios.get('http://127.0.0.1:5000/api/user/timeline',{headers:{'Token': `${localStorage.getItem('authtoken')}`}})
    .then((response)=>{
      setTimelinePost(response.data.results.reverse());
      //console.log(response.data.results)
      setLoading(0)
    }).catch((error)=>{
      console.log(error.data);
    });
  }
  useEffect(() => {
    handleDataFatching();

  },[])
  
  if(loading)
    return <div>loading....</div>

  return (

    <div className=" overflow-hidden flex flex-col " id="timeline">
      {
        timelinePost.map((data,key)=>
          <Post key={key} data={data}/>
          )
      }
    </div>

  


   
  )
}

export default Timeline
