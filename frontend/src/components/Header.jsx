import stockImg from '../assets/OIP.jpeg'

export default function Header(){
    return (<>
      <header id="header">
        <img src={stockImg} alt="" />
        <h1>Welcome to Stock Prediction </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam corrupti similique quae laborum impedit, molestias deleniti dignissimos delectus aperiam eum officia? Numquam nulla illum deserunt, molestias corrupti similique beatae!</p>
      </header>
     
    </>)
}