import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='flex w-full max-h-36 justify-between items-center px-6 py-4 gap-2'>
            <Link to="/" className='flex-1'>
                <img src='../../assets/wally-logo.png' className='object-fill max-w-20 max-h-20 bg-transparent'></img>
            </Link>
            <Link to="/leaderboard" className=''>
                Leaderboard
            </Link>
            <Link to="https://github.com/LaVieja1" className=''>
                <Icon icon="mdi:github" width={80} height={40} />
            </Link>
        </nav>
    )
}

export default Header;