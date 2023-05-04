import React from 'react'
import ButtonBackLog from '../MyButton/ButtonBackLog'
import ButtonBackReg from '../MyButton/ButtonBackReg'
import '../../styles/BackComplete.css'
const BackLogin = () => {
  return (
    <div className='Caja-trasera'>
        <div className='Caja-trasera-login'>
            <h3>Already have an account?</h3>
            <p>Login to enter the page</p>
            <ButtonBackLog />
        </div>
        <div className='Caja-trasera-login'>
            <h3>Don't have an account yet?</h3>
            <p>Register so you can log in</p>
            <ButtonBackReg />
        </div>
    </div>
  )
}

export default BackLogin
