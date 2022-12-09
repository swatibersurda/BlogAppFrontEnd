import { Route, Routes } from "react-router-dom"
import { BlogList } from "./BlogList"
import { Login } from "./Login"
import { SignUp } from "./SignUp"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<SignUp/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/allbloglist" element={<BlogList/>}></Route>

        </Routes>
    )
}