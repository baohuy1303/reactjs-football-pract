import '../css/MovieCard.css'

function FootballCard({team}){
    
    function onTeamClick(){
        alert("favorited")
        let link = team.web;
        if(!team.web.startsWith('http')){
            link = `https://${team.web}`
        }
        window.open(link)
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`${team.url}`} alt={team.title}/>
                <div className="movie-overlay" onClick={() => onTeamClick()}>
                    <button className="favorite-btn" onClick={() => onFavorClick()}>♡</button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{team.title}</h3>
                <h3>{team.league}</h3>
            </div>
        </div>
    )
}

export default FootballCard