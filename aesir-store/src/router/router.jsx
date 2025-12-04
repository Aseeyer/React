import { createBrowserRouter } from "react-router";     
import LoginPage from "../auth/Login/LoginPage";
import Register from "../auth/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path:"/register",
        element: <Register />
    }
]);

export default router;