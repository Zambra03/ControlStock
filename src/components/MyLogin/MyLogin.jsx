import React from 'react'
import MyInput from '../MyProps/MyInput';
const Mylogin = () => {
  return (
    <>
    <div className='inputbox'>
      <MyInput label="Username:" type="username" />
    </div>
    <div className='inputbox'>
      <MyInput label="Password:" type="password" />
    </div>
    </>
  );
}

export default Mylogin;
