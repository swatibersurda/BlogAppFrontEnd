import { HStack, Text, Image, color, Button } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Login } from "./Login";

export const Navbar = () => {

  const {tokenData,isAuth}=useSelector((state)=>state.AuthReducer);
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
        {/* <RouterLink to="">LogIn</RouterLink> */}
        <Box>{isAuth ?  <Button  
      backgroundColor={"white"}
    height="120px" border={"none"} color={"yellow"}>LOGOUT</Button>:<Login/>}

 </Box>
      </HStack>

      {/* <RouterLink to="/allbloglist" color={'white.800'} padding>BlogList</RouterLink>
            <RouterLink to="/login">AddBlog</RouterLink>
            <RouterLink to="/playzone">MyBlog</RouterLink> */}
      {/* <RouterLink to="/dashboard">Dashboard</RouterLink> */}
    </HStack>
  );
};
// const handleLogOut=()=>{
//   dispatch(loginOutData()).then((res)=>{
//     if(res===LOGOUT_SUCESS)
//     {
//          navigate("/",{replace:true})
//     }
//   })
// }

//   <Box>{isAuth && namee? <Button  onClick={handleLogOut}
// backgroundColor={"rgb(53, 176, 225)"}
// height="20px" border={"none"} color={"white"} >LOGOUT</Button> 

// :<Login/>}

// </Box>

/* <nav className="navBar">
<Link to="/">Login</Link>
<Link to="/pollpage">PollePage</Link>
<Link to="/resultpage">ResultPage</Link>
</nav> 
.navBar {
  /* background-image:linear-gradient(to right,crimson,purple,green); */
//   background-color: #4267b2;
//   overflow: hidden;
//   height: 50px;
// }

// .navBar a {
//   padding: 14px 16px;
//   text-decoration: none;
//   text-align: center;
//   color: white;
//   font-size: 15px;
//   display: block;
//   float: left;
// }
// }
