import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { URLS } from "./config/navigation";

import HomePage from "../pages/General/HomePage";
import NotFoundPage from "../pages/General/NotFoundPage";
import { COLORS } from "./config/theme";

const router = createBrowserRouter([
    {
        children: [
            {
                path: URLS.homePage,
                element: <HomePage />,
            },

            // 404
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div
            style={{
                backgroundColor: COLORS.backgroundColor,
                minHeight: "100vh",
            }}
        >
            <RouterProvider router={router} />
        </div>
    </StrictMode>,
);
