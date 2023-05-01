import React from "react";
import Mylogin from "../components/MyLogin/Mylogin";
import MyForgotP from "../components/MyLogin/MyForgotP";
import Button from "../components/MyButton/Button";
import MyRegister from "../components/MyLogin/MyRegister";
import '../styles/Login.css'

const Login = () => {
    return(
        <div className="Login">
            <div className="Login-container">
                <form action="" >
                    <h1> Log in </h1>
                        <Mylogin />
                        <MyForgotP />
                        <Button />
                        <MyRegister />
                </form>
            </div>
        </div>
    );
}

export default Login;