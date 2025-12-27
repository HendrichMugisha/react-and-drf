import { useState } from 'react'
import './assets/css/style.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
// import App.css from './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Main/>
     <Footer/>
    </>
  )
}

export default App
