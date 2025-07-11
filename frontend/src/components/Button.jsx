import {useState} from 'react'

const Button = () => {
  const [isGreeting,setGreeting] = useState(false)
  const handleClick = () => { 
    
    setGreeting((prevState) => prevState ? false : true ) 
  }
  return (
    <>
    <button onClick={handleClick}>Click Me</button>
      <p >{isGreeting ? "Welcome to react + django course" :  ''}</p>

    </>
  )
}

export default Button