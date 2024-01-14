export default function GameImage({ game, imgClass, handleClick }) {
    return (
        <img
            onClick={handleClick ? handleClick : null}
            className={imgClass ? imgClass : null}
            src={'https://top-wheres-wally-api.onrender.com/api/img/games/' + game._id}
            alt=""
            draggable='false'
        />
    );
}