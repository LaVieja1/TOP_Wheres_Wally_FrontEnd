import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [lbEntries, setlbEntries] = useState([]);
  const [updateLeaderboard, setUpdateLeaderboard] = useState(false);
  const { games } = useLoaderData();
  const [lastlbKey, setLastlbKey] = useState(null);
  const [prevPath, setPrevPath] = useState(null);
  const [gameTimer, setGameTimer] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getlbData = async () => {
      try {
        const response = await fetch(
          'https://top-wheres-wally-api.onrender.com/api/entries',
        );
        if (!response.ok) {
          throw new Error(`Esto es un error HTTP: El status es ${response.status}`);
        }
        const lbData = await response.json();
        setlbEntries(lbData);
      } catch (err) {
        setlbEntries([]);
        throw new Error('No fue posible conseguir la data con la operación fetch');
      }
    };
    getlbData();
    setLoading(false);
  }, [updateLeaderboard]);

  if (loading) return <p>Cargando...</p>

  return (
    <>
      <ScrollToTop prevPath={prevPath} setPrevPath={setPrevPath} />
      <Header games={games} lastlbKey={lastlbKey} gameTimer={gameTimer} />
      <Outlet
        context={{
          games,
          updateLeaderboard,
          setUpdateLeaderboard,
          lbEntries,
          setLastlbKey,
          gameTimer,
          setGameTimer,
          prevPath,
          setPrevPath,
        }}
      />
    </>
  );
}

export default App;