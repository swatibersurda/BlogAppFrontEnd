import { Box, Divider } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { getAllBlogList } from "../Redux/AppReducer/action"
import { BlogCard } from "./BlogCard"
import { BloggCard } from "./BloggCard"

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
     },[location])
     

    return(
        <Box>{blogs.length>0&&blogs.map((item)=>{
            // return <BlogCard item={item}/>
            return <Link to={`/detailblog/${item._id}`}><BloggCard item={item}/></Link>
            

        })}
       
        </Box>
    )
}