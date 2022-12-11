import { useDispatch, useSelector } from "react-redux"
import {Box} from "@chakra-ui/react"
import { useState } from "react";
import { useEffect } from "react";
import { getBlogsByUserList } from "../Redux/AppReducer/action";

export const MyBlog=()=>{
    const userId=useSelector((state)=>state.AuthReducer.tokenData.user._id);
    const userBlogs=useSelector((state)=>state.AppReducer.usersBlogss);
    const dispatch=useDispatch();
   
    console.log(userId,userBlogs,"userid...");
    useEffect(()=>{
          if(userId){
             dispatch(getBlogsByUserList(userId));
          }     
    },[])
    


    return(
        <Box>i am blog</Box>
    )
}