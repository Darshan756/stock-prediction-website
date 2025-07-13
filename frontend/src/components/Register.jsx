import {useState} from 'react'

const Register = () => {
const [userData,setUserData] = useState({username:'' , email:'' , password:''})
function handleChange(e){
  setUserData(prev => ({
     ...prev,
     [e.target.name] : e.target.value
  }))
}
const handleRegistration = (e) => {
    e.preventDefault();
     console.log(userData)
}


  return (
    <>
    <div className='container'>
        <div className='row justify-content-center bg-light-dark p-5 rounded'>
            <div className='col-md-6'>
                <h1 className='text-light text-center mb-4'>Create an Account</h1>
                <form action="" onSubmit={handleRegistration}>
                    <input type="text" className='form-control mb-3' placeholder='Enter Username' name='username' onChange={handleChange} value={userData.username}/>
                    <input type="email" className='form-control mb-3' placeholder='Enter email address' name='email' onChange={handleChange} value={userData.email}/>
                    <input type="password" className='form-control mb-5' placeholder='Set password'name='password' onChange={handleChange} value={userData.password}/>
                    <button type='submit' className='btn btn-info d-block mx-auto' >Register</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register