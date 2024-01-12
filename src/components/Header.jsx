import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import GameTimer from './GameTimer';
import InfoItems from './InfoItems';

// STYLE
import './styles/Header.css';

const Header = ({ gameTimer }) => {

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
}

export default Header;