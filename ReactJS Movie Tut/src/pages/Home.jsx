import FootballCard from "../components/football-card";
import { useState , useEffect, use} from "react";
import Navbar from "../components/navbar";
import '../css/Home.css'
import { getTeamFromLeage } from "../services/api";

function Home( {currentLeague}) {
    const [searchQuery, setSearchQuery] = useState('')
    const [englishTeams, setEngTeams] = useState([])
    const engTeamsLoop = []

    const [error, setErr] = useState(null);
    const [loading, setLoading] = useState(true);

/*   const teams = [
    { id: 1, title: "FC Barcelona", league: "La Liga" },
    { id: 2, title: "Real Madrid", league: "La Liga" },
    { id: 3, title: "Man Utd", league: "Premiere League" },
    { id: 4, title: "PSG", league: "Ligue 1" },
  ]; */

  const loadTeams = async (loadLeague) => {
    try{
      setLoading(true)
      const result = await getTeamFromLeage(loadLeague);
      for (let index = 0; index < result.teams.length; index++) {
        let thisTeam =result.teams[index];
        engTeamsLoop.push({id: index, title: thisTeam.strTeam, league: thisTeam.strLeague, url: thisTeam.strBadge, web: thisTeam.strWebsite})
      }
      setEngTeams(engTeamsLoop)
    } catch (err) {
      console.log(err)
      setErr('Failed to load teams')
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() =>{
    loadTeams(currentLeague)
  }, [currentLeague])

  
  function SearchForm(e){
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery('')
  }


  return <div className="home">
      <form onSubmit={SearchForm} className="search-form">
        <input 
        type="text" 
        placeholder="Search for team" 
        className="search-input" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>

        <button type="Submit" className="search-button">Submit</button>
      </form>

      <div className="movies-grid">
      {loading ? (
          <div className="loading">Loading...</div>
        ) : 
        (englishTeams.map(team => (
          team.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&  <FootballCard team={team} key={team.id}/>
            )
          )
        )
      }
      {error != null && (<div className="error-message">{error}</div>)}
      </div>
    </div>
}

export default Home
