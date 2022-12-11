import { Box } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getBlogByIdList } from "../Redux/AppReducer/action";
import { DetailCard } from "./DetailCard";
import { Navbar } from "./NavBar";
export const DetailBlog=()=>{
    const {id}=useParams();
    const dataToDispay=useSelector((state)=>state.AppReducer.singleBlog);
    console.log(dataToDispay,"datatodisolay..")
    const dispatch=useDispatch();

    useEffect(()=>{
       if(id){
         dispatch(getBlogByIdList(id))
       }
    },[id,dispatch])

    return(
        <Box>
            <Navbar/>
            <Box width="100%" border=" blue.400">
                <DetailCard item={dataToDispay}/>
            </Box>
        </Box>
    )
}