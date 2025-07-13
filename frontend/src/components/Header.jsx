import React from 'react'

//components
import Button from './Button'

const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className='navbar-brand text-light' href="">Stock Prediction Portal</a>
        <div>
            <Button className='btn btn-outline-info' href="">Login</Button>
            &nbsp;
            <Button className='btn btn-info' href="">Register</Button>
        </div>
      </nav>
    </>
  )
}

export default Header