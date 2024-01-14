import './styles/EndPopup.css';

export default function EndPopup({ game, gameTimer }) {
    const hrs = Math.floor(gameTimer / 3600);
    const mins = Math.floor((gameTimer % 3600) / 60);
    const secs = Math.floor(gameTimer) % 60;

    let time = '';

    if (hrs > 0) {
        time += '' + hrs + 'h ';
    }

    if (mins > 0) {
        time += '' + mins + 'm ';
    }

    time += '' + secs + 's';

    return (
        <div className="popup-container">
            <div className="blocker"></div>
            <div className="end-container">
                <div className="end-popup">
                    <p className="timer-text">{'Terminaste en ' + time + '!'}</p>
                    <p>Subi tu tiempo a la tabla de puntuaciones</p>
                    {
                        //<EntryForm game={game} gameTimer={gameTimer} />
                    }
                </div>
            </div>
        </div>
    );
}