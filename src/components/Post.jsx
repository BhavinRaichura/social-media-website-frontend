import React, { useEffect, useReducer, useState } from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'
import axios from 'axios'
import CommentSection from './CommentSection'
import ShowSuggetions from './ShowSuggetions'
import PreviewContaint from './PreviewContaint'

function reducer(state, action){
  switch (action.type){
    case 'LIKE': 
      return {
        likes: action.payload.likes,
        comments: action.payload.comments,
        details: action.payload.details
      }
    case 'DETAILS':
      return {
        likes: state.likes,
        comments: action.payload.comments,
        details: action.payload.details
      }
  }
}

const Post = (props) => {

  const [userLike,setUserLike]= useState(0);
  const [cmtSec,setCmtSec] = useState(0);
  const [isFull, setIsFull] = useState(0);

  const [state, dispatch] = useReducer( reducer, {comments : props.data.comments, likes:props.data.likes, details:props.data } )
  
  const handleLikes = () =>{
    
    axios.get(`http://127.0.0.1:5000/api/poster/like/${state.details.post_id}`,{headers:{'Token': `${localStorage.getItem('authtoken')}`}})
    .then((response)=> {
      console.log('like ',response.data)
      if(response.data.status){
        dispatch({type:'LIKE',payload:{comments : response.data.results.comments, likes:response.data.results.likes, details:response.data.results }})
      }
    })
    .catch((error) => console.log('error to login ',error.data));
  }


  return (
    <div id="poster" className=" shadow-lg bg-gradient-to-r overflow-hidden  border md:rounded-lg md:m-2  my-1  md:hover:shadow-slate-400 duration-700 transition-all">
      
      <ShowSuggetions data={{'name':state.details.posted_by.name, 'image_url':state.details.posted_by.image_url, 'user_id':state.details.posted_by.user_id, 'date':state.details.date,'following':state.details.posted_by.following}}/>
    
    <div className={"p-3  overflow-hidden text-base font-medium " + (isFull ? "" : "max-h-96")}>
      <PreviewContaint markdown={state.details.desc} />
    </div>
    <button className='mx-3' onClick={()=>setIsFull(!isFull)}>{isFull ? "View less...":"View more..."}</button>
    <hr/>
    <div className="flex flex-row ">
      <button className="w-1/2 p-2 text-gray-600 text-base font-medium hover:bg-slate-100 flex justify-center" onClick={handleLikes}>
        <AiOutlineLike style={{fontSize: "1.5em"}}/>
        {state.likes} 
      </button>
      <button className="w-1/2 p-2 text-gray-600 text-base font-medium flex justify-center hover:bg-slate-100" onClick={(e)=>setCmtSec(!(cmtSec))}> 
        <BiComment style={{fontSize: "1.5em"}}/>
        {state.comments.length}
      </button>
    </div>
    {cmtSec ? <CommentSection data = {state.details}  dispatch={dispatch} />: ""}
  </div>
  )
}

export default Post


