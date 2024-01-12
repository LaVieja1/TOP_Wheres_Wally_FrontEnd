import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import GamePage from "../pages/GamePage";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/game',
            element: <GamePage />
        }
    ]);
    return <RouterProvider router={router} />;
}