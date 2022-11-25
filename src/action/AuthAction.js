import * as AuthApi from '../api/AuthRequest.js'


export const logIn = (formData) => async(dispatch) => {

  dispatch({type : "AUTH_START"})
    try {
        const {data} = await AuthApi.logIn(formData)
        
        

        dispatch({type :"AUTH_SUCCESS",data : data})

    } catch (error) {
        alert(error.response.data.message)
        console.log(error,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        dispatch({type : "AUTH_FAIL"})
    }
}

// signup
export const signUp = (formData) => async(dispatch) => {
    

    dispatch({type : "AUTH_START"})
      try {
          const {data} = await AuthApi.signUp(formData)
          
          dispatch({type :"AUTH_SUCCESS",data : data})
          
  
      } catch (error) {
          console.log(error.response.data.message,"HHHHHHHHHHHH");
          alert(error.response.data.message)
          dispatch({type : "AUTH_FAIL"})
      }
  }


  // logout

  export const logOut = () => async(dispatch) =>{
    dispatch({type:"LOG_OUT"})
  }