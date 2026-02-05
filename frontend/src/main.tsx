import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { URLS } from "./config/navigation";

import NotFoundPage from "../pages/General/NotFoundPage"

const router = createBrowserRouter([
    {
        children: [
            // Public Routes - for unauthenticated users

            {
                path: URLS.homePage,
                element: (
                    <>hello</>
                ),
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
        <RouterProvider router={router} />
    </StrictMode>,
);
