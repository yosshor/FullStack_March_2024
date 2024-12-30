import { createBrowserRouter } from "react-router-dom";
import Main from "./view/pages/main/Main";
import LoginPage from "./view/pages/login/LoginPage";
import RandomJokes from "./view/pages/randomJokes/RandomJokes";
import Register from "./view/pages/register/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,

    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/jokes",
        element: <RandomJokes />,
    }
]);