import { Box,Image,Text } from "@chakra-ui/react"
export const BloggCard=({item})=>{
    return(
        <Box width="100%" border="1px solid red" height={"200px"} display={"flex"} marginBottom="2%" backgroundColor={"#f5fafd"}>
          {/* image div */}
          <Box width={"40%"} border="1px solid yellow" height="100%" marginRight={"3%"}>
          <Image width="100%" height={"100%"} 
           src={item.image}></Image>
          </Box>
          <Box width={"57%"} border="1px solid transparent" height="100%" backgroundClip={"#DCDCDC"}>
            <Text fontFamily={"sans-serif"} fontSize={"13px"} marginTop={"5%"} >EDITOR'S PICK</Text>
          </Box>
        </Box>
    )
}