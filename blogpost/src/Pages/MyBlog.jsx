import { useDispatch, useSelector } from "react-redux"
import {Box} from "@chakra-ui/react"
import { useState } from "react";
import { useEffect } from "react";
import { getBlogsByUserList } from "../Redux/AppReducer/action";

import { Navbar } from "./NavBar";
import { MyBlogCard } from "./MyBlogCards";

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
        <Box>
            <Navbar/>
            <Box>
            {userBlogs.length>0 && userBlogs.map((item)=>{
            return <MyBlogCard item={item}/>
        })}
            </Box>
           
       </Box>
    )
}