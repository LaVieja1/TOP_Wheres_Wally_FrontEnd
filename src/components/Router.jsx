import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import gameLoader from '../loaders/gameLoader';
import ErrorPage from "./ErrorPage";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";

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
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}