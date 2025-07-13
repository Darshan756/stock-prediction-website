//style
import './assets/css/style.css'

//hooks
import { useState } from 'react'

//components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <Main />
      <Footer />
  
    </>
  )
}

export default App
