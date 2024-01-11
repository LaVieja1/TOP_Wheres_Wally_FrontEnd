import { Icon } from "@iconify/react";

import SelectionOptions from "./SelectorOptions";

// STYLE
import '../styles/SelectorPopup.css';

export default function SelectorPopup({
    clickCoordinates,
    setSelectorVisible,
    handleWallySelection,
    clientY,
}) {
    const { x, y } = clickCoordinates;

    // Dimensiones
    const selectorIconSize = 75;
    const selectorWrapperWidth = 200;
    const selectorWrapperHeight = 200;
    const rowGap = 10;

    // Menu is below selector icon by default
    let selectorMenuOrder = 1

    // Calculate offsets
    let selectorWrapperTop = y - selectorIconSize / 2;
    const selectorWrapperLeft = x - selectorWrapperWidth / 2;

    // Put the menu on top when user clicks near the bottom of the image,
    // preventing the menu from appearing outside the image
    if (clientY > 400) {
        selectorMenuOrder = -1;
        selectorWrapperTop -= selectorWrapperHeight + rowGap; // Recalculate offset
    }

    return (
        <div
            className="selector-popup fade-in"
            style={{
                top: selectorWrapperTop,
                left: selectorWrapperLeft,
                rowGap
            }}
        >
            <Icon
                className="selector-icon"
                icon="material-symbols:circle-outline" color="white"
                width={selectorIconSize}
            />

            <div
                className="selector-menu"
                style={{
                    height: selectorWrapperHeight,
                    width: selectorWrapperWidth,
                    order: selectorMenuOrder,
                }}
            >
                <button
                    type="button"
                    aria-label="Cerrar menu"
                    className="selector-close icon-button"
                    onClick={() => setSelectorVisible(false)}
                >
                    <Icon icon="material-symbols-light:close" height={40} />
                </button>
                Cual es?
                <SelectionOptions
                    clickCoordinates={clickCoordinates}
                    //handleWallySelection={handleWallySelection}
                />
            </div>
        </div>
    );
}