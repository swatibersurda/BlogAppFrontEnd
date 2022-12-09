import * as Types from "./actionTypes";
const intialState={
    isLoading:false,
    isError:false,
    token:{}
}

export const reducer=(state=intialState,action)=>{
    switch(action.type){
        case Types.USER_POST_SIGNIN_REQUEST:{
            return{
                ...state,
                isLoading:false
            }
        }
        case Types.USER_POST_SIGNIN_SUCESS:{
            return{
                ...state,
                isLoading:false,
                token:action.payload
            }
        }
        case Types.USER_POST_SIGNIN_FAILURE:{
            return{
                ...state,
                isError:true

            }
        }
        default:
            return state;
    }
}