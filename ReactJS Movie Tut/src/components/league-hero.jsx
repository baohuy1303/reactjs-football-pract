import { useState , useEffect} from "react";

function LeagueHero(currentLeague){
const [league, setLeague] = useState({})

useEffect(()=>{
    if (!currentLeague) return;

    let leagueState = {}
    if(currentLeague.value.leagueID == 4328){
        leagueState = {name: 'Premiere League'}
    }
    setLeague(leagueState)
}, [currentLeague])

    return <div>
        {
            (currentLeague.length != 0) && (        
            <div className="container">
                <h1>{league.name}</h1>
                <img src='' alt="" />
            </div>)
        }

    </div>
}

export default LeagueHero