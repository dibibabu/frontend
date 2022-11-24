import React, { useState } from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
// import PostSide from '../../components/postSide/PostSide'
import './Profile.css'
import RightSide from '../../components/RightSide/RightSide'
import TimelinePost from '../../components/TimelinePost/TimelinePost'

const Profile = () => {
  const [saveItem,setSavedItem] = useState(false)

  const handleSavePost = (value) =>{
    setSavedItem((value) => !value)
  }
      // console.log(saveItem);
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard location = 'profilePage' handleSavePost={handleSavePost} saveItem={saveItem} />
            {/* <PostSide/> */}
            <TimelinePost  saveItem={saveItem}/>

        </div>
        <RightSide/>
    </div>
  )
}

export default Profile