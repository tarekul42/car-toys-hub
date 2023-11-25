import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import App from '../../App'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: "404 page not found",
        children: [
            {
                path: '/',
                element: <App />
            }
        ]
    }
]);