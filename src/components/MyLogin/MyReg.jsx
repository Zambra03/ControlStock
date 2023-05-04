import React from 'react'
import { Link } from 'react-router-dom'

const MyReg = () => {
  return (
    <div className='register'>
        <p>Don't have account <Link to="/register">Sign up</Link></p>
    </div>
  )
}

export default MyReg