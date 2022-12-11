import { useDispatch, useSelector } from "react-redux"
import {Box,SimpleGrid,Grid, Heading} from "@chakra-ui/react"
import { useState } from "react";
import { useEffect } from "react";
import { getBlogsByUserList } from "../Redux/AppReducer/action";

import { Navbar } from "./NavBar";
import { MyBlogCard } from "./MyBlogCards";

export const MyBlog=()=>{
    // const token=useSelector((state)=>state.AuthReducer.tokenData);
    const userId=useSelector((state)=>state.AuthReducer.tokenData.user._id);
    const name=useSelector((state)=>state.AuthReducer.tokenData.user.name);
    const userBlogs=useSelector((state)=>state.AppReducer.usersBlogss);
    const dispatch=useDispatch();
   
    console.log(userId,userBlogs,name,"userid...");
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
            <Box marginTop={"2%"}>
                <Heading fontFamily={"cursive"} textAlign={"center"} color={"blue.400"}>Publish By {name}</Heading>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} marginTop={"3%"}
          rowGap={{ base: "2%", sm: "2%", md: "2%", lg: "2%" }} columnGap={"1%"} marginLeft={{ base: "1%", sm: "1%", md: "0.3%" }} >
          {userBlogs.length > 0 && userBlogs.map((item) => {
            return <MyBlogCard item={item} key={item.id} />
          })}
        </Grid>
            </Box>
          
           
           
       </Box>
    )
}