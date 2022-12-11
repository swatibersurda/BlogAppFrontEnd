import axios from "axios";
import * as Types from "./actionType";


export const getAllBlogList = (params) => (dispatch) => {
  console.log(params,"params")
  
  return axios
    .get(`https://swatibersurdablogapp.up.railway.app/blog`, { params })
    .then((res) => {
      console.log(res.data, "boglisttttig");
      dispatch({ type: Types.GET_ALLBLOGLIST_SUCESS, payload: res.data });
      return Types.GET_ALLBLOGLIST_SUCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.GET_ALLBLOGLIST_FAILURE });
      return Types.GET_ALLBLOGLIST_FAILURE;
    });
};


export const getBlogByIdList = (id) => (dispatch) => {
  console.log(id,"params")
  
  return axios
    .get(`https://swatibersurdablogapp.up.railway.app/blog/${id}`)
    .then((res) => {
      console.log(res.data, "boglisttttig");
      dispatch({ type: Types.GET_IDBLOGLIST_SUCESS,payload:res.data});
      return Types.GET_IDBLOGLIST_SUCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.GET_IDBLOGLIST_FAILURE });
      return Types.GET_IDBLOGLIST_FAILURE;
    });
};


// USERS BLOG
export const getBlogsByUserList = (id) => (dispatch) => {
  console.log(id,"params")
  
  return axios
    .get(`https://swatibersurdablogapp.up.railway.app/users/${id}`)
    .then((res) => {
      console.log(res.data, "boglisttttig");
      dispatch({ type: Types.GET_USERBLOGLIST_SUCESS,payload:res.data.blogsArray});
      return Types.GET_USERBLOGLIST_SUCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.GET_USERBLOGLIST_FAILURE });
      return Types.GET_USERBLOGLIST_FAILURE;
    });
};


