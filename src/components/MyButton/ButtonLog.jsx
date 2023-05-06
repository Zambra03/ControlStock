import React from 'react'
import { Link } from 'react-router-dom';

const ButtonLog = () => {
  return (
    <div>
      <Link to="/home" className="button">Log in</Link>
    </div>
  )
}

export default ButtonLog;