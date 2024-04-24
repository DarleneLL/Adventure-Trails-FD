import { useNavigate } from "react-router-dom";

function NavPagTrilhas() {
 const navigate = useNavigate();

 const handleNavigateTrilhas = () => {
  navigate("/trilhas");
 };

 const handleNavigateCadastro = () => {
  navigate("/Cadastro");
 };

 //  return handleNavigateTrilhas, handleNavigateCadastro;
}

export default NavPagTrilhas;
