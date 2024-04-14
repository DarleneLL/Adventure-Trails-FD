import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Trilhas from "./pages/Trilhas.jsx";
import Cadastro from "./pages/Cadastro.jsx";

const routers = createBrowserRouter([
 {
  path: "/",
  element: <Home />
 },
 {
  path: "/cadastro",
  element: <Cadastro />
 },
 {
  path: "/lista",
  element: <Trilhas />
 }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 //  <React.StrictMode>
 //   <App />
 //  </React.StrictMode>
 <RouterProvider router={routers}></RouterProvider>
);
