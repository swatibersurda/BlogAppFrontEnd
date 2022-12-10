import {
  Box,
  Text,
  Stack,
  Checkbox,
  filter,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterSort = () => {
 const [searchParams,setSearchParams]=useSearchParams();
  const urlCategory=searchParams.getAll("category");
  const urlSort=searchParams.get("sort")
  const [category, setCategory] = useState(urlCategory||[]);
  const [sort, setSort] = useState(urlSort||"");

  const handleFilter = (e) => {
    var option = e.target.value;
    let newCategory = [...category];
    console.log(newCategory, "newcat");
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };




useEffect(()=>{
    if(category||sort){
        let params={};
        category &&(params.category=category)
        sort &&(params.sort=sort)
        setSearchParams(params)
    }
},[category,setSearchParams,sort])


  return (
    <Box>
      <Text
        fontWeight={"800"}
        marginLeft={"2%"}
        marginTop="0%"
       fontSize={{ base: '16px', md: '18px', lg: '20px' }}
      >
        Filter By Category
      </Text>
      <Box
        marginLeft={"2%"}
        marginTop="8%"
        width="70%"
        height={"150px"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Stack spacing={[1, 2]} direction={["column"]}>
          <Checkbox
            size="md"
            value={"food"}
            colorScheme="green"
            borderColor="green.600"
            onChange={handleFilter}
            defaultChecked={category.includes("food")}
            fontSize={{ base: '12px', md: '18px', lg: '20px' }}
          >
            Food
          </Checkbox>
          <Checkbox 
             size="md"
            value={"poet"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="green.600"
            onChange={handleFilter}
            defaultChecked={category.includes("poet")}
          >
            
            Poet
          </Checkbox>
          <Checkbox
            size="md"
            value={"Entertainment"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="green.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Entertainment")}
          >
            Entertainment
          </Checkbox>
          <Checkbox
            size="md"
            value={"Animal"}
            colorScheme="green"
            marginTop={"5%"}
            borderColor="green.600"
            onChange={handleFilter}
            defaultChecked={category.includes("Animal")}
          >
            Animal
          </Checkbox>
        </Stack>
      </Box>
      <Text
        fontWeight={"800"}
        marginLeft={"2%"}
        marginTop="5%"
        fontSize={{ base: '16px', md: '18px', lg: '20px' }}
      >
        Sort By Alphabet
      </Text>
      <Box
        marginLeft={"2%"}
        marginTop="8%"
        width="70%"
        height={"150px"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        {/* <Text fontWeight={"800"} marginLeft={"2%"} marginTop="5%" fontSize={"20px"}>Filter By Category</Text> */}
        <RadioGroup onChange={setSort} value={sort}>
          <Stack direction="column">
            <Radio value={"title"} borderColor="green.600" defaultChecked={sort==="title"}>
              A to Z
            </Radio>
            <Radio value={"-title"} borderColor="green.600" defaultChecked={sort==="-title"}>
              Z to A
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
    // </Box>
  );
};
