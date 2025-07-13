import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



const Register = () => {
    const [userData, setUserData] = useState({ username: '', email: '', password: '' })
    const [errors, setErrors] = useState({})
    const [success, setsuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    function handleChange(e) {
        setUserData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleRegistration = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            setErrors({})
            setsuccess(true)

        } catch (error) {
            setErrors(error.response.data)
            console.error('Registration error', error.response.data)
            setsuccess('')
        } finally {
            setLoading(false)
        }
    }



    return (
        <>
            <div className='container'>
                <div className='row justify-content-center bg-light-dark p-5 rounded'>
                    <div className='col-md-6'>
                        <h1 className='text-light text-center mb-4'>Create an Account</h1>
                        <form action="" onSubmit={handleRegistration}>
                            <div className='mb-3' >
                                <input type="text" className='form-control ' placeholder='Enter Username' name='username' onChange={handleChange} value={userData.username} />
                                <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                            </div>
                            <div className='mb-3' >
                                <input type="email" className='form-control ' placeholder='Enter email address' name='email' onChange={handleChange} value={userData.email} />

                            </div>
                            <div className='mb-4' >
                                <input type="password" className='form-control ' placeholder='Set password' name='password' onChange={handleChange} value={userData.password} />
                                <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                            </div>
                            <small>{success && <div className='alert alert-success'>Resgistration Successfull!</div>}</small>
                            {loading ?
                                <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin />Pleas wait ...</button>
                                : <button type='submit' className='btn btn-info d-block mx-auto' >Register</button>
                            }

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register