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
import AuthProvider from './components/AuthProvider'



function App() {


  return (
    <>

      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App
