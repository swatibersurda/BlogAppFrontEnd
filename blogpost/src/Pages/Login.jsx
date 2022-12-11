import {
    Flex,
    Box,
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
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postUserSignIn } from '../Redux/AuthReducer/action';
import { USER_POST_SIGNIN_SUCESS } from '../Redux/AuthReducer/actionTypes';
import { Link as RouterLink} from "react-router-dom";
  
  export const Login=()=> {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {tokenData,isAuth}=useSelector((state)=>state.AuthReducer);
    console.log(tokenData,isAuth,"tokennn..")

    
    const handleSignIn=()=>{
       if(email===""||password===""){
        alert("Please Fill All Data....")
       }
        if(email&&password){
             let payload;
             payload={
                email,
                password
             }
             dispatch(postUserSignIn(payload)).then((res)=>{
                console.log(res,"ress")
                if(res===USER_POST_SIGNIN_SUCESS){
                    alert("congratulation Login sucessfully")
                     navigate("/allbloglist",{replace:true})
                }
                else{
                    alert("WRONG CREDENTIALS OR Not SIGNUP...........");
                  
                }
             });
        }
    }
    return (
      <Flex 
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')} bgGradient='linear(to-r, blue.400, green.500)'>
        <Stack marginTop={"0.2%"} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} maxH={"100%"} >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign SBBlog account</Heading>
          </Stack>
          <Box  
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}> 
            <Stack spacing={4} >
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input  type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link as={RouterLink} to={"/"} color={'blue.400'}>SIGNUP</Link>
                </Stack>
                <Button onClick={handleSignIn}
                  bg={'green.600'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }