import { useState } from 'react'
import './css/App.css'
import FootballCard from './components/football-card'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Navbar from './components/navbar'

function App() {
  return (
    <div>
      <Navbar/>

      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </main>
    </div>
  );
}


export default App
