import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import GameImage from '../components/GameImage';
import InfoItems from "../components/InfoItems";
import TargetBox from '../components/TargetBox';
import Header from "../components/Header";
import Canvas from "../components/Canvas";

export default function GamePage() {
/*
    const { games, gameTimer, setGameTimer } = useOutletContext();
    const { gameKey } = useParams();
    const game = games.find((obj) => obj.key == gameKey);
    const [remainingItems, setRemainingItems] = useState(game.items);
    const [showTargetBox, setShowTargetBox] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [targetBoxLeft, setTargetBoxLeft] = useState(null);
    const [targetBoxTop, setTargetBoxTop] = useState(null);
    const [dropdownLeft, setDropdownLeft] = useState(null);
    const [dropdownTop, setDropdownTop] = useState(null);
    const [currentX, setCurrentX] = useState(null);
    const [currentY, setCurrentY] = useState(null);
    const [message, setMessage] = useState('');
    const [alertClass, setAlertClass] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertTimer, setAlertTimer] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [coordRange, setCoordRange] = useState(0);

    // Start or stop game timer
    useEffect(() => {
        const interval = setInterval(() => {
            setGameTimer(gameTimer + 1);
        }, 1000);

        if (isGameOver) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [gameTimer, setGameTimer, isGameOver]);

    // Convertir la coord en un placement en la imagen
    const convertToNat = (coord, dimension, natDimension) => {
        return Math.round((coord / dimension) * natDimension);
    }

    // Handle click on image
    const handleClick = (e) => {
        if (!showTargetBox) {
            // Display targetBox
            setShowTargetBox(true);
            setTargetBoxLeft(e.pageX - 40 + 'px');
            setTargetBoxTop(e.pageY - 40 + 'px');

            // Display dropdown
            setShowDropdown(true);

            // Convertir la coord x actual a placement en la imagen
            let natX = convertToNat(
                e.pageX - e.target.offsetLeft,
                e.target.width,
                e.target.naturalWidth,
            );
            setCurrentX(natX);

            // Si la coord esta en la mitad derecha de la pantalla, cambiar el posicionamiento del dropdown
            if (natX > e.target.naturalWidth / 2) {
                setDropdownLeft(e.pageX - 155 + 'px');
            } else {
                setDropdownLeft(e.pageX + 10 + 'px');
            }

            // Convertir la coord y actual a placement en la imagen
            let natY = convertToNat(
                e.pageY - e.target.offsetTop,
                e.target.height,
                e.target.naturalHeight,
            );
            setCurrentY(natY);

            // Convertir la coord de rango 35 a equivalent imagen
            let range = convertToNat(35, e.target.width, e.target.naturalWidth);
            setCoordRange(range);
        }
    }
*/
    return (
        <div className="game-page">
            <Canvas />
        </div>
    );
}