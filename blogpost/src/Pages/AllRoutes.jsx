import { Route, Routes } from "react-router-dom"
import { Login } from "./Login"
import { SignUp } from "./SignUp"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<SignUp/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}