import { Route, Routes } from "react-router-dom"
import { BlogList } from "./BlogList"
import { DetailBlog } from "./DetailBlog"
import { EditPage } from "./EditPage"

import { Login } from "./Login"
import { MyBlog } from "./MyBlog"
import { PostBlogs } from "./PostBlogs"
import { SignUp } from "./SignUp";
import { ReqAuth } from "./ReqAuth"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<SignUp/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/allbloglist" element={<BlogList/>}></Route>
            <Route path="/detailblog/:id" element={<DetailBlog/>}></Route>
            <Route path="/myblog" element={
                <ReqAuth>
                     <MyBlog/>
                </ReqAuth>
           
            }></Route>
            <Route path="editpage/:id" element={<EditPage/>}></Route>
            <Route path="/postblogs" element={
                <ReqAuth>
                    <PostBlogs/>
                </ReqAuth>
            
            }></Route>
            

        </Routes>
    )
}