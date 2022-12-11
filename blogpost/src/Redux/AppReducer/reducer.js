import * as Types from "./actionType";
const intialState={
    allBlog:[],
    isLoading:false,
    isError:false,
    singleBlog:{},
    usersBlogss:[]
    
}
export const reducer=(state=intialState,action)=>{
    switch(action.type){
        case Types.GET_ALLBLOGLIST_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        case Types.GET_ALLBLOGLIST_SUCESS:{
            return{
                ...state,
                allBlog:action.payload,
                isLoading:false,

            }
        }
        case Types.GET_ALLBLOGLIST_FAILURE:{
            return{
                ...state,
            
                isLoading:false,
                isError:true

            }
        }
        // GET BY BLOG ID.
        case Types.GET_IDBLOGLIST_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        case Types.GET_IDBLOGLIST_SUCESS:{
            return{
                ...state,
               singleBlog:action.payload,
              

            }
        }
        case Types.GET_IDBLOGLIST_FAILURE:{
            return{
                ...state,
              isError:false

            }
        }
        // get user blogs
        case Types.GET_USERBLOGLIST_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        case Types.GET_USERBLOGLIST_SUCESS:{
            return{
                ...state,
                usersBlogss:action.payload,
                isLoading:false,

            }
        }
        case Types.GET_USERBLOGLIST_FAILURE:{
            return{
                ...state,
                isError:true

            }
        }
        default:
            return state;
    }
}