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
                <Box border={"1px solid transparent"}
                 marginLeft={{ base: '1%',sm:"1%", md: '1%', lg: '1%' }} width={{ base: '48%',sm:"33%", md: '23%', lg: '15%' }}
                 marginTop="2%" height={"700px"}  boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} 
                 >
                    <FilterSort/>
                </Box>
                {/* box for displaying data after filteror sort */}
                <Box border={"1px solid none"} 
                 width={{ base: '50%',sm:"65%", md: '68%', lg: '79%' }} marginTop="2%" marginLeft={"1.5%"} >
                    <BlogListingPage/>
                </Box>
            </Box>
        </Box>
    )
}