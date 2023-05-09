import React from 'react'

const MyButton = (button) => {
  const handlelogin=() => {
    console.log(useRef);
  }
  return (
    <>
    <button onClick={handlelogin}>{button.name}</button>
    </>
  )
}

export default MyButton;