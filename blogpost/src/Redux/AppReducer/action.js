import axios from "axios";
import * as Types from "./actionType";


export const getAllBlogList = (params) => (dispatch) => {
  console.log(params,"params")
  
  return axios
    .get(`https://cyan-panicky-binturong.cyclic.app/blog`, { params })
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
    .get(`https://cyan-panicky-binturong.cyclic.app/blog/${id}`)
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
    .get(`https://cyan-panicky-binturong.cyclic.app/users/${id}`)
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

export const deleteUserBlog = (id) => (dispatch) => {
  console.log(id,"params")
  
  return axios
    .delete(`https://cyan-panicky-binturong.cyclic.app/blog/${id}`)
    .then((res) => {
      console.log(res.data, "boglisttttig");
      dispatch({ type: Types.DELETE_USERBLOGLIST_SUCESS});
      return Types.DELETE_USERBLOGLIST_SUCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.DELETE_USERBLOGLIST_FAILURE });
      return Types.DELETE_USERBLOGLIST_FAILURE;
    });
};


export const updateUserBlog = (id,payload) => (dispatch) => {
  // console.log(id,"params")
  
  return axios
    .patch(`https://cyan-panicky-binturong.cyclic.app/blog/${id}`,payload)
    .then((res) => {
      console.log(res.data, "boglisttttig");
      dispatch({ type: Types.UPDATE_USERBLOGLIST_SUCESS});
      return Types.UPDATE_USERBLOGLIST_SUCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.UPDATE_USERBLOGLIST_FAILURE });
      return Types.UPDATE_USERBLOGLIST_FAILURE;
    });
};


export const postUserBlog = (payload) => (dispatch) => {
  // console.log(id,"params")
  
  return axios
    .post(`https://cyan-panicky-binturong.cyclic.app/blog`,payload)
    .then((res) => {
      console.log(res.data, "boglisttttig");
      dispatch({ type: Types.POST_USERBLOGLIST_SUCESS});
      return Types.POST_USERBLOGLIST_SUCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.POST_USERBLOGLIST_FAILURE });
      return Types.POST_USERBLOGLIST_FAILURE;
    });
};


