import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

// STYLE
import './styles/Header.css';

const Header = () => {
    return (
        <nav className='header-nav'>
            <Link to="/" className='logo'>
                <img src='/assets/wally-logo.png' className='logo-img nav-link'></img>
            </Link>
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