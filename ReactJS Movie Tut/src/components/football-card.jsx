import '../css/MovieCard.css'
import { useTeamContext } from '../contexts/TeamContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from 'react-router-dom'
import TeamInfo from '../pages/TeamInfo';

function FootballCard({team}){
    //grab or hook all the state and funcs we need
    const {favorites, removeFromFav, isFavorite, addToFavTeam} = useTeamContext()
    const favorite = isFavorite(team.id)
    const navigate = useNavigate()

    function onTeamClick(){
        navigate(`/${team.id}`, { state: { team } })
    }
        

    function onFavorClick(e){

        if (favorite){
            removeFromFav(team.id)
        }else{
            addToFavTeam(team)
        }
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`${team.url}`} alt={team.title}/>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={() => onFavorClick()}>♡</button>
                </div>
            </div>

            <div className="movie-info">
                <div className='info-wrap'>
                <h3>{team.title}</h3>
                <p>{team.league}</p>
                </div>
                <button className='more-info' onClick={() => onTeamClick()}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
            </div>
        </div>
    )
}

export default FootballCard