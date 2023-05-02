import React from 'react'
import MyText from '../MyProps/MyText'

const MyForgotP = () => {
  return (
    <div className='forgot-password'>
        <MyText label="Remember me " type="checkbox" name="Forgot Password"/>
    </div>
  );
}

export default MyForgotP;