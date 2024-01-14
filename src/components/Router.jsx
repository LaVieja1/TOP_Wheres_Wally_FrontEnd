import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import gameLoader from '../loaders/gameLoader';
import ErrorPage from "./ErrorPage";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import LeaderboardPage from "../pages/LeaderboardPage";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
            loader: gameLoader,
            children: [
                {path: '/', element: <HomePage />},
                {path: '/game/:gameKey', element: <GamePage />},
                {path: '/leaderboard/:lbKey', element: <LeaderboardPage />},
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}