import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons';

function DropDownInfo({ infos }) {
    const [isOpened, setOpened] = useState(false);

    function OpenDrop() {
        setOpened(!isOpened);
    }

    return (
        <div style={{ paddingTop: '2%' }}>
            <button className="openSec" onClick={() => OpenDrop()}>
                {infos.title}   { isOpened ? <FontAwesomeIcon icon={faCaretUp}/> : (<FontAwesomeIcon icon={faCaretDown}/>)}
            </button>

            
            {isOpened && !infos.results && !infos.league &&
                (infos.loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <p className="info-text">{infos.text}</p>
                ))}
            {infos.error != null && (
                <div className="error-message">{infos.error}</div>
            )}

            {isOpened && infos.results &&
                (infos.loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    infos.results.map((match) =>(
                        <div className='matches' key={match.idEvent}>
                            <div className='leagueLogo'>
                            <img src={match.strLeagueBadge} alt="" />
                            </div>

                            <div className='matches-results'>
                            <img src={match.strHomeTeamBadge} alt="" />
                            <p>{`${match.strHomeTeam} ${match.intHomeScore} - ${match.intAwayScore} ${match.strAwayTeam}`}</p>
                            <img src={match.strAwayTeamBadge} alt="" />
                            <p>{match.dateEvent}</p>
                            </div>

                            <a href={`${match.strVideo}`} target="_blank"><FontAwesomeIcon icon={faYoutube} size='2x'/></a>
                        
                        </div>
                    ))
                ))}
            {infos.error != null && (
                <div className="error-message">{infos.error}</div>
            )}

            {isOpened && infos.league &&
                (infos.loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    infos.league.map((team) =>(
                        <div className={`matches league ${team.idTeam === infos.teamID && 'current-team'}`} key={team.idStanding}>
                            <div className='leagueLogo'>
                            <p>{team.intRank}</p>
                            </div>

                            <div className='matches-results'>
                            <img src={team.strBadge} alt="" />
                            <p>{`${team.strTeam} P: ${team.intPoints} W: ${team.intWin} L: ${team.intLoss}`}</p>
                            </div>

                            <p>{team.strForm}</p>
                        
                        </div>
                    ))
                ))}
        </div>
    );
}

export default DropDownInfo;
