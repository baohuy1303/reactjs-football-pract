import { useParams, useLocation} from "react-router-dom"
import '../css/TeamInfo.css'
import DropDownInfo from "../components/dropdown-info";
import { useState, useEffect } from "react";

function TeamInfo (){
    const { state } = useLocation();
    const team = state.team;


    const [error, setErr] = useState(null);
    const [loading, setLoading] = useState(true);
    const [venueInfo, setVenue] = useState({})

    const getVenueInfo = async () =>{
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupvenue.php?id=${team.venueID}`);
        const result = await response.json()
        return result;
    };

    const loadVenue = async () => {
        try{
          setLoading(true)
          const result = await getVenueInfo();
          let thisVenue = result.venues[0];
          let ThisvenueInfo = {
            id: team.venueID,
            name: thisVenue.strVenue,
            text: thisVenue.strDescriptionEN,
            logo: thisVenue.strThumb,
            img1: thisVenue.strFanart1,
            img2: thisVenue.strFanart2,
            capacity: thisVenue.intCapacity
          }
          setVenue(ThisvenueInfo)
        } catch (err) {
          console.log(err)
          setErr('Failed to load stadium')
        }
        finally{
          setLoading(false)
        }
      }

      useEffect(() =>{
        loadVenue()
      }, [])

    
    return <div>
        <h1 style={{textAlign: "center"}}>{team.title}</h1>
        <div className="club-des-wrap">
            <div className="club-imgs-wrap">            
                <img src={`${team.url}`} alt={team.title}/>
                <img src={`${team.img1}`} alt={team.title}/>
                <img src={`${team.img2}`} alt={team.title}/>
                <img src={`${venueInfo.logo}`} alt={team.title}/>
                <img src={`${venueInfo.img1}`} alt={team.title}/>
                <img src={`${venueInfo.img2}`} alt={team.title}/>
            </div>
            <div style={{width: '100%'}}>
                <DropDownInfo infos={{
                    title: 'General Team Description',
                    text: team.des
                }}/>
                <DropDownInfo infos={{
                    title: 'Stadium Info',
                    text: venueInfo.text,
                    error: error,
                    loading: loading
                }}/>
            </div>

        </div>
    </div>
}

export default TeamInfo