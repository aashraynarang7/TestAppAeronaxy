import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className="container" style={{width:"430px"}}>
      <div><h1 className='upper'>which describes you best?</h1></div>
      <br />
      <div>
      <h3 className='lower'>This will Help us personlize your experience.</h3>
      </div>
    </div>  )
}

export default Header