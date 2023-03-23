import axios from 'axios';
import React, { useState } from 'react'


const CommentSection = (props) => {

  const[comments,setComments] =useState(props.data.comments);
  const[desc,setDesc] = useState("");

  const handleComment=(e)=>{
    e.preventDefault();
    axios.get(`http://127.0.0.1:5000/api/poster/comment/${props.data.post_id}?desc=${desc}`, { headers: { 'Token': `${localStorage.getItem('authtoken')}` } })
    .then((response) => {
        if (response.data.status === 1) {
            setComments(response.data.results.comments);
            setDesc("");
            props.dispatch({type:'DETAILS',payload:{'details':response.data.results, 'comments':response.data.results.comments}});
        }
        else{
          console.log('comment posting error');
        }
    })
    .catch((error) => console.log(error.data));
  }


  return (
    <div className='border-t'>
      <div className=" max-h-48 overflow-scroll w-full">
      {comments.map((data, key) => {
        return (
          <div key={key} className=" border-b p-1 bg-slate-50">
            <div className='flex'>
              <img src={data.comment_by.image_url} alt="dp" className='w-10 h-10 rounded-full border overflow-hidden bg-slate-900 mx-2' />
              <div className='mx-2'>
                <p className='text-md font-medium'>{data.comment_by.name}</p>
                {/*<p className='text-sm font-light text-gray-600'>{data.date}</p>*/}
                <p className='text-sm text-gray-700'>{data.body}</p>
              </div>
            </div>
          </div>

        )
      })}
      </div>
      <form className='flex border' onSubmit={handleComment}>
        <input type="text" className='border p-1 w-full bg-slate-50' placeholder='start writing from here' onChange={(e)=>setDesc(e.target.value)}  value={desc}/>
        <button type="submit" className='bg-green-600 w-max px-2' >post</button>
      </form>


    </div>
  )
}

export default CommentSection;
