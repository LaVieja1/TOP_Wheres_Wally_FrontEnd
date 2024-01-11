import { Icon } from "@iconify/react";

export default function SelectorPopup({
    clickCoordinates,
    setSelectorVisible,
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
            className="selector-popup absolute grid justify-items-center"
            style={{
                zIndex: 1,
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
                className="selector-menu grid items-center justify-items-center justify-center rounded-3xl text-black bg-yellow-100 border-2 border-solid border-black"
                style={{
                    gridTemplateRows: "50px 1fr",
                    height: selectorWrapperHeight,
                    width: selectorWrapperWidth,
                    order: selectorMenuOrder,
                }}
            >
                <button
                    type="button"
                    aria-label="Cerrar menu"
                    className="selector-close icon-button w-8 hover:cursor-pointer focus-visible:border-solid focus-visible:border-black focus-visible:border-2"
                    onClick={() => setSelectorVisible(false)}
                >
                    <Icon icon="material-symbols-light:close" height={40} />
                </button>
                Cual es?
            </div>
        </div>
    );
}