import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link, useParams, useLocation } from 'react-router-dom';
import GameTimer from './GameTimer';
import InfoItems from './InfoItems';

// STYLE
import './styles/Header.css';

const Header = ({ games, lastLbKey, gameTimer }) => {

    const { gameKey } = useParams();
    const game = games.find((obj) => obj.key == gameKey);
    const [showMenu, setShowMenu] = useState(false);
    const [showItems, setShowItems] = useState(false);
    const location = useLocation();

    // Cerrar menus si la ventana cambia de tamaño
    useEffect(() => {
        window.addEventListener('resize', () => {
            setShowMenu(false);
            setShowItems(false);
        });

        return () => {
            window.removeEventListener('resize', () => {
                setShowMenu(false);
                setShowItems(false);
            });
        };
    });

    // Cerrar menus si la ruta cambia
    useEffect(() => {
        setShowMenu(false);
        setShowItems(false);
    }, [location]);

    // Cerrar menus si se clickea fuera del menu
    const handleCloseDropdown = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowMenu(false);
            setShowItems(false);
        }
    };

    return (
        <nav className='header'>
            <Link to="/" className='logo'>
                <img src='/assets/wally-logo.png' className='logo-img link'></img>
            </Link>
            {!gameKey ? (
                <div onBlur={(e) => handleCloseDropdown(e)}>
                    <div className={showMenu ? 'nav show' : 'nav'}>
                        <Link to={lastLbKey ? '/leaderboard/' + lastLbKey : '/leaderboard/1'} className='link'>
                            <p>Puntuaciones</p>
                        </Link>
                        <Link to="https://github.com/LaVieja1" className='link'>
                            <Icon icon="mdi:github" width={80} height={40} />
                        </Link>
                    </div>
                    <button className='menu-btn' onClick={() => setShowMenu(!showMenu)}>
                        <img src='/menu.svg' alt='' />
                    </button>
                </div>
            ) : (
                <>
                    <GameTimer gameTimer={gameTimer} />
                    <div onBlur={(e) => handleCloseDropdown(e)}>
                        <InfoItems
                            items={game.items}
                            type="items-to-find"
                            divClass={showItems ? 'show' : null}
                            itemClass="item"
                        />
                        <div id='item-count' onClick={() => setShowItems(!showItems)} tabIndex={0}></div>
                    </div>
                </>
            )}
        </nav>
    );
/*
    return (
        <nav className='header-nav'>
            <Link to="/" className='logo'>
                <img src='/assets/wally-logo.png' className='logo-img nav-link'></img>
            </Link>
            <div className='header-timer'>
                <GameTimer gameTimer={gameTimer} />
            </div>
            <div className='header-items'>
                <InfoItems />
            </div>
            <Link to="/leaderboard" className='nav-link'>
                Leaderboard
            </Link>
            <Link to="https://github.com/LaVieja1" className='nav-link'>
                <Icon icon="mdi:github" width={80} height={40} />
            </Link>
        </nav>
    )
*/
}

export default Header;