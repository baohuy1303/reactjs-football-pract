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

            
            {isOpened && !infos.results &&
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
                        <div className='matches'>
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
        </div>
    );
}

export default DropDownInfo;
