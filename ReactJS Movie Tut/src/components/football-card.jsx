import '../css/MovieCard.css'
import { useTeamContext } from '../contexts/TeamContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function FootballCard({team}){
    //grab or hook all the state and funcs we need
    const {favorites, removeFromFav, isFavorite, addToFavTeam} = useTeamContext()
    const favorite = isFavorite(team.id)

    function onTeamClick(){
        let link = team.web;
        if(!team.web.startsWith('http')){
            link = `https://${team.web}`
        }
        window.open(link)
    }

    function onFavorClick(e){

        if (favorite){
            removeFromFav(team.id)
        }else{
            addToFavTeam(team)
            alert("favorited")
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