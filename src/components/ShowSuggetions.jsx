import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FollowBtn from './FollowBtn';


function ShowSuggetions(props) {
    
    //console.log('isfollowing : ',props.data.following)
    return (
        <>
        
            <div className=" flex justify-between  p-1 border-b hover:bg-zinc-50">
                <Link to={`/user/${props.data.user_id}`} replace={true}>
                    <div className="flex justify-center">
                        <div className="overflow-hidden"><img src={props.data.image_url} alt={"dp"} className=" w-12 h-12 border-2 bg-slate-800 overflow-hidden rounded-full" /></div>
                        <div className="mx-2">
                            <p className="font-medium text-lg">{props.data.name}</p>
                            { 
                                props.data.date ? <p className="font-thin text-sm">{props.data.date}</p> :""
                            }                        
                        </div>
                    </div>
                </Link>
                {
                    !props.data?.following && props.data.following===undefined && props.data.following===false  ? <FollowBtn data={props.data}/> : ""
                }
                
                
                
            </div>

        </>
    )
}





export default ShowSuggetions
