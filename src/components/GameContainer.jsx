import { Link, useNavigate, useOutletContext } from "react-router-dom";
import GameImage from "./GameImage";

import './styles/GameContainer.css';

export default function GameContainer() {
    const { setGameTimer } = useOutletContext();

    return (
    <div className="game-container">
        <div className="" >
            <div className="game-img">
                <GameImage />
            </div>
            <div className="game-text">
                <Link to="/game" onClick={() => setGameTimer(0)}>
                    Jugar
                </Link>
            </div>
        </div>
    </div>
    );
}