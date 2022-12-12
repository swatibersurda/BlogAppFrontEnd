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
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { useEffect } from "react";
  import { useParams } from "react-router-dom";
  import { updateUserBlog } from "../Redux/AppReducer/action";
  import { Navbar } from "./NavBar";
  
  export const PostBlogs = () => {
    const { id } = useParams();
    const [category, setCategory] = useState("");
    const [min_read, setminread] = useState("");
    const [meta_data, setmetaData] = useState("");
    const [title, setTitle] = useState("");
    const [writter, setWritter] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    console.log(category, min_read, meta_data, title, writter, content, image);
  
    return (
      <Box height="800px" backgroundColor={"green.500"}>
        <Navbar />
        <Box>
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
              marginTop="1.5%"
              color={"blue.400"}
              fontSize={"18px"}
            >
              PUBLISH HERE
            </Heading>
  
            {/* ffffff */}
            <FormControl id="cat">
              <FormLabel marginLeft={"3%"} marginBottom={"1%"} >
                Categorey
              </FormLabel>
              <Input borderColor={"blue.400"} 
                marginLeft={"0%"}
                width={"94%"}
                height={"35px"}
                type="cat"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </FormControl>
  
            <FormControl id="read">
              <FormLabel marginLeft={"3%"} marginBottom={"1%"}>
                Min_Read
              </FormLabel>
              <Input borderColor={"blue.400"} 
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
              <FormLabel marginLeft={"3%"} marginBottom={"1%"}>
                Mata_Data
              </FormLabel>
              <Input borderColor={"blue.400"} 
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
              <FormLabel marginLeft={"3%"} marginBottom={"1%"}>
                Tiltle
              </FormLabel>
              <Input borderColor={"blue.400"} 
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
              <FormLabel marginLeft={"3%"} marginBottom={"1%"}>
                Author
              </FormLabel>
              <Input borderColor={"blue.400"} 
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
              <FormLabel marginLeft={"3%"} marginBottom={"1%"}>
                Image_Url
              </FormLabel>
              <Input borderColor={"blue.400"} 
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
            <FormLabel marginLeft={"3%"} marginBottom={"1%"}>Content</FormLabel>
        <Textarea  marginLeft={"0%"} borderColor={"blue.400"} 
                width={"94%"}
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          placeholder='Here is a sample placeholder'
          size='sm'>
            
          </Textarea>
            <Button
              marginLeft={"0%"}
              width={"94%"}
              marginBottom={"2%"}
              backgroundColor={"green.600"}
              marginTop={"2%"}
              
            >
              Update
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  