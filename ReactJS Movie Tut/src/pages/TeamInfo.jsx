import { useParams, useLocation, useFetcher} from "react-router-dom"
import '../css/TeamInfo.css'
import DropDownInfo from "../components/dropdown-info";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function TeamInfo (){
    const { state } = useLocation();
    const team = state.team;
    const socialSize = '2x';


    const [error, setErr] = useState(null);
    const [loading, setLoading] = useState(true);
    const [venueInfo, setVenue] = useState({});
    const [prevMatches, setMatches] = useState([]);
    const [standings, setStand] = useState([]);

    const getVenueInfo = async () =>{
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupvenue.php?id=${team.venueID}`);
        const result = await response.json()
        return result;
    };

    const getMatchesInfo = async () =>{
      const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${team.id}`);
      const result = await response.json()
      return result;
  };

    const loadVenueMatch = async () => {
        try{
          setLoading(true)
          const venueResult = await getVenueInfo();
          const matchesResult = await getMatchesInfo();
          let thisVenue = venueResult.venues[0];
          let thisMatches = matchesResult.results;
          let ThisvenueInfo = {
            id: team.venueID,
            name: thisVenue.strVenue,
            text: thisVenue.strDescriptionEN,
            logo: thisVenue.strThumb,
            img1: thisVenue.strFanart1,
            img2: thisVenue.strFanart2,
            capacity: thisVenue.intCapacity,
          }
          setVenue(ThisvenueInfo)
          setMatches(thisMatches)
        } catch (err) {
          console.log(err)
          setErr('Failed to load stadium')
        }
        finally{
          setLoading(false)
        }
      }

      useEffect(() =>{
        loadVenueMatch();
      }, [])


    const LoadLeagueStand = async () => {
      if (prevMatches.length === 0) return;

      try{
        setLoading(true)
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${team.leagueID}&s=${prevMatches[0].strSeason}`);
        const result = await response.json()
        setStand(result.table)
      }catch (err) {
        console.log(err)
        setErr('Failed to load league')
      }
      finally{
        setLoading(false)
      }
    }

    useEffect(() =>{
      LoadLeagueStand();
    }, [prevMatches]) 

    console.log(standings)


    return <div>
        <h1 style={{textAlign: "center"}}>{team.title}</h1>
        <div className="social-medias">
          <a href={`https://${team.web}`} target="_blank"><FontAwesomeIcon icon={faGlobe} size={socialSize} /></a>
          <a href={`https://${team.fb}`} target="_blank"><FontAwesomeIcon icon={faFacebook} size={socialSize} /></a>
          <a href={`https://${team.twitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} size={socialSize} /></a>
          <a href={`https://${team.ig}`} target="_blank"><FontAwesomeIcon icon={faInstagram}  size={socialSize}/></a>
        </div>
        <div className="club-des-wrap">
            <div className="club-imgs-wrap">            
                <img src={`${team.url}`} alt={team.title}/>
                <img src={`${team.img1}`} alt={team.title}/>
                <img src={`${team.img2}`} alt={team.title}/>
                <img src={`${team.kit}`} alt={team.title}/>
                <img src={`${venueInfo.logo}`} alt={team.title}/>
                <img src={`${venueInfo.img1}`} alt={team.title}/>
                <img src={`${venueInfo.img2}`} alt={team.title}/>
            </div>
            <div style={{width: '100%'}}>
                <DropDownInfo infos={{
                    title: 'General Team Description',
                    text: team.des,
                }}/>
                <DropDownInfo infos={{
                    title: 'Stadium Info',
                    text: (`${venueInfo.text} Stadium Capacity: ${venueInfo.capacity}`),
                    error: error,
                    loading: loading,
                }}/>
                <DropDownInfo infos={{
                    title: 'Lastest Results',
                    text: team.des,
                    error: error,
                    loading: loading,
                    results: prevMatches
                }}/>
                <DropDownInfo infos={{
                    title: 'League Standing',
                    text: team.des,
                    error: error,
                    loading: loading,
                    league: standings
                }}/>
            </div>

        </div>
    </div>
}

export default TeamInfo