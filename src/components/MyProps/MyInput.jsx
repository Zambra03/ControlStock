import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return (
    <div>
      <input type={props.type} ref={ref} {...props} required/>
      <label htmlFor="" >{props.label} </label>
    </div>
  );
});

export default MyInput;