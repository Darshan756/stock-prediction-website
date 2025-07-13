import React from 'react'
//components
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>
        <div>
            <Button className='btn btn-outline-info' url="/login" >Login</Button>
            &nbsp;
            <Button className='btn btn-info' url='/register'>Register</Button>
        </div>
      </nav>
    </>
  )
}

export default Header