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
                     navigate(comingfrom,{replace:true})
                }
                else{
                    alert("WRONG CREDENTIALS OR Not SIGNUP...........");
                  
                }
             });
        }
    }
   
  
    return (
      <Box
        width={"100%"}
        height="1800px"
        border={"2px solid transparent"}
        backgroundImage={
          "https://cdn.pixabay.com/photo/2016/03/22/15/29/blue-1273089_1280.jpg"
        }
        backgroundSize="contain"
      >
        <Box width={"100%"} height="0%" border={"2px solid none"} marginTop="4%">
          <Box
            height={"60%"}
            borderRadius={"8px"}
            width={{ base: "70%", md: "50%", lg: "40%" }}
            backgroundColor={"none"}
            textAlign="center"
            margin={"auto"}
            border={"2px solid transparent"}
            marginTop={"2%"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            }
          >
            <Heading
              marginBottom={"2%"}
              marginTop="6%"
              fontSize={{ base: "22px", lg: "25" }}
              color={"green.600"}
            >
              SIGN IN HERE
            </Heading>
  
            {/* ffffff */}
          
  
            <FormControl id="read" marginBottom={"2%"}>
              <FormLabel marginLeft={"5%"} marginBottom={"2%"} color="black" 
              fontSize={"30px"}>
                Email
              </FormLabel>
              <Input  border={"3px solid black"} fontSize={"20px"}
                marginLeft={"0%"}
                borderColor="black"
                width={"90%"}
                height={"50px"}
                type="read"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
  
            <FormControl id="metadata" marginBottom={"2%"}>
              <FormLabel marginLeft={"5%"} marginBottom={"2%"} fontSize={"30px"} color="black">
                Password
              </FormLabel>
              <Input border={"3px solid black"} fontSize={"20px"}
                marginLeft={"0%"}
                borderColor="black"
                width={"90%"}
                height={"50px"}
                type="metadata"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack marginTop="5%" direction={{ sm: "row" }} align={"start"}>
              <Text
                marginLeft={"5%"}
                fontWeight={"600"}
                marginRight={{ base: "25%", lg: "45%" }}
              >
                Not a Registerd Users?
              </Text>
              <Link
              fontSize={"19px"}
                as={RouterLink}
                to={"/signup"}
                fontWeight="700"
                color="black"
              >
                SIGN UP
              </Link>
            </Stack>
            <Button
              onClick={handleSignIn}
              marginLeft={"0%"}
              height={"50px"}
              width={"94%"}
              fontSize={"20px"}
              marginBottom={"2%"}
              backgroundColor="green.600"
              // bgGradient="linear(to-r, blue.400, green.500)"
              marginTop={"10%"}
              color="white"
              fontWeight={"800"}
              cursor={"pointer"}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
       