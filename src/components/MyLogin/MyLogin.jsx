import React from 'react'
import MyInput from '../MyProps/MyInput';
const MyLogin = () => {
  return (
    <>
    <div className='inputbox'>
      <i class='bx bx-user-circle'></i>
      <MyInput label="Username:" type="username" />
    </div>
    <div className='inputbox'>
      <i class='bx bx-lock-open-alt'></i>
      <MyInput label="Password:" type="password" />
    </div>
    </>
  );
}

export default MyLogin;
