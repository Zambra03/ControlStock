import React from 'react'
import MyInput from '../MyProps/MyInput'
const MyRegister = () => {
  return (
    <>
    <div className='input-box'>
      <i className='bx bx-user'></i>
      <MyInput label="Username" type="username" name="Username"/>
    </div>
    <div className='input-box'>
      <i className='bx bx-envelope' ></i>
      <MyInput label="Email" type="text" name="Email"/>
    </div>
    <div className='input-box'>
      <i className='bx bx-lock-alt'></i>
      <MyInput label="Password" type="password" name="Password"/>
    </div>
    <div className='input-box'>
      <i className='bx bx-lock-alt'></i>
      <MyInput label="Confirm Password" type="password" name="Confirm Password"/>
    </div>
    <div className='button-box'>
      <MyInput type="submit" value="Continue" className="btn"/>
    </div>
    </>
  )
}

export default MyRegister
