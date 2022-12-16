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

import {
  getAllBlogList,
  getBlogsByUserList,
  postUserBlog,
  updateUserBlog,
} from "../Redux/AppReducer/action";
import {
  UPDATE_USERBLOGLIST_SUCESS,
  GET_ALLBLOGLIST_SUCESS,
  GET_USERBLOGLIST_SUCESS,
  POST_USERBLOGLIST_SUCESS,
} from "../Redux/AppReducer/actionType";
import { Navbarr } from "./Navbarr";

export const PostBlogs = () => {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [min_read, setminread] = useState("");
  const [meta_data, setmetaData] = useState("");
  const [title, setTitle] = useState("");
  const [writter, setWritter] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.AuthReducer.tokenData.user._id);
  const token = useSelector((state) => state.AuthReducer.tokenData);

  //
  const HandlePost = () => {
    if (
      (category && min_read && meta_data && title && writter && content,
      image && user_id)
    ) {
      let payload = {
        category: category,
        min_read: min_read,
        meta_data: meta_data,
        title: title,
        writter: writter,
        content: content,
        image: image,
        user_id: user_id,
      };
      dispatch(postUserBlog(payload)).then((res) => {
        if (res === POST_USERBLOGLIST_SUCESS) {
          dispatch(getAllBlogList()).then((res) => {
            if (res === GET_ALLBLOGLIST_SUCESS) {
              dispatch(getBlogsByUserList(user_id)).then((res) => {
                navigate("/", { replace: true });
              });
            }
          });
        }
      });
    }
  };

  return (
    <Box height="800px">
      <Navbarr />
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
            ADD BLOG HERE
          </Heading>

          <FormControl id="cat">
            <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>
              Category
            </FormLabel>
            <Select
              mb={"15px"}
              borderColor={"blue.400"}
              bgGradient={"linear(to-r, blue.400, green.500)"}
              marginLeft={"3%"}
              width={"94%"}
              height={"35px"}
              type="cat"
              value={category}
              variant="outline"
              placeholder="Select category"
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
              borderColor={"blue.400"}
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
              borderColor={"blue.400"}
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
              borderColor={"blue.400"}
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
              borderColor={"blue.400"}
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
              placeholder="size:800*600"
              borderColor={"blue.400"}
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
          <FormLabel marginLeft={"3%"} marginBottom={"1%"} color={"blue.400"}>
            Content
          </FormLabel>
          <Textarea
            marginLeft={"0%"}
            borderColor={"blue.400"}
            width={"94%"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            size="sm"
          ></Textarea>
          <Button
            onClick={HandlePost}
            marginLeft={"0%"}
            width={"94%"}
            marginBottom={"2%"}
            backgroundColor={"green.600"}
            marginTop={"2%"}
            bgGradient={"linear(to-r, blue.400, green.500)"}
            color={"white"}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
