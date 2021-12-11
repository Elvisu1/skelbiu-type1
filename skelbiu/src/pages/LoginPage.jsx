import React from "react";
import Login from "../component/Login";
import Navbar from "../component/Navbar";

function LoginPage(){
    return(
        <div style={{height:'1000px', backgroundColor:'white'}}>

            <Navbar/>
            <Login/>
        </div>

    )
}
export default LoginPage
