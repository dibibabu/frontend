import React from 'react'
import './TimePost.css'
import { useDispatch, useSelector } from 'react-redux'
// import Post from '../Post/Post'
import { useEffect } from 'react'
// import { getTimelinePosts } from '../../action/PostAction'
// import { useParams } from 'react-router-dom'
import { useState } from 'react'
import TPost from '../TPost/TPost'
import { getTimelinePostsUser } from '../../api/PostRequest'
// import  {getAllPost } from '../../api/PostRequest.js'
// import { getUser } from '../../api/UserRequest'


const TimePost = ({saveItem}) => {

//   const dispatch = useDispatch()
//   const params = useParams()
  const { user } = useSelector((state) => state.authReducer.authData)
  let {loading } = useSelector((state) => state.postReducer)
  const [timelinePost, setTimelinePost] = useState([])

 

  useEffect(()=>{
    const posts = async() =>{
        const {data} = await getTimelinePostsUser(user._id);
        setTimelinePost(data)
        // console.log(data,"timeusef");
        // console.log(data,"gggg");

    }
    posts()
},[])






  
  // if (!posts) return " no posts";
  // if(params.id){
  //   posts = posts.map((post)=> post.userId === params.id)
  // }

 
 
  return (
    <div className="Posts">
      {loading ? "Fetching posts..." : timelinePost.map((post, id) => {
            
        // return <TPost data={post} userId={post.userId} id={id}  key={id} />
        return <TPost data={post} userId={post.userId}   saveItem={saveItem}/>
        
        
      })}
    </div>

  )
}

export default TimePost