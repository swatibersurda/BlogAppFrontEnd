import { Box, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getAllBlogList } from "../Redux/AppReducer/action";
import { BloggCard } from "./BloggCard";

export const BlogListingPage = () => {
  const blogs = useSelector((state) => state.AppReducer.allBlog);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (blogs.length === 0 || location) {
      let params = {
        category: searchParams.getAll("category"),
        sort: searchParams.get("sort"),
      };

      dispatch(getAllBlogList(params));
    }
  }, [location]);

  return (
    <Box>
      {blogs.length > 0 &&
        blogs.map((item) => {
          return (
            <Link to={`/detailblog/${item._id}`} key={item._id}>
              <BloggCard item={item} />
            </Link>
          );
        })}
    </Box>
  );
};
