import { HStack, Text, Image, color, Button } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./Login";
import { logOut } from "../Redux/AuthReducer/action";

export const Navbar = () => {

  const {tokenData,isAuth}=useSelector((state)=>state.AuthReducer);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(isAuth,"isAuth")
    
    const handleLog=()=>{
      if(isAuth){
        dispatch(logOut())
      }
      else{
        navigate("/login",{replace:true})
      }
    }
  
  return (
    <HStack
      color={"white"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      p={1}
      bgGradient="linear(to-r, blue.400, green.500)"
      height={"50px"}
      overflow="hidden"
    >
      <Box
        width={{ base: "45%", md: "60%", lg: "60%" }}
        height="100%"
        marginLeft={"1%"}
        float="left"
        display={"flex"}
        marginTop={{ base: "2.8%", md: "2.5%", lg: "1.5%" }}
      >
        <Text fontSize={"18px"}>SBBLOG</Text>
      </Box>
       
      <HStack
        float={"right"}
        width={{ base: "80%", md: "50%", lg: "40%" }}
        height="100%"
        justifyContent={"space-around"}
        color={"white"}
        fontSize={{ base: "12px", md: "16px%", lg: "16px" }}
        p={1}
        overflow="hidden"
      >
        <RouterLink to="/allbloglist" color={"white.800"} padding>
          AllBlogs
        </RouterLink>
        <RouterLink to="/postblogs">AddBlog</RouterLink>
        <RouterLink to="/myblog">MyBlogs</RouterLink>
      
    <Button  onClick={handleLog} backgroundColor={"blue.400"} color="white">{isAuth?"LogOut":"Login"}</Button>

      </HStack>

     
    </HStack>
  );
};
