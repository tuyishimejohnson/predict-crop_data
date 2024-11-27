import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./defaultLayout.tsx";
import Home from "./home.tsx";
import Contacts from "./contacts.tsx";
import Faqs from "./signup.tsx";
import Dashboard from "./dashboard.tsx";
import Predict from "./predict.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/predict",
        element: <Predict />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
