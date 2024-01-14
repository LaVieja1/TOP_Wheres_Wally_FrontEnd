import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import GameImage from '../components/GameImage';
import InfoItems from "../components/InfoItems";
import TargetBox from '../components/TargetBox';
//import Canvas from "../components/Canvas";
import EndPopup from "../components/EndPopup";

// STYLE
import '../components/styles/GamePage.css'

export default function GamePage() {
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

            // Cambiar el lugar del dropdown dependiendo la cantidad de items y location de la pantalla
            switch (remainingItems.length) {
                case 3:
                    if (natY > e.target.naturalHeight / 2) {
                        setDropdownTop(e.pageY - 325 + 64 + 64 + 'px');
                    } else {
                        setDropdownTop(e.pageY + 10 + 'px');
                    }
                    break;
                case 2:
                    if(natY > e.target.naturalHeight / 2) {
                        setDropdownTop(e.pageY - 325 + 64 + 64 + 64 + 'px');
                    } else {
                        setDropdownTop(e.pageY + 10 + 'px');
                    }
                    break;
                case 1:
                    if (natY > e.target.naturalHeight / 2) {
                        setDropdownTop(e.pageY - 325 + 64 + 64 + 64 + 64 + 'px');
                    } else {
                        setDropdownTop(e.pageY + 10 + 'px');
                    }
                    break;
            }
        } else {
            // Esconder targetBox y dropdown si ya estan a la vista cuando clickeas
            hideTargetBox();
        }
    };

    // Esconder targetBox y dropdown
    const hideTargetBox = () => {
        setShowTargetBox(false);
        setShowDropdown(false);
    };

    // Esconder targetBox y dropdown cuando la ventana cambia de tamaño
    useEffect(() => {
        window.addEventListener('resize', hideTargetBox);

        return () => {
            window.removeEventListener('resize', hideTargetBox);
        };
    });

    // Handle seleccionar game item de la lista del dropdown
    const handleSelectItem = (item) => {
        if (
            currentX > item.coords.x - coordRange &&
            currentX < item.coords.x + coordRange &&
            currentY > item.coords.y - coordRange &&
            currentY < item.coords.y + coordRange
        ) {
            // Marcar game item en el header como encontrado (y cambiar estilo)
            const headerItem = document.getElementById('item' + item._id);
            headerItem.classList.add('found');

            // Remover item encontrado de los faltantes
            const items = remainingItems.filter((obj) => obj._id != item._id);
            setRemainingItems(items);

            hideTargetBox();
            setMessage(`Encontraste a ${item.name}!`);
            setAlertClass('alert-success');
        } else {
            hideTargetBox();
            setMessage('Segui buscando!');
            setAlertClass('alert-fail');
        }

        // Handle alert
        if (showAlert === false) {
            // Mostrar alerta si ninguna alerta esta activa
            setShowAlert(true);
            startAlertTimer();
        } else {
            // Si hay una alerta activa, resetear y mostrar una nueva
            resetAlertTimer();
            resetAnimation();
        }
    };

    // Comenzar la alert timer
    const startAlertTimer = () => {
        setAlertTimer(
            setTimeout(() => {
                setShowAlert(false);
            }, 3000),
        );
    };

    // Limpiar timer alerta y empezar uno nuevo
    function resetAlertTimer() {
        clearTimeout(alertTimer);
        startAlertTimer();
    }

    // Resetear animacion para la notificacion de alerta
    const resetAnimation = () => {
        const alert = document.querySelector('.alert');
        alert.style.animation = 'none';
        alert.offsetHeight;
        alert.style.animation = null;
    };

    // Actualizar el contador de items en el header al de los items faltantes
    useEffect(() => {
        const itemCount = document.getElementById('item-count');
        itemCount.textContent = remainingItems.length;
    }, [remainingItems]);

    // Fijarse si el juego termino.
    useEffect(() => {
        if (remainingItems.length < 1) {
            setIsGameOver(true);
        }
    }, [remainingItems]);

    return (
        <div className="game-page">
            <GameImage game={game} imgClass="main-img" handleClick={handleClick} />
            {showAlert && <div className={'alert ' + alertClass}>{message}</div>}
            {showTargetBox && (
                <TargetBox
                    hideTargetBox={hideTargetBox}
                    targetBoxLeft={targetBoxLeft}
                    targetBoxTop={targetBoxTop}
                />
            )}
            {showDropdown && (
                <InfoItems
                    items={remainingItems}
                    type="dropdown"
                    itemClass="dropdown-item"
                    handleSelectItem={handleSelectItem}
                    dropdownLeft={dropdownLeft}
                    dropdownTop={dropdownTop}
                />
            )}
            {isGameOver && <EndPopup game={game} gameTimer={gameTimer} />}
        </div>
    );
}