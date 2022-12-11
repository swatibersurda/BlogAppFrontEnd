import { useDispatch, useSelector } from "react-redux"
import {Box,SimpleGrid,Grid} from "@chakra-ui/react"
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
    },[userId,dispatch])
    


    return(
        <Box>
            <Navbar/>
           
            {/* <SimpleGrid column={"2"} spacing={"2px"}>
                {userBlogs.length>0&& userBlogs.map((item)=>{
                    return <MyBlogCard item={item}/>
                })}
            </SimpleGrid> */}
            <Box marginTop={"3%"}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
          rowGap={{ base: "2%", sm: "2%", md: "2%", lg: "2%" }} columnGap={"1%"} marginLeft={{ base: "1%", sm: "1%", md: "0.3%" }} >
          {userBlogs.length > 0 && userBlogs.map((item) => {
            return <MyBlogCard item={item} key={item.id} />
          })}
        </Grid>
            </Box>
          
           
           
       </Box>
    )
}