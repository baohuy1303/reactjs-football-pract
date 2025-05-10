import { useParams, useLocation} from "react-router-dom"

function TeamInfo (){
    const { state } = useLocation();
    const team = state.team;
    console.log(team)
    return <div>
        <h1>{team.title}</h1>
        <p>{team.des}</p>
    </div>
}

export default TeamInfo