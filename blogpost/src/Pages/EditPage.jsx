import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllBlogList, getBlogsByUserList, updateUserBlog } from "../Redux/AppReducer/action";
import { UPDATE_USERBLOGLIST_SUCESS ,GET_ALLBLOGLIST_SUCESS,GET_USERBLOGLIST_SUCESS} from "../Redux/AppReducer/actionType";
import { Navbarr } from "./Navbarr";
export const EditPage = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
  const [category, setCategory] = useState("");
  const [min_read, setminread] = useState("");
  const [meta_data, setmetaData] = useState("");
  const [title, setTitle] = useState("");
  const [writter, setWritter] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate=useNavigate();
  
  // this user needs because after post we will fetch all blogs and login user blog fectch
  const userId=useSelector((state)=>state.AuthReducer.tokenData.user._id);

        const HandlePatch=()=>{
          
          if(category&&min_read&&meta_data&&title&&writter&&content&&image&&id){
            let payload;
            payload={
              category,min_read,meta_data,title,writter,content,image
            } 
           dispatch(updateUserBlog(payload,id)).then((res)=>{
           
            if(res===UPDATE_USERBLOGLIST_SUCESS){
              dispatch(getAllBlogList()).then((res)=>{
                if(res===GET_ALLBLOGLIST_SUCESS){
                  dispatch(getBlogsByUserList(userId)).then((res)=>{
                    if(res===GET_USERBLOGLIST_SUCESS){
                      navigate("/",{replace:true})
                    }
                  })
                }
              })
            }
           })
      }
        }
       
          
    
  

  return (
    <Box height="800px" >
      <Navbarr/>
      <Box marginTop={"4%"}>
        <Box
          borderRadius={"8px"}
          width={{ base: "70%", md: "50%", lg: "40%" }}
          backgroundColor={"white"}
          textAlign="center"
          margin={"auto"}
          border={"1px solid black"}
          marginTop={"1%"}
          boxShadow={
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
          }
        >
          <Heading
            marginBottom={"2%"}
            marginTop="2%"
            color={"blue.400"}
            fontSize={"18px"}
          >
            UPDATE HERE
          </Heading>

          {/* ffffff */}
          <FormControl id="cat">
          <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>
                Category
              </FormLabel>
             <Select mb={"15px"} borderColor={"blue.400"} 
                marginLeft={"3%"}
                width={"94%"}
                height={"35px"}
                type="cat"
                value={category}
             variant="outline" placeholder="Select category"
             onChange={(e) => {
              setCategory(e.target.value);
            }}
             >
              <option>Food</option>
              <option>Movies</option>
              <option>Entertainment</option> 
              <option>Animals</option>
              <option>Science</option>
              <option>Technology</option>
              <option>Economy</option>
             <option>Other</option>
          </Select>


          </FormControl>

          <FormControl id="read">
            <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>
              Min_Read
            </FormLabel>
            <Input
              marginLeft={"0%"}
              width={"94%"}
              height={"35px"}
              type="read"
              value={min_read}
              onChange={(e) => {
                setminread(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="metadata">
            <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>
              Mata_Data
            </FormLabel>
            <Input
              marginLeft={"0%"}
              width={"94%"}
              height={"35px"}
              type="metadata"
              value={meta_data}
              onChange={(e) => {
                setmetaData(e.target.value);
              }}
            />
          </FormControl>

          
        
          <FormControl id="title">
            <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>
              Tiltle
            </FormLabel>
            <Input
              marginLeft={"0%"}
              width={"94%"}
              height={"35px"}
              type="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FormControl>
        
          
          <FormControl id="author">
            <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>
              Author
            </FormLabel>
            <Input
              marginLeft={"0%"}
              width={"94%"}
              height={"35px"}
              type="author"
              value={writter}
              onChange={(e) => {
                setWritter(e.target.value);
              }}
            />
          </FormControl>
       
          
          <FormControl id="imagee">
            <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>
              Image_Url
            </FormLabel>
            <Input
              marginLeft={"0%"}
              width={"94%"}
              height={"35px"}
              type="imagee"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </FormControl>

          {/* <Text mb='8px'>Value: {value}</Text> */}
          <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>Content</FormLabel>
      <Textarea  marginLeft={"0%"}
              width={"94%"}
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        size='sm'>
          
        </Textarea>
          <Button onClick={HandlePatch}
           color={"white"}
            marginLeft={"0%"}
            width={"94%"}
            marginBottom={"2%"}
            backgroundColor={"green.600"}
            marginTop={"2%"}
            bgGradient="linear(to-r, blue.400, green.500)"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
