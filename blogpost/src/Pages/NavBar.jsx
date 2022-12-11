import { HStack, Text, Image, color } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const Navbar = () => {
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
          BlogList
        </RouterLink>
        <RouterLink to="/login">AddBlog</RouterLink>
        <RouterLink to="/myblog">MyBlog</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </HStack>

      {/* <RouterLink to="/allbloglist" color={'white.800'} padding>BlogList</RouterLink>
            <RouterLink to="/login">AddBlog</RouterLink>
            <RouterLink to="/playzone">MyBlog</RouterLink> */}
      {/* <RouterLink to="/dashboard">Dashboard</RouterLink> */}
    </HStack>
  );
};

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
