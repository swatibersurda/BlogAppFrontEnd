import axios from "axios";
import * as Types from "./actionTypes";

export const postUserSignUp=(payload)=>(dispatch)=>{

    dispatch({type:Types.USER_POST_SIGNUP_REQUEST})
   return axios.post("https://cyan-panicky-binturong.cyclic.app/signup",payload).then((res)=>{
         console.log(res.data,"insidesiguii")
        dispatch({type:Types.USER_POST_SIGNUP_SUCESS})
        return Types.USER_POST_SIGNUP_SUCESS
    }).catch((err)=>{
        dispatch({type:Types.USER_POST_SIGNUP_FAILURE})
        return Types.USER_POST_SIGNUP_FAILURE
    })
}


export const postUserSignIn=(payload)=>(dispatch)=>{
    dispatch({type:Types.USER_POST_SIGNIN_REQUEST})
    return axios.post("https://cyan-panicky-binturong.cyclic.app/login",payload).then((res)=>{
        console.log(res.data.token,"res")
         dispatch({type:Types.USER_POST_SIGNIN_SUCESS,payload:res.data})
         return Types.USER_POST_SIGNIN_SUCESS
     }).catch((err)=>{
         dispatch({type:Types.USER_POST_SIGNIN_FAILURE})
         return Types.USER_POST_SIGNIN_FAILURE
     })
}


export const logOut=()=>(dispatch)=>{
    dispatch({type:Types.LOGOUT_USER})
    return Types.LOGOUT_USER;
}



