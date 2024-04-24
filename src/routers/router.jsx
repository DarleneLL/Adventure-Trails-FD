import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Trilhas from "../pages/Trilhas/Trilhas.jsx";
import Cadastro from "../pages/PaginaCadastroTrilha/index.jsx";
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
    path: "/trilhas",
    element: <Trilhas />
   }
  ]
 }
]);

export default routers;
