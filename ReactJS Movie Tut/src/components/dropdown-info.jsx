import { useState } from 'react';

function DropDownInfo({ infos }) {
    const [isOpened, setOpened] = useState(false);

    function OpenDrop() {
        setOpened(!isOpened);
    }

    return (
        <div style={{ paddingTop: '2%' }}>
            <button className="openSec" onClick={() => OpenDrop()}>
                {infos.title}
            </button>
            {isOpened &&
                (infos.loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <p className="info-text">{infos.text}</p>
                ))}
            {infos.error != null && (
                <div className="error-message">{infos.error}</div>
            )}
        </div>
    );
}

export default DropDownInfo;
