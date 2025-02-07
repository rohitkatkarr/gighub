import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import {ToastContainer} from 'react-toastify';


const App = () => {
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/email-verify' element={<EmailVerify/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App;