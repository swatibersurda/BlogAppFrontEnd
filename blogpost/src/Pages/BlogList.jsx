import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FilterSort } from "../Compnents/FilterSort";
import { BlogListingPage } from "./BlogListingPage";
import { Navbarr } from "./Navbarr";
import "./navbarr.css";

export const BlogList = () => {
  const [we, setWe] = useState(false);
  const handlefill = () => {
    console.log("hii");
    setWe(!we);
  };
  return (
    <Box>
      <Navbarr />

      <Box display={"flex"}>
        <Box
          border={"1px solid transparent"}
          marginLeft={{ base: "1%", sm: "1%", md: "1%", lg: "1%" }}
          width={{ base: "48%", sm: "33%", md: "23%", lg: "15%" }}
          marginTop="2%"
          height={"700px"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
        >
          <FilterSort />
        </Box>
        {/* </Box>:""} */}
        {/* box for displaying data after filteror sort */}
        <Box
          border={"1px solid none"}
          width={{ base: "49%", sm: "65%", md: "68%", lg: "79%" }}
          marginTop="2%"
          marginLeft={"1.5%"}
        >
          <BlogListingPage />
        </Box>
      </Box>
    </Box>
  );
};
