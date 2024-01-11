import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

// STYLES
import '../styles/SelectorOptions.css';

import wallyList from '../../data/willylist';

export default function SelectionOptions({
    clickCoordinates,
    //handleWallySelection,
}) {
    // Cache all images in options on first open
    useEffect(() => {
        wallyList[0].forEach((wally) => {
            new Image().src = wally.imageUrl;
        });
    }, []);

    const [imageIndex, setImageIndex] = useState(0);
    const hasPrevious = imageIndex > 0;
    const hasNext = imageIndex < wallyList[0].length - 1;

    function handleNextImage() {
        if (hasNext) setImageIndex(imageIndex + 1);
        else setImageIndex(0);
    }

    function handlePreviousImage() {
        if (hasPrevious) setImageIndex(imageIndex - 1);
        else setImageIndex(wallyList.length - 1);
    }

    return (
        <div className='selection-carousel'>
            <button
                type='button'
                aria-label='Anterior imagen'
                className='previous-image carousel-arrow icon-button'
                onClick={handlePreviousImage}
            >
                <Icon icon="mingcute:left-fill" height={50} />
            </button>
            <button
                className='selection-button icon-button'
                type='button'
                //onClick={() =>
                //    handleWallySelection(wallyList[0][imageIndex].name, clickCoordinates)
                //}
            >
                <img
                    className='selection-image'
                    src={wallyList[0][imageIndex].imageUrl}
                    alt={wallyList[0][imageIndex].name}
                />
            </button>
            <button
                type='button'
                aria-label='Siguiente imagen'
                className='next-image carousel-arrow icon-button'
                onClick={handleNextImage}

            >
                <Icon icon="mingcute:right-fill" height={50} />
            </button>
        </div>
    );
}