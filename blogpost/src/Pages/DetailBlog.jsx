import { Box, Heading } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getBlogByIdList } from "../Redux/AppReducer/action";
import { DetailCard } from "./DetailCard";
import { Navbarr } from "./Navbarr";
export const DetailBlog=()=>{
    const {id}=useParams();
    const dataToDispay=useSelector((state)=>state.AppReducer.singleBlog);
    
    const dispatch=useDispatch();

    useEffect(()=>{
       if(id){
         dispatch(getBlogByIdList(id))
       }
    },[id,dispatch])

    return(
        <Box>
            <Navbarr/>
            <Heading fontFamily={"cursive"}
             textAlign={"center"} marginTop={"4%"} fontSize={"22px"} marginRight={"2%"} marginLeft={"2%"}>{dataToDispay.meta_data}</Heading>
            <Box width="100%" border=" blue.400">
                <DetailCard item={dataToDispay}/>
            </Box>
        </Box>
    )
}