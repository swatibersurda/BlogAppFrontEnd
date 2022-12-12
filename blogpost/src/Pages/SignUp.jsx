import { useDispatch, useSelector } from "react-redux";
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
} from "@chakra-ui/react";
import { useState } from "react";
import { postUserSignUp } from "../Redux/AuthReducer/action";
import {
  USER_POST_SIGNUP_FAILURE,
  USER_POST_SIGNUP_SUCESS,
} from "../Redux/AuthReducer/actionTypes";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Navbar } from "./NavBar";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const store = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(store,"storefdsgfd");
  console.log(name, email, password);
  const handleSignUp = () => {
    console.log("jiii");
    // will handle error handling if any details are not filled.
    if (name === "" || email === "" || password === "") {
      alert("Please Fill All Data....");
    }
    if (name && email && password) {
      let payload;
      payload = {
        name,
        email,
        password,
      };
      dispatch(postUserSignUp(payload)).then((res) => {
        console.log(res, "ress");
        if (res === USER_POST_SIGNUP_SUCESS) {
          alert("congratulation user registed sucessfully");
          navigate("/login", { replace: true });
        }
        // will check for already registered user.
        else {
          alert("Already Registered User SignIn ");
        }
      });
    }
  };
  return (
    <Box width={"100%"} height="800px" border={"1px solid yellow"} backgroundColor={"green.600"} >
      <Box width={"100%"} height="100%" border={"1px solid none"} marginTop="4%">
        
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
            SIGN UP HERE
          </Heading>

          {/* ffffff */}
          <FormControl id="cat">
            <FormLabel marginLeft={"3%"} marginBottom={"2%"} >
              Name
            </FormLabel>
            <Input
              marginLeft={"0%"}
              width={"94%"}
              height={"50px"}
              type="cat"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormControl>

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
            <FormLabel marginLeft={"3%"} marginBottom={"2%"} >
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
                  <Link as={RouterLink} to={"/login"} color={'blue.400'} >SIGNUP</Link>
                </Stack>
          <Button onClick={handleSignUp}
              marginLeft={"0%"}
              height={"50px"}
              width={"94%"}
              marginBottom={"2%"}
              backgroundColor={"green.400"}
              marginTop={"5%"}
              
              fontWeight={"700"}
              
            >
              SUBMIT
            </Button>

          

          </Box>

        </Box>
     
     
       
    </Box>
   
  
    
   
  )
      
   

}
