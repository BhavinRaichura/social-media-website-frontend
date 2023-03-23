import React, { useState } from 'react'
import axios from 'axios';
import ShowSuggetions from './ShowSuggetions';
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {

  const [userQuery, setUserQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();
  

  const handleSearching = (e) => {
    e.preventDefault();
    if(userQuery.length===0){
      setSearchResult([])
      return
    }
    axios.get(`http://127.0.0.1:5000/api/search/${userQuery}`)
      .then((response) => {
        setSearchResult(response.data.results);
      })
      .catch((error) => console.log('error in searching : ', error.data));
  }

  return (

    <div className=' '>
      <form onSubmit={handleSearching} class="flex justify-center">
        <input type="text" name="username" placeholder="Search by name..." class="border p-1 m-2 rounded-sm" onChange={(e)=>{
          setUserQuery(e.target.value);
          if(userQuery===""){
            setSearchResult([]);
          }
          
        }} value={userQuery} />
        <button type="submit" className={location.pathname==='/search'? 'text-black':'text-white '}><FaSearch className='w-6 h-6 hover:-rotate-12 duration-500'/></button>
      </form>
      <div class={"w-64 absolute flex flex-col justify-center bg-zinc-100 p-3 rounded-lg " +(userQuery.length===0 ?"hidden":"")}>
        <div>
        {
          searchResult.length!==0 ?
          searchResult.map((data,key)=>{
            return (
              <ShowSuggetions key={key} data={data} />
            )
          }) : ""
        }
        </div>
        
      </div>
    </div>
  )
}

export default Searchbar


/*
<div key={key} class="flex justify-between border-b p-1 m-1">
              <div class="flex"><img src={data.image_url} alt="DP" class="border rounded-full overflow-hidden content-center w-10 h-10 bg-zinc-600 " />
                <div class="ml-4">{data.name}</div>
              </div>
            </div> 
*/