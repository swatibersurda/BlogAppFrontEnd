import * as Types from "./actionTypes";
const intialState={
    isLoading:false,
    isError:false,
    tokenData:{},
    isAuth:false
}

export const reducer=(state=intialState,action)=>{
    switch(action.type){
        case Types.USER_POST_SIGNIN_REQUEST:{
            return{
                ...state,
                isLoading:true
            }
        }
        case Types.USER_POST_SIGNIN_SUCESS:{
            return{
                ...state,
                isLoading:false,
                tokenData:action.payload,
                isAuth:true
            }
        }
        case Types.USER_POST_SIGNIN_FAILURE:{
            return{
                ...state,
                isError:true,
                isAuth:false

            }
        }
        case Types.LOGOUT_USER:{
            return{
                ...state,
                tokenData:{},
                isAuth:false
            }
        }
        default:
            return state;
    }
}