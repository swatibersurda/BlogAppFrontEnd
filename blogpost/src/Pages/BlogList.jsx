import { Box } from "@chakra-ui/react"
import { FilterSort } from "../Compnents/FilterSort"
import { Navbar } from "./NavBar"

export const BlogList=()=>{
    return(
        <Box>
            <Navbar/>
            <Box display={"flex"}>
                {/* box for displaying data or filtercomponent */}
                <Box marginLeft={"0.5%"} width={"25%"} border={"green.600"} marginTop="2%" height={"500px"}>
                    <FilterSort/>
                </Box>
                {/* box for displaying data after filteror sort */}
                <Box marginLeft={"4%"} width={"70%"} border={"1px solid black"} marginTop="2%" height={"500px"}></Box>
            </Box>
        </Box>
    )
}