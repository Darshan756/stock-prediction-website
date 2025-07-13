import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,className,url}) => {
  return (
    <>
     <Link className={className} to={url}>{children}</Link>
     </>
  )
}

export default Button