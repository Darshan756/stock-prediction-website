import {useContext} from 'react'

//components
import Button from './Button'
import { AuthContext } from './AuthProvider'


const Main = () => {
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
return (
        <>
        
         <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perferendis corporis commodi alias, minima, at enim perspiciatis aperiam sint nam provident maxime vitae consequuntur explicabo? Vero quam eaque maiores. Fugit.</p>
                {isLoggedIn ? <Button className='btn btn-outline-warning' url='/dashboard'>Explore Now</Button>:  <Button className='btn btn-outline-info' url="/login" >Login</Button>}

            </div>

         </div>
        
        </>
  )
}

export default Main