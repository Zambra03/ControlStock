import React from 'react'

const Mytext = (text) => {
  return (
    <>
    <label htmlFor=""><input type={text.type} />{text.label}  <a href="#">{text.name}</a></label>
    </>
  )
}

export default Mytext