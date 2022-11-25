import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTimelinePostsUser } from '../../api/PostRequest'
import Cover from '../../img/cover.jpg'
 import Profile from '../../img/profileImg.jpg'
 import './ProfileCard.css'

const ProfileCard = ({location,handleSavePost}) => {

    const {user} = useSelector((state) => state.authReducer.authData)
    // const posts = useSelector((state)=>state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const [userPosts,setUserPosts] = useState([])

    // user posts
    useEffect(()=>{
        const posts = async() =>{
            const {data} = await getTimelinePostsUser(user._id);
            setUserPosts(data)
            // console.log(data,"profile");
    
        }
        posts()
    },[])
   


  return (
   <div className="ProfileCard">
    <div className="ProfileImages">
        <img style={{height:"180px"}} src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "cover.jpg"} alt="" />
        <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "profile.png"} alt="" />
    </div>
    <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt ? user.worksAt : "Write about Your Self"}</span>
    </div>
    <div className="followStatus">
        <hr />
        <div>
            <div className="follow" >
                <span>{user.following.length}</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>{user.followers.length}</span>
                <span>Followers</span>
            </div>
            {location === 'profilePage' && (
                <>
                <div className="vl">

                </div>
                <div className="follow">
                    <span>{userPosts.length}</span>
                    <span>Posts</span>
                </div>
                <div className="vl"></div>
                <div className="follow" onClick={()=>handleSavePost(true)} >
                <span>{user.savePost.length}</span>
                <span>Saved</span>
            </div>
            
                </>
            )}
        </div>
        <hr />
    </div>
    {location === 'profilePage'? '': <span>
        <Link style={{textDecoration :"none",color:"inherit"}} to={`/profile/${user._id}`}>

        My Profile </Link></span>}
        

    
   </div>
  )
}

export default ProfileCard