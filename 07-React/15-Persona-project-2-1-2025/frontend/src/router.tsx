import { createBrowserRouter } from "react-router-dom";
import Register from "./view/pages/register/Register";
import Game from "./view/pages/game/Game";
import Home from "./view/pages/home/Home";
import LoginPage from "./view/pages/login/LoginPage";


const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />,
        errorElement: <h1>404 Not Found</h1>,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/game",
        element: <Game />,
    }
]);

export default router;
