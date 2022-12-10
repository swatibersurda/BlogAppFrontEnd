import * as Types from "./actionType";
const intialState={
    allBlog:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=intialState,action)=>{
    switch(action.type){
        case Types.GET_ALLBLOGLIST_REQUEST:{
            return{
                ...state,
                isLoading:false
            }
        }
        case Types.GET_ALLBLOGLIST_SUCESS:{
            return{
                ...state,
                allBlog:action.payload,
                isLoading:true,

            }
        }
        case Types.GET_ALLBLOGLIST_FAILURE:{
            return{
                ...state,
            
                isLoading:false,
                isError:false

            }
        }
        default:
            return state;
    }
}