import { useEffect, useState } from "react";
import SelectorPopup from "./selector/SelectorPopup";

const Canvas = () => {
    const [clickCoordinates, setClickCoordinates] = useState({ x: 1, y: 1 });
    const [selectorVisible, setSelectorVisible] = useState(false);
    const [clientY, setClientY] = useState(null);

    useEffect(() => {
        const imageContainer = document.querySelector('.image-container');
        const image = document.querySelector('.search-image');

    // Save click coordinates
    image.addEventListener('click', (e) => {
            const rect = image.getBoundingClientRect();
            setClickCoordinates({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
            setClientY(e.clientY);
            setSelectorVisible(true);
        });

    }, []);

    return (
        <div className="image-container relative overflow-hidden rounded-2xl">
            <img src="/assets/wally1.png" className="search-image -mb-1 hover:cursor-grab" draggable="false"></img>
            {selectorVisible && (
                <SelectorPopup
                    clickCoordinates={clickCoordinates}
                    setSelectorVisible={setSelectorVisible}
                    clientY={clientY}
                />
            )}
        </div>
    )
}

export default Canvas;