import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login from './pages/Login'
import Account from './pages/Account'
import Signup from './pages/Signup'

function App() {
  return (
    <>
    <AuthContextProvider>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<Account/>}/>
     </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
