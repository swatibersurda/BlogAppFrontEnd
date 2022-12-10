import axios from "axios";
import * as Types from "./actionType";


export const getAllBlogList = (params) => (dispatch) => {
  let data = params.category;
  
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
