import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";
import GameContainer from "../components/GameContainer";
import LeaderboardEntries from "../components/LeaderboardEntries";

import '../components/styles/LeaderboardPage.css';

export default function LeaderboardPage() {
    const { games, setLastlbKey } = useOutletContext();
    const { lbKey } = useParams();
    const lbGame = games.find((obj) => obj.key == lbKey);

    useEffect(() => {
        setLastlbKey(lbKey);
    });

    return (
        <div className="leaderboard-page">
            <h2 className="lb-title">Tabla de puntuaciones</h2>
            <GameContainer page="leaderboard" games={games} lbGame={lbGame} />
            <LeaderboardEntries lbGame={lbGame} />
        </div>
    );
}