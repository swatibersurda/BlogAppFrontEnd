import { HStack,Text,Image } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from "react-router-dom"

export const Navbar = () => {



    return (
        <HStack justify='space-around'
            color={'white'} 
            boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
            p={1}   bgColor='green.600' height={"50px"}    _hover={{
                bg: "black.500",
              }}
        > 
       
         <Text>SBBLOG</Text>
        
            <RouterLink to="/" color={'white.800'}>SignUp</RouterLink>
            <RouterLink to="/login">SignIn</RouterLink>
            <RouterLink to="/allbloglist" color={'white.800'}>BlogList</RouterLink>
            <RouterLink to="/playzone">MyBlog</RouterLink>
            {/* <RouterLink to="/dashboard">Dashboard</RouterLink> */}

        </HStack>
    )
}