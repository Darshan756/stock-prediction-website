import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Button from './components/Button'
import './App.css'

function App() {
  const [stockPrice,setStockPrice] = useState({stock:'' , price:''})
  const stock = useRef()
  const price = useRef()
function handleClick(){
  setStockPrice({stock:stock.current.value , price:price.current.value})
}
  return (
    <>
         <Header />
         <Button />
         <hr />
          <input ref={stock} type="text" style={{marginRight:'5px'}} />
          <input ref={price} type="text"  style={{marginRight:'5px'}} />

          <button onClick={handleClick}>set stock</button>
          <p>{ `Stock: ${stockPrice.stock} Price:${stockPrice.price}` }</p>

    </>
  )
}

export default App
