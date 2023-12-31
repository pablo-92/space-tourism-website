import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/destinations/:name",
        element: <Destinations />,
    },
    {
        path: "/crew/:name",
        element: <Crew />,
    },
    {
        path: "/technology/:name",
        element: <Technology />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
