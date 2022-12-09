import axios from "axios";
import * as Types from "./actionType";

export const getAllBlogList=()=>(dispatch)=>{
    return axios.get("").then((res)=>{
        console.log(res.data)
        dispatch({type:Types.GET_ALLBLOGLIST_SUCESS,payload:res.data})
        return Types.GET_ALLBLOGLIST_SUCESS
    }).catch((err)=>{
        dispatch({type:Types.GET_ALLBLOGLIST_FAILURE})
        return Types.GET_ALLBLOGLIST_FAILURE
    })
}