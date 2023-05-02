import React from 'react'

const MyInput = (props) => {
  return (
    <>
    <input type={props.type} name={props.name} value={props.value} className={props.className} required/>
    <label htmlFor="" >{props.label} </label>
    </>
  );
}

export default MyInput;
