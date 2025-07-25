import { useState,useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const Login = () => {
const [userData, setUserData] = useState({ username: '', password: '' })
const [loading, setLoading] = useState(false)
const [error,setError] = useState('')
const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
const navigate = useNavigate()
function handleChange(e) {
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
const handleLogin = async (e) => {
   e.preventDefault();
   setLoading(true)
   try {
     const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
     localStorage.setItem('accessToken',response.data.access)
     localStorage.setItem('refreshToken',response.data.refresh)
     navigate('/dashboard')
     setError('')
     setIsLoggedIn(true)
     
   } catch (error) {
      setError('Invalid credentials')
   }finally{
    setLoading(false)
   }
}
 
  return (
    <div className='container'>
                    <div className='row justify-content-center bg-light-dark p-5 rounded'>
                        <div className='col-md-6'>
                            <h1 className='text-light text-center mb-4'>Login to our portal</h1>
                            <form action=""  onSubmit={handleLogin}>
                                <div className='mb-3' >
                                    <input type="text" className='form-control ' placeholder='Enter Username' name='username' onChange={handleChange} value={userData.username} />
                                </div>
                             
                                <div className='mb-4' >
                                    <input type="password" className='form-control ' placeholder='Set password' name='password' onChange={handleChange} value={userData.password} />
                                </div>
                                {error && <div className='text-danger'>{error}</div>}
                                {loading ?
                                    <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin />Logging in ...</button>
                                    : <button type='submit' className='btn btn-info d-block mx-auto' >Login</button>
                                }
    
                            </form>
                        </div>
                    </div>
                </div>
  )
}

export default Login