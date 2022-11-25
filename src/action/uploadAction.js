import * as UploadApi from '../api/UploadRequest.js'
import * as PostRequest from '../api/PostRequest.js'


export const uploadImage = (data) => async(dispatch) => {
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error);
    }
}

export const uploadPost = (data) => async(dispatch)=>{

    dispatch({type : "UPLOAD_START"})


    try {
        const newPost = await UploadApi.uploadPost(data);
        dispatch({type : "UPLOAD_SUCCESSFULL",data:newPost.data})
    } catch (error) {
        console.log(error);   
        dispatch({type : "UPLOAD_FAILD"})

    }
}


// delete post 
export const deletePost = (postId,userId) => async(dispatch)=>{
    dispatch({type: "DELETE_START"})

    try {
         const postD = await PostRequest.deletePost(postId,userId);
         
    } catch (error) {
        console.log(error);   
       

    }
}