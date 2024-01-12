import { useOutletContext } from "react-router-dom";
import GameContainer from "../components/GameContainer";
import Header from "../components/Header";

import '../components/styles/HomePage.css'

export default function HomePage() {
    //const { games } = useOutletContext();

    return (
        <div className="home-page">
            <h2>Juegos</h2>
            <GameContainer />
        </div>
    );
}