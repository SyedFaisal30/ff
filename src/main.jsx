import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Landing from "./components/Landing.jsx";
import Detail from "./components/Detail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Policy from "./components/Policy.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/categories", element: <Detail /> },
      { path: "/policy", element: <Policy /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
