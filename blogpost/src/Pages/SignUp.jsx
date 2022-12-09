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
import { Link as RouterLink} from "react-router-dom";
import { Navbar } from "./NavBar";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const store = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(store,"storefdsgfd");
  console.log(name,email,password);
  const handleSignUp = () => {
    console.log("jiii")
    // will handle error handling if any details are not filled.
     if(name===""||email===""||password===""){
      alert("Please Fill All Data....")
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
    <>
    <Navbar/>
    <Flex 
      minH={"100vh"}
      align={"center"}
      justify={"center"} 
      bg={useColorModeValue("gray.50", "gray.800")} 
    >
     
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>SIGNUP SBBLOG Account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input 
                type="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input 
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link as={RouterLink}  to={"/login"} color={'green.800'} fontWeight={"600"}>SIGNIN</Link>
              </Stack>
              <Button
                onClick={handleSignUp}
                bg={"green.600"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
};
