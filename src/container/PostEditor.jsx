import React, { useState } from 'react'
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
import PreviewContaint from '../components/PreviewContaint';


const PostEditor = () => {
  const [desc,setDesc]= useState("");
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    axios.get(`http://127.0.0.1:5000/api/poster/create?desc=${desc}`, { headers: { 'Token': `${localStorage.getItem('authtoken')}` } })
    .then((response)=>{
      console.log(response.data);
    })
    .catch((e)=>{console.log("error in post creation")})
    navigate('/');
  }

  return (
    <div>
    <h1 className='text-center py-3 text-5xl font-thin rounded-lg my-10'>Create post</h1>
    <div className='flex flex-wrap justify-center my-10 '>
      <form onSubmit={handleSubmit} method="get" className='flex flex-col justify-center my-2 '>
        <textarea name="desc" id="desc" cols="30" rows="10" onChange={(e)=>setDesc(e.target.value)} className="border-2 my-2 bg-slate-100 p-2 max-h-96 rounded-xl"></textarea>
        <button type="submit" className=" border-zinc-900 text-zinc-900 px-4 py-1  border hover:bg-zinc-700 hover:text-white rounded-lg ">Post</button>
      </form>
      <div className='max-h-96 w-96 border-2 m-2 rounded-lg '>
        <h1 className='text-center font-semibold text-lg border'>Preview</h1>
        <div className='p-2'>
        <PreviewContaint  markdown={desc} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default PostEditor
