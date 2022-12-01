import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeBody from './components/HeaderBar/HomeBody'
import Home from './routes/Home'
import Inscription from './routes/Inscription'
import Promotion from './routes/Promotion'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Navigate to="/home"/>}/>
          <Route path="home" element={<HomeBody/>}/>
          <Route path="promotion" element={<Promotion/>}/>
          <Route path="inscription" element={<Inscription/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
