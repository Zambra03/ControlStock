import React from 'react'

const Mytext = (text) => {
  return (
    <>
    <label htmlFor=""><input type={text.type} />{text.label}  <a href="#">Forgot Password?</a></label>
    </>
  )
}

export default Mytext