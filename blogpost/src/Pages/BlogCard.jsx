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
import { Link } from 'react-router-dom';

export const BlogCard=({item})=> {
  return (
   <Box width={{base:"100%",lg:"80%"}} margin={"auto"}  textAlign={"justify"}
   boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
   borderRadius={"8px"} 
   border={"1px solid green"} marginBottom={"3%"} marginTop={"2%"} >
    
    <Link to={`/detailblog/${item._id}`}>
    <Image width="100%" height={"250px"} borderTopRadius={"8px"}
     src={item.image}></Image>
     <Box>
     <Text fontWeight={"600"} marginLeft={"2%"}>Category</Text>
      <Heading marginLeft={"2%"}  color={"green.600"}
       marginTop={"1%"} fontSize={"15px"}>{item.category}</Heading>
      <Text fontFamily={"serif"} fontWeight={"700"} marginLeft={"2%"} marginRight="2%">{item.meta_data}</Text>
      {/* <Heading marginLeft={"60%"}
       marginTop={"2%"} fontSize={"15px"}>{item.writter}</Heading> */}
      
     </Box>
     </Link>
   </Box>
  );
}