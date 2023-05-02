import React from 'react'
import MyAccount from '../components/MyRegister/MyAccount';
import Button from "../components/MyButton/ButtonLog";
import MyRegister from '../components/MyRegister/MyRegister';
import ButtonReg from '../components/MyButton/ButtonReg';
import '../styles/Register.css'
const Register = () => {
  return (
        <div className="container">
            <div className="Register-container">
                <form action="" >
                    <h1> Register </h1>
                        <MyRegister />
                        <MyAccount />
                </form>
            </div>
        </div>
  )
}

export default Register
