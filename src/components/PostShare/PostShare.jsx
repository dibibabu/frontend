import React,{useState,useRef} from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import  { useDispatch } from 'react-redux'

import {useSelector} from 'react-redux'
import { uploadImage, uploadPost } from '../../action/uploadAction.js'


const PostShare = () => {

    const loading = useSelector((state)=> state.postReducer.uploading)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER


 const {user} = useSelector((state) => state.authReducer.authData)
const desc = useRef()
const [image,setImage] = useState(null)
const imageRef = useRef()
const dispatch = useDispatch()

const onImageChange = (event)=>{
   if(event.target.files && event.target.files[0]){
    let img = event.target.files[0];
    setImage(img)
   }
}

const reset = () =>{
    setImage(null);
    desc.current.value = ""
}

const handleSubmit = (e) =>{
  e.preventDefault();

  const newPost = {
    userId : user._id,
    desc :desc.current.value
  }
  if(image){
    const data = new FormData();
    const filename = Date.now() + image.name;
    data.append("name" , filename)
    data.append("file" ,image)
    newPost.image = filename;

    try {
        dispatch(uploadImage(data))
    } catch (error) {
        console.log(error);        
    }   
  }
  dispatch(uploadPost(newPost))
  reset();
}
    return (
        <div className="PostShare">
            <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "profile.png"} alt="" />
            <div>
                <input
                ref={desc}
                required
                type="text" placeholder="What's happening" />

                <div className="postOptions">
                <div className="option" style={{color:"var(--photo)"}}
                onClick={()=> imageRef.current.click()}
                >
                    <UilScenery />
                    <span>Photo</span>
                </div>
                <div className="option" style={{color:"var(--video)"}}>
                    <UilPlayCircle />
                    <span>Video</span>
                </div>
                <div className="option" style={{color:"var(--location)"}}>
                    <UilLocationPoint />
                    <span>Location</span>
                </div>
                {/* <div className="option" style={{color:"var(--shedule)"}}>
                    <UilSchedule />
                    <span>Shedule</span>
                </div> */}
                <div className="option" style={{color:"var(--shedule)"}}>
                    <UilSchedule />
                    <span>Advertisement</span>
                </div>
                <button className='button ps-button' disabled={loading}
                
                onClick={handleSubmit}
                
                >{loading ? "uploading..." : "Share"}
                </button>
                <div style={{display:"none"}}>
                    <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                </div>
            </div>

            {image && (
                <div className="previewImage">
                     <UilTimes onClick={()=>setImage(null)}/>
                     <img src={URL.createObjectURL(image)} alt="" />
                </div>
            )}
           

            </div>
        </div>

    )
}

export default PostShare