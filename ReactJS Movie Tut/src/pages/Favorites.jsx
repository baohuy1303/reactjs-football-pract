import '../css/Favorites.css'
import '../css/Home.css'
import FootballCard from '../components/football-card'
import { useTeamContext } from '../contexts/TeamContext';
import { useState , useEffect, use} from "react";

function Favorites(){

    const {favorites} = useTeamContext();
    const [searchQuery, setSearchQuery] = useState('')

    return <div>
        <h2 style={{textAlign: 'center', paddingBottom: '2rem'}}>Your Favorite Teams</h2>
        <form className="search-form">
        <input 
        type="text" 
        placeholder="Search for your Favorite Team" 
        className="search-input" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>

        {/* <button type="Submit" className="search-button">Submit</button> */}
       
        </form>

        {favorites.length != 0 ? (
            <>
            <div className='movies-grid'>
                {favorites.map(team => (
                    team.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&  <FootballCard team={team} key={team.id}/>
                ))}
            </div>
            </>) : 
        (<div className="favorites-empty">
            <h2>No favorite team yet</h2>
            <p>Add a favorite team to the list and it will show up</p>
        </div>)
        }

    </div>
}

export default Favorites