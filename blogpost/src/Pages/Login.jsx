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
import { useLocation, useNavigate } from 'react-router-dom';
import { postUserSignIn } from '../Redux/AuthReducer/action';
import { USER_POST_SIGNIN_SUCESS } from '../Redux/AuthReducer/actionTypes';
import { Link as RouterLink} from "react-router-dom";
  
  export const Login=()=> {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // const {tokenData,isAuth}=useSelector((state)=>state.AuthReducer);
    // console.log(tokenData,isAuth,"tokennn..")
   console.log(email,password,"EMAIL")
   const location=useLocation();
   const comingfrom=location.state?.from?.pathname || "/";
    
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
                     navigate("/",{replace:true})
                }
                else{
                    alert("WRONG CREDENTIALS OR Not SIGNUP...........");
                  
                }
             });
        }
    }
    return (
      <Box width={"100%"} height="800px" border={"1px solid none"}>
        <Box width={"100%"} height="90%" border={"1px solid none"} marginTop="6%" >
          
          <Box height={"60%"}
            borderRadius={"8px"}
            width={{ base: "70%", md: "50%", lg: "40%" }}
            backgroundColor={"white"}
            textAlign="center"
            margin={"auto"}
            border={"1px solid black"}
            marginTop={"2%"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            }
          >
            <Heading
              marginBottom={"2%"}
              marginTop="6%"
             
              fontSize={"22px"}
            >
              SIGN IN HERE
            </Heading>
  
            {/* ffffff */}
  
  
            <FormControl id="read">
              <FormLabel marginLeft={"3%"} marginBottom={"2%"} >
                Email
              </FormLabel>
              <Input
                marginLeft={"0%"}
                width={"94%"}
                height={"50px"}
                type="read"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
  
            
            <FormControl id="metadata">
              <FormLabel marginLeft={"3%"} marginBottom={"2%"} marginTop={"2%"} >
                Password
              </FormLabel>
              <Input
                marginLeft={"0%"}
                width={"94%"}
                height={"50px"}
                type="metadata"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack marginTop="5%"
                    direction={{ sm: 'row' }}
                    align={'start'}
                  >
                    <Checkbox marginLeft={"3%"}  marginRight={{base:"25%",lg:"45%"}}>Remember me</Checkbox>
                    <Link as={RouterLink} to={"/signup"} color={'blue.400'} >SIGNUP</Link>
                  </Stack>
            <Button onClick={handleSignIn}
                marginLeft={"0%"}
                height={"50px"}
                width={"94%"}
                marginBottom={"2%"}
                backgroundColor={"blue.400"}
                marginTop={"9%"}
                
                fontWeight={"700"}
                
              >
                SUBMIT
              </Button>
         </Box>
      </Box>
       
    </Box>
     
    
      
     
    )
        
     
  
  }
  
     