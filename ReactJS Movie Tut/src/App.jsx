import { useState } from 'react'
import './css/App.css'
import FootballCard from './components/football-card'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Navbar from './components/navbar'
import { TeamProvider } from './contexts/TeamContext'
import TeamInfo from './pages/TeamInfo'


function App() {
  return (
    //can now access anything that this teamProvider gives
    <TeamProvider>
      <Navbar/>

      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home currentLeague={'search_all_teams.php?l=English%20Premier%20League'}/>}/>
          <Route path='/laliga' element={<Home currentLeague={'search_all_teams.php?l=Spanish%20La%20Liga'}/>}/>
          <Route path='/seriea' element={<Home currentLeague={'search_all_teams.php?l=Italian%20Serie%20A'}/>}/>
          <Route path='/bundesliga' element={<Home currentLeague={'search_all_teams.php?l=German%20Bundesliga'}/>}/>
          <Route path='/ligue1' element={<Home currentLeague={'search_all_teams.php?l=French%20Ligue%201'}/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path=':id' element={<TeamInfo/>}/>
        </Routes>
      </main>
    </TeamProvider>
  );
}


export default App
