import React from 'react'

const MyInput = (props) => {
  return (
    <>
    <input type={props.type} required />
    <label htmlFor="" >{props.label} </label>
    </>
  );
}

export default MyInput;
