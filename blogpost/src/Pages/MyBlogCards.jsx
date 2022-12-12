// import Image from 'next/image';
import {
    Box,
    Image,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link, useNavigate } from 'react-router-dom';
  import { EditIcon,DeleteIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserBlog, getAllBlogList, getBlogByIdList, getBlogsByUserList } from '../Redux/AppReducer/action';
import { DELETE_USERBLOGLIST_SUCESS, GET_USERBLOGLIST_SUCESS } from '../Redux/AppReducer/actionType';
  
  
  export const MyBlogCard=({item})=> {
    const userId=useSelector((state)=>state.AuthReducer.tokenData.user._id);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    // do delete here.
    const handleDelete=(id)=>{
        // console.log(id,"idd to")
        dispatch(deleteUserBlog(id)).then((res)=>{
            console.log(res,"res")
            // here we need userid as well to fecth data or after deleting need to see the deleted data
            if(res===DELETE_USERBLOGLIST_SUCESS){
                // get users's particular blog after deletion.
                dispatch(getBlogsByUserList(userId)).then((res)=>{
                    console.log(res,"res22")
                    if(res===GET_USERBLOGLIST_SUCESS){
                        // get all blogs after deletion.
                        dispatch(getAllBlogList())
                    }
                })
                
                navigate("/allbloglist",{replace:true})
                
            }
        })
    }
    // do editing here.
    const handleEdit=(id)=>{
        console.log(id,"idd to")
    }

    return (
     <Box width={{base:"95%",lg:"95%"}} margin={"auto"} boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
     borderRadius={"1%"} 
     border={"1px solid green"} marginBottom={"9%"} marginTop={"2%"} fontWeight="400" textAlign={"justify"}> 
      <Image width="100%" height={"250px"}
       src={item.image} borderTopStartRadius={"8px"}></Image>
       <Box>
       <Text marginLeft={"1.4%"}>Category</Text>
        <Heading marginLeft={"2%"}  color={"green.600"}
         marginTop={"2%"} fontSize={"15px"}>{item.category}</Heading>
         <Box display={"flex"}> 
         <Text fontWeight={700} marginLeft={"2%"} marginRight={"2%"}>Tiltle:</Text>
         <Text marginLeft={"0.2%"} marginRight={"2%"}>{item.title}</Text>
         </Box>
        
        <Heading marginLeft={"60%"} color={"green.600"}
         marginTop={"2%"} fontSize={"15px"}>{item.writter}</Heading>
       
        </Box>


       <Box display={"flex"} border={"1px solid none"} width={"60%"}>
       <Box  border={"1px solid none"}
       width={"15%"} height={"30px"}> 
       <Link to={`/editpage/${item._id}`}>
       <EditIcon width={"100%"} height={"100%"} color={"green.800"} />
       </Link>
       
       </Box>



         <Box  marginLeft={"5%"} width={"14%"} height={"30px"} onClick={(e)=>handleDelete(item._id)} border={"1px solid none"} >
            <DeleteIcon width={{base:"70%",md:"100%"}} height={"100%"} color={"green.800"} marginLeft={{base:"10%",md:"3%"}} marginBottom={{base:"4%",md:"3%"}}/>
            </Box>
        
         </Box>
       
     </Box>
    );
  }