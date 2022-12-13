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
            fontSize={{ base: "22px", lg: "25" }}
          >
            SIGN UP HERE
          </Heading>

          {/* ffffff */}
          <FormControl id="cat" marginBottom={"2%"}>
            <FormLabel marginLeft={"5%"} marginBottom={"2%"} fontSize={"20px"}>
              Name
            </FormLabel>
            <Input
              marginLeft={"0%"}
              borderColor="black"
              width={"90%"}
              height={"50px"}
              type="cat"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormControl>

          <FormControl id="read" marginBottom={"2%"}>
            <FormLabel marginLeft={"5%"} marginBottom={"2%"} fontSize={"20px"}>
              Email
            </FormLabel>
            <Input
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
            <FormLabel marginLeft={"5%"} marginBottom={"2%"} fontSize={"20px"}>
              Password
            </FormLabel>
            <Input
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
              Already a Users?
            </Text>
            <Link
              as={RouterLink}
              to={"/login"}
              fontWeight="700"
              color={"blue.400"}
            >
              SIGNIN
            </Link>
          </Stack>
          <Button
            onClick={handleSignUp}
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
