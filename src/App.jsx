import { useEffect, useState } from "react"
import Canvas from "./components/Canvas"
import Header from "./components/Header"
import { Outlet } from "react-router-dom";

function App() {

  const [gameTimer, setGameTimer] = useState(0);

  return (
    <>
      <Header gameTimer={gameTimer} />
      <Outlet
        context={{
          gameTimer,
          setGameTimer,
        }}
      />
    </>
  )
}

export default App