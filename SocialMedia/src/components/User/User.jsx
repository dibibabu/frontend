import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../action/userAction'
import { chatRequest } from '../../api/ChatRequest'
import badge from '../../img/badge.png'
import msg from '../../img/msg.jpeg'


const User = ({person}) => {
   
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  let followerss = user.followers.length

  
  const [following,setFollowing] = useState(person.followers.includes(user._id))

  const handleFollow = () =>{
   following ? dispatch(unFollowUser(person._id,user)) : dispatch(followUser(person._id, user))
   setFollowing((prev)=> !prev)
  }

  const handleChat = (chatID)=>{
    const data ={
      senderId:user._id,
      receiverId:chatID
    }
   chatRequest(data)
   console.log(data);
  }

  return (
    <div className="follower">
    <div>
        <img src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "profile.png"} alt=""  className='followerImg'/>
        <div className="name">
            <span>{person.firstname} <img src={followerss>=2?badge:""} alt="" style={{width:"15px",hieght:"20px"}}/></span>
           
            <span>@{person.username}</span>
        </div>
    </div>
    <button className={following ? 'button fc-button UnfollowButton' : "button fc-button"} onClick={handleFollow}>
        {following? "unfollow" : " Follow"}
    </button>
    <img src={msg} alt="" style={{width:"25px",hieght:"25px"}} onClick={()=>handleChat(person._id)} />
</div>
  )
}

export default User