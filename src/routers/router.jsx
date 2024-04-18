import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Trilhas from "../pages/Trilhas.jsx";
import Cadastro from "../pages/Cadastro.jsx";
import PaginaErro from "../pages/PaginaErro.jsx";

const routers = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <PaginaErro />,
  children: [
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
  ]
 }
]);

export default routers;
