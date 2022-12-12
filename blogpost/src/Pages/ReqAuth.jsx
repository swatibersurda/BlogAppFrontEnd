import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export const ReqAuth=({children})=>{
    const isAuth=useSelector((state)=>state.AuthReducer.isAuth)
    const location=useLocation();
    if(!isAuth)
    {
     return   <Navigate to={"/signup"} replace={true} state={{from:location}}/>
    }
    return children;
}