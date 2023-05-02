import React from "react";
import Mylogin from "../components/MyLogin/Mylogin";
import MyForgotP from "../components/MyLogin/MyForgotP";
import ButtonLog from "../components/MyButton/ButtonLog";
import MyReg from "../components/MyLogin/MyReg";
import '../styles/Login.css'

const Login = () => {
    return(
        <div className="Login">
            <div className="Login-container">
                <form action="" >
                    <h1> Log in </h1>
                        <Mylogin />
                        <MyForgotP />
                        <ButtonLog />
                        <MyReg />
                </form>
            </div>
        </div>
    );
}

export default Login;