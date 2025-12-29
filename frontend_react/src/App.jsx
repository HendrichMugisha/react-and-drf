import { useState } from 'react'
import './assets/css/style.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

// import App.css from './App.css'
import AuthProvider from './AuthProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* this is the provider */}
    <AuthProvider>

      
    {/* this is the browser router */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* this is the main page */}
          <Route path='/' element={<Main />}></Route>

          {/* this is the register one */}
          <Route path='/register' element={<Register />}></Route>

          {/* this is the login page */}
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </AuthProvider>


    </>
  )
}

export default App
