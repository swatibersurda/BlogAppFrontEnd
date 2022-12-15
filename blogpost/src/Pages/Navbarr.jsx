import { Link, useNavigate } from "react-router-dom";
import "./navbarr.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { logOut } from "../Redux/AuthReducer/action";

export const Navbarr = () => {
  const [Mobile, setMobile] = useState(false);
  const {tokenData,isAuth}=useSelector((state)=>state.AuthReducer);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLog=()=>{
    if(isAuth){
      dispatch(logOut())
    }
    else{
      navigate("/login",{replace:true})
    }
  }
 
  return (
    <nav className="navbar">
      {/* <div className="container"> */}
      <h3 className="logo">SBBlog</h3>
      <ul
        className={Mobile ? "nav-link-mobile" : "nav-link"}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          <li>Blogs</li>
        </Link>
        <Link to="/postblogs">
          <li>AddBlog</li>
        </Link>
        <Link to="/myblog">
          <li>MyBlog</li>
        </Link>
        <li>
          <button className="login"
           onClick={handleLog}>{isAuth?"SignOut":"SignIn"}</button>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};
