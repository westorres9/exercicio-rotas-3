import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderBar from './components/HeaderBar'
import HomeBody from './components/HeaderBar/HomeBody'
import Home from './routes/Home'
import Inscription from './routes/Inscription'
import Promotion from './routes/Promotion'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<HomeBody/>}/>
          <Route path="promotion" element={<Promotion/>}/>
          <Route path="inscription" element={<Inscription/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
