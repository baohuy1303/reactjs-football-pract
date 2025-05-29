import { useState , useEffect} from "react";
import '../css/Hero.css'


function LeagueHero(currentLeague){
const [league, setLeague] = useState({})

useEffect(()=>{
    if (!currentLeague) return;

    let leagueState = {};
    switch (currentLeague.value.leagueID) {
        case '4328':
            leagueState = { name: 'Premiere League', imgSrc: "/premier-league-new-seeklogo.png", des: 'The Premier League is a professional association football league in England and the highest level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). Seasons usually run from August to May, with each team playing 38 matches: two against each other team, one home and one away. Most games are played on weekend afternoons, with occasional weekday evening fixtures.'};
            break;
        case '4335':
            leagueState = { name: 'La Liga', imgSrc: "/laliga-seeklogo.png", des:"The Campeonato Nacional de Liga de Primera División, commonly known as the Primera División or La Liga, and officially known as LaLiga EA Sports for sponsorship reasons, is a professional association football league in Spain and the highest level of the Spanish football league system. It is controlled by the Liga Nacional de Fútbol Profesional and it is contested by 20 teams over a 38-matchday period."};
            break;
        case '4332':
            leagueState = { name: 'Serie A', imgSrc: "/serie-a-tim-liga-italiana-seeklogo.png", des:'The Serie A, officially known as Serie A Enilive in Italy and Serie A Made in Italy abroad for sponsorship reasons, is a professional association football league in Italy and the highest level of the Italian football league system.' };
            break;
        case '4331':
            leagueState = { name: 'Bundesliga', imgSrc: "/bundesliga-seeklogo.png", des:'The Bundesliga, sometimes referred to as the Fußball-Bundesliga or 1. Bundesliga, is a professional association football league in Germany and the highest level of the German football league system. The Bundesliga comprises 18 teams and operates on a system of promotion and relegation with the 2.' };
            break;
        case '4334':
            leagueState = { name: 'Ligue 1', imgSrc: "/ligue-1-uber-eats-seeklogo.png", des:'Ligue 1 (or League 1), officially known as Ligue 1 McDonald\'s for sponsorship reasons, is a professional association football league in France and the highest level of the French football league system. Administered by the Ligue de Football Professionnel, Ligue 1 is contested by 18 clubs and operates on a system of promotion and relegation from and to Ligue 2.' };
            break;
    }
    setLeague(leagueState)
}, [currentLeague])

    return <div>
        {
            (currentLeague.length != 0) && (        
            <div className="container">
                <div className="names">
                    <h1>{league.name}</h1>
                    <p>{league.des}</p>
                </div>
                
                <img src={process.env.VITE_BASE_PATH + league.imgSrc} alt="Premier League Logo" />
            </div>)
        }

    </div>
}

export default LeagueHero