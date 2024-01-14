const gameLoader = async () => {
    try {
        const response = await fetch('https://top-wheres-wally-api.onrender.com/api/games');
        if (!response.ok) {
            throw new Error(`Esto es un error HTTP: El status es ${response.status}`);
        }

        const games = await response.json();
        return { games };
    } catch (err) {
        throw new Error('No fue posible conseguir la data con la operación fetch');
    }
}

export default gameLoader;