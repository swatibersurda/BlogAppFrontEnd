import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useSearchParams } from "react-router-dom"
import { getAllBlogList } from "../Redux/AppReducer/action"
import { BlogCard } from "./BlogCard"

export const BlogListingPage=()=>{
     const blogs=useSelector((state)=>state.AppReducer.allBlog);
     console.log(blogs,"blogss")
     const dispatch=useDispatch();
     console.log(blogs);
    const [searchParams,setSearchParams]=useSearchParams();
    const location=useLocation();
     useEffect(()=>{
     if(blogs.length===0 ||location.search){
        
          let  params={
                category:searchParams.getAll("category"),
                sort:searchParams.get("sort")
          
        }
       
         dispatch(getAllBlogList(params))
     }
     },[location.search])
     

    return(
        <Box>{blogs.length>0&&blogs.map((item)=>{
            return <BlogCard item={item}/>
        })}</Box>
    )
}