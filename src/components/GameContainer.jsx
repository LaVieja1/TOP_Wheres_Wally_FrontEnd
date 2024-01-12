import { Link, useNavigate, useOutletContext } from "react-router-dom";
import GameImage from "./GameImage";

import './styles/GameContainer.css';

export default function GameContainer() {
    return (
    <div className="game-container">
        <div className="" >
            <div className="game-img">
                <GameImage />
            </div>
            <div className="game-text">
                <Link to="/game">
                    Jugar
                </Link>
            </div>
        </div>
    </div>
    );
}