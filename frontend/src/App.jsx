//style
import './assets/css/style.css'

//hooks
import { useState } from 'react'


//routes
import { BrowserRouter,Routes,Route } from "react-router-dom"

//components
import Main from './components/Main'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  
    </>
  )
}

export default App
