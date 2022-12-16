import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
export const BloggCard = ({ item }) => {
  return (
    <Box
      width="100%"
      border="1px solid transparent"
      maxH={"auto"}
      display={{ md: "block", sm: "block", md: "flex", lg: "flex" }}
      marginBottom="2%"
      boxShadow={`rgba(0, 0, 0, 0.24) 0px 3px 8px`}
    >
      {/* image div */}
      <Box width={"100%"} border="1px solid transparent" marginRight={"3%"}>
        <Image
          width={{ base: "100%", lg: "100%" }}
          height="100%"
          src={item.image}
        ></Image>
        {/* </Box> */}
      </Box>
      <Box width={"100%"} border="1px solid transparent" height="100%">
        <Text fontFamily={"sans-serif"} fontSize={"12px"} marginTop={"5%"}>
          EDITOR'S PICK
        </Text>
        <Heading fontSize={"24px"} fontFamily={"mono"} marginTop={"2%"}>
          {item.title}
        </Heading>
        <Text
          fontFamily={"cursive"}
          marginTop={"1%"}
          marginBottom="2%"
          fontSize={"17px"}
        >
          {item.meta_data}
        </Text>
        <Text fontSize={"13px"} marginTop={"7%"} fontWeight="600">
          {item.writter}
        </Text>
        <Text fontSize={"13px"} marginTop={"1%"} fontWeight="600">
          CreatedAt:{item.createdAt}
        </Text>
        <Box
          marginTop={"4%"}
          width={"57%"}
          marginBottom="2%"
          border="1px solid black"
          backgroundColor={"gray"}
        ></Box>
      </Box>
    </Box>
  );
};
