import {useContext} from 'react'
//components
import Button from './Button'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const Header = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();
 
  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
   
  }
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>
        <div>{isLoggedIn ? (
          <>
            <Button className='btn btn-info m-2 ' url='/dashboard'>dashboard</Button>
            <button className='btn btn-danger ' onClick={handleLogout}>Logout</button>
          </>
        )
          : (
          <>
            <Button className='btn btn-outline-info' url="/login" >Login</Button>
            &nbsp;
            <Button className='btn btn-info' url='/register'>Register</Button>
            </>
        )}
        </div>
      </nav>
    </>
  )
}

export default Header