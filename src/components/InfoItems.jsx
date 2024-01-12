import './styles/InfoItems.css';
import { Icon } from '@iconify/react';

export default function InfoItems() {
    return (
        <div className='infobar'>
            <div className='wally-wrapper'>
                <img
                    className='tracked-wally'
                    //TODO: Cambiar por database
                    src='assets/wallies/wally.png'
                    alt='#'
                />
                {/*walliesFound.includes('wally') && (
                    <Icon
                        className='tracked-wally-overlay'
                        icon="mdi:tick"
                        color='green'
                        height={75}
                    />
                )*/}
            </div>
            <div className='wally-wrapper'>
                <img
                    className='tracked-wally'
                    //TODO: Cambiar por database
                    src='assets/wallies/ladron.png'
                    alt='#'
                />
                {/*walliesFound.includes('ladron') && (
                    <Icon
                        className='tracked-wally-overlay'
                        icon="mdi:tick"
                        color='green'
                        height={75}
                    />
                )*/}
            </div>
            <div className='wally-wrapper'>
                <img
                    className='tracked-wally'
                    //TODO: Cambiar por database
                    src='assets/wallies/wizard.png'
                    alt='#'
                />
                {/*walliesFound.includes('wizard') && (
                    <Icon
                        className='tracked-wally-overlay'
                        icon="mdi:tick"
                        color='green'
                        height={75}
                    />
                )*/}
            </div>
        </div>
    )
}