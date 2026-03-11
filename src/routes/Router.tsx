import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ProjectShipping from "../pages/ProjectShipping";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/projeto/search",
        element: <ProjectShipping />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}