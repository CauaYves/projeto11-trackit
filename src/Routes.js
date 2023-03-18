import { useRoutes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Habitos from "./pages/Habitos";
import Historico from "./pages/Historico";
import Hoje from "./pages/Hoje";

const Routes = () => {
    return useRoutes([
      { path: "/", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/habitos", element: <Habitos /> },
      { path: "/historico", element: <Historico /> },
      { path: "/hoje", element: <Hoje /> },
    ]);
  };
  export default Routes
  