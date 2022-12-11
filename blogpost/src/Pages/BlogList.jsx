import { Box } from "@chakra-ui/react"
import { FilterSort } from "../Compnents/FilterSort"
import { BlogListingPage } from "./BlogListingPage"
import { Navbar } from "./NavBar"

export const BlogList=()=>{
    return(
        <Box>
            <Navbar/>
            <Box display={"flex"} >
                {/* box for displaying data or filtercomponent */}
                <Box marginLeft={{ base: '0.2%', md: '0.5%', lg: '0.5%' }} width={{ base: '47%', md: '25%', lg: '30%' }}
                 marginTop="2%" height={"500px"}>
                    <FilterSort/>
                </Box>
                {/* box for displaying data after filteror sort */}
                <Box border={"1px solid none"} 
                 width={{ base: '50%', md: '64%', lg: '70%' }} marginTop="2%" >
                    <BlogListingPage/>
                </Box>
            </Box>
        </Box>
    )
}