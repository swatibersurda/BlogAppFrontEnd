import { Route, Routes } from "react-router-dom"
import { BlogList } from "./BlogList"
import { DetailBlog } from "./DetailBlog"
import { Login } from "./Login"
import { MyBlog } from "./MyBlog"
import { SignUp } from "./SignUp"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<SignUp/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/allbloglist" element={<BlogList/>}></Route>
            <Route path="/detailblog/:id" element={<DetailBlog/>}></Route>
            <Route path="/myblog" element={<MyBlog/>}></Route>

        </Routes>
    )
}